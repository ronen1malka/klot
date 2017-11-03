import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpClient } from '@angular/common/http';

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCog0AA9ICm1SadztOCSIX6s7G-TU_UEaw",
        authDomain: "klot-52d58.firebaseapp.com",
        databaseURL: "https://klot-52d58.firebaseio.com",
        projectId: "klot-52d58",
        storageBucket: "klot-52d58.appspot.com",
        messagingSenderId: "463264992294"
    }
};

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}