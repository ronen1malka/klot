import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'button-icon',
    templateUrl: 'buttonWithIconComponent.html'
})
export class butonWithIcon {
    @Input() label: string = "";
    @Input() icon: string = "";
    @Input() color: string = "primary"
    @Output('onClick') Click = new EventEmitter();

    onClick() {
        this.Click.emit();
    }




}