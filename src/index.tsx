import "bootstrap";
import "src/sass/main.scss"
import * as React from "react";
import * as toastr from "toastr";
import * as ReactDOM from 'react-dom';
import { App } from './router';
import eb from 'src/event-bus';
import { locale } from 'src/i18n/locale';

eb.addEvent("LANG", (lang: string) => {
    // if (locale.language === lang)
    // return;
    //locale.language = lang;

    ReactDOM.render(<App />, document.getElementById('root'));
});
// eb.send("LANG", locale.language);
toastr.options.positionClass = "toast-top-center";


//ReactDOM.render(<App />, document.getElementById('root'));
