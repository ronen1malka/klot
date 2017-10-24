import { AlertController, ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class alerts {
    constructor(public alertCtrl: AlertController,
                public toastCtrl: ToastController) {
    }

    public showAlert(title: string, text: string, buttons: string[] = ['OK']) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: buttons
        });
        alert.present();
    }

    public presentToast(text: string):Promise<any> {
        let toast = this.toastCtrl.create({
            message: text,
            duration: 3000
        });
        return toast.present();
    }

}