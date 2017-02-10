import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class alerts {
    constructor(public alertCtrl: AlertController) {
    }

    public showAlert(title: string, text: string, buttons: string[] = ['OK']) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: buttons
        });
        alert.present();
    }
}