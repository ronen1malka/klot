/*******************************************************************************/
// Class.create
/*******************************************************************************/
var Class = {};
Class.create = function(methods) {
	var Clz = methods.initialize;
	for(var mth in methods) {
		if(mth != 'initialize') {
			Clz.prototype[mth] = methods[mth];
		}
	}
	return Clz;
};

/*******************************************************************************/
// Class.extend
/*******************************************************************************/
Class.extend = function(Superclz, methods) {
	var Subclz = this.create(methods);
	var subproto = Subclz.prototype;
	Subclz.prototype = new Superclz();
	for(var p in Subclz.prototype) {
		if(Subclz.prototype.hasOwnProperty(p)) {
			delete Subclz.prototype[p];
		}
	}
	Subclz.prototype.constructor = Subclz;
	for(var p in subproto) {
		Subclz.prototype[p] = subproto[p];
	}
	return Subclz;
};

/*******************************************************************************/
// SLLink
/*******************************************************************************/
function SLLink(x, y, width, height, linkTo) {
	this.left = x;
	this.top = y;
	this.right = x+width;
	this.bottom = y+height;
	this.linkTo = linkTo;
}

/*******************************************************************************/
// SLPage
/*******************************************************************************/
var SLPage = Class.create({
/** Object initialize **/
    initialize : function(x, y, width, height, imgSrc) {
		this.img = new Image();
		this.img.src = imgSrc;
		this.linkList = [];
    },
	
/** Object draw function **/
    Draw : function(linkIndex) {
		ctx.save();
		
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		if(linkIndex != -1) {
			var link = this.linkList[linkIndex];
			//
			ctx.globalAlpha = 0.4;
			ctx.lineWidth = 1;
			ctx.fillStyle = '#9999ff';
			ctx.fillRect(this.x+link.left, this.y+link.top, link.right-link.left, link.bottom-link.top);
			ctx.strokeStyle = '#9999ff';			
			ctx.strokeRect(this.x+link.left, this.y+link.top, link.right-link.left, link.bottom-link.top);
		}     
		
		ctx.restore();
    },

/** Object operate function **/
	HitTest : function(x, y) {
		for(var i=0; i<this.linkList.length; i++) {
			var link = this.linkList[i];
			if(((x>this.x+link.left) && (x<this.x+link.right)) &&
				((y>this.y+link.top) && (y<this.y+link.bottom))) {
				canvas.setAttribute('style', 'cursor: pointer');
				return i;
			} 
		}
		canvas.setAttribute('style', 'cursor: default');
		return -1;
	},
	AddLink : function(x, y, width, height, linkTo) {
		this.linkList.push(new SLLink(x, y, width, height, linkTo));
	},	
	GetLinkTo : function(linkIndex) {
		if(linkIndex != -1) {
			var link = this.linkList[linkIndex];
			return link.linkTo;
		}
		return -1;
	},	
	MoveToCenter : function() {
		this.x = (canvas.width-this.width)/2;
		this.y = 10;
	},	
	Move : function(deltaX, deltaY) {
		this.x = this.x + deltaX;
		this.y = this.y + deltaY;
	}
});

/*******************************************************************************/
// Action
/*******************************************************************************/
var canvas;
var content;
//
var pageList = [];
var currPageIndex = 0;
var currPage = null;
var currLinkIndex = -1;
//
var bMouseDown = false;
var bMouseDrag = false;
var bShowHotKey = false;
var mouseDown;
var mouseLast;
//
var scaleFactor = 1.0;
var imgPrev, imgNext;

window.onload = function() {
	initPage();
	
	canvas = document.getElementById('drawarea');
	if(canvas.getContext) {
		ctx = canvas.getContext('2d');
	}

	/* Mousewheel -> zoom */
	/*var canvas_onmousewheel = function(e) {
		var delta = e.detail? e.detail*(-120): e.wheelDelta;
		if(delta>0) {
			if(scaleFactor<3.0)
				scaleFactor += 0.1;
		}
		else {
			if(scaleFactor>0.2)
				scaleFactor -= 0.1;
		}
		drawCanvas();	
		return e.preventDefault() && false;
	};
	canvas.addEventListener('DOMMouseScroll', canvas_onmousewheel, false);
	canvas.addEventListener('mousewheel', canvas_onmousewheel, false);*/
	
	/* Keydown*/
	window.addEventListener('keydown', doKeyDown, true);
	function doKeyDown(e){
		switch(e.keyCode) {	
		case 72:  /* H was pressed */
			bShowHotKey = !bShowHotKey;
			drawCanvas();
			break;		
		case 87:  /* W was pressed */
		case 38:  /* Up arrow was pressed */
			gotoPage(0);
			break;
		case 83:  /* S was pressed */	
		case 40:  /* Down arrow was pressed */
			gotoPage(pageList.length-1);
			break;
		case 65:  /* A was pressed */	
		case 37:  /* Left arrow was pressed */
			if(currPageIndex > 0)
				gotoPage(--currPageIndex);
			break;
		case 68:  /* D was pressed */	
		case 39:  /* Right arrow was pressed */
			if(currPageIndex < pageList.length-1)
				gotoPage(++currPageIndex);
			break;
		case 73:  /* I was pressed */	
			scaleFactor += 0.1;
			drawCanvas();
			break;
		case 79:  /* O was pressed */	
			scaleFactor -= 0.1;
			drawCanvas();
			break;
		}
	}

	/* Resize canvas */
	window.addEventListener('resize', resizeCanvas, false);
	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		drawCanvas();
	}
	resizeCanvas();
}

function initBar(PrevSrc, NextSrc) {
	imgPrev = new Image();
	imgPrev.src = PrevSrc;
	imgNext = new Image();
	imgNext.src = NextSrc;
}

function addPage(imgSrc, bGoto) {
	var page = new SLPage(0, 0, 0, 0, imgSrc);
	pageList.push(page);	
	page.img.onload = function() {
		page.width = page.img.width;
		page.height = page.img.height;
		page.MoveToCenter();
				
		if(bGoto) {
			gotoPage(0);
		}			
	}
	return page;
}

function gotoPage(pageIndex) {
	currPageIndex = pageIndex;
	currPage = pageList[currPageIndex];
	currPage.MoveToCenter();
	currLinkIndex = -1;
	drawCanvas();
}

function drawCanvas() {
	/* Draw page */
	ctx.save();
	ctx.fillStyle = '#ffffff';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.scale(scaleFactor, scaleFactor);
	
	if(currPage)
		currPage.Draw(currLinkIndex, bMouseDown);
	ctx.restore();	

	/* Draw bar */
	ctx.save();
	ctx.globalAlpha = 0.8;	
	ctx.fillStyle = '#000000';
	ctx.fillRect(0, canvas.height-36, canvas.width, 36);
	//
	ctx.globalAlpha = 1.0;
	if(currPageIndex>0) 
		ctx.drawImage(imgPrev, 12, canvas.height-30, 24, 24);	
	ctx.fillStyle = '#eeeeee';
	ctx.font = '10pt Calibri';
	ctx.textAlign = 'center';
	ctx.fillText(currPageIndex+1 + ' - ' + pageList.length, canvas.width/2, canvas.height-20);
	ctx.fillStyle = '#999999';
	ctx.fillText('    Zoom: ' + parseInt(scaleFactor*100, 10) + ' %   (Press [H] - view hotkeys)', canvas.width/2, canvas.height-8);	
	if(currPageIndex<pageList.length-1) 
		ctx.drawImage(imgNext, canvas.width-36, canvas.height-30, 24, 24);	
	ctx.restore();	
	
	/* Draw hot key */
	if(bShowHotKey)
	{
		ctx.save();
		ctx.globalAlpha = 0.7;	
		ctx.fillStyle = '#000000';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		//
		ctx.globalAlpha = 1.0;	
		ctx.fillStyle = '#ffffff';
		ctx.font = '24pt Calibri';
		ctx.textAlign = 'center';
		ctx.fillText('Hotkeys:', canvas.width/2, canvas.height/2-40-40-40-40);
		ctx.fillText('Press [H] - view hotkeys', canvas.width/2, canvas.height/2-40-40-40);
		ctx.fillText('Press [W / Up] - goto begin page', canvas.width/2, canvas.height/2-40-40);
		ctx.fillText('Press [S / Down] - goto end page', canvas.width/2, canvas.height/2-40);	
		ctx.fillText('Press [A / Left] - page up', canvas.width/2, canvas.height/2);
		ctx.fillText('Press [D / Right] - page down', canvas.width/2, canvas.height/2+40);
		ctx.fillText('Press [I] - zoom in', canvas.width/2, canvas.height/2+40+40);
		ctx.fillText('Press [O] - zoom out', canvas.width/2, canvas.height/2+40+40+40);
		ctx.restore();		
	}	
}

function canvas_onmousedown(e) {
	bMouseDown = true;
	bMouseDrag = false;
	var x = (e.clientX - canvas.offsetLeft);
	var y = (e.clientY - canvas.offsetTop);
	mouseDownX = mouseLastX = x / scaleFactor;
	mouseDownY = mouseLastY = y / scaleFactor;	
	//
	if(currPageIndex>0) { /* Page up */
		if(((x>12) && (x<36)) &&
			((y>canvas.height-36) && (y<canvas.height))) {
			gotoPage(--currPageIndex);
			bMouseDown = false;
			return;
		} 
	}
	
	if(currPageIndex<pageList.length-1) { /* Page down */
		if(((x>canvas.width-36) && (x<canvas.width-12)) &&
			((y>canvas.height-36) && (y<canvas.height))) {
			gotoPage(++currPageIndex);
			bMouseDown = false;
			return;
		} 	
	}

	if(currPage) {
		currLinkIndex = currPage.HitTest(mouseDownX, mouseDownY);
	}
	drawCanvas();
}

function canvas_onmousemove(e) {
	var x = (e.clientX - canvas.offsetLeft) / scaleFactor;
	var y = (e.clientY - canvas.offsetTop) / scaleFactor;
	//
	if(bMouseDown) {	
		if(currPage) {
			if((x-mouseDownX>5) || (y-mouseDownY>5)) {
				if(!bMouseDrag)
					canvas.setAttribute('style', 'cursor: move');
				bMouseDrag = true;
				currLinkIndex = -1;
			}		
			currPage.Move(x - mouseLastX, y - mouseLastY);
			drawCanvas();
		}
		mouseLastX = x;
		mouseLastY = y;
	}
	else {
		if(currPage) {
			currLinkIndex = currPage.HitTest(x, y);
			drawCanvas();
		}
	}			
}

function canvas_onmouseup(e) {
	if(currPage && !bMouseDrag) {
		currLinkIndex = currPage.HitTest(mouseLastX, mouseLastY);
		if(currLinkIndex != -1) {
			var pageIndex = currPage.GetLinkTo(currLinkIndex);
			if((pageIndex>-1) && (pageIndex<pageList.length))
				gotoPage(pageIndex);
		}
	}	
	//
	canvas.setAttribute('style', 'cursor: default');
	bMouseDown = false;	
	bMouseDrag = false;
}	
