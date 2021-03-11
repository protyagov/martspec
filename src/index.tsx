import "bootstrap";
import "src/sass/main.scss"
import * as React from "react";
import * as ReactDOM from 'react-dom';
import { App } from './router';
import { Locale } from "src/i18n/locale";
import eb from 'src/event-bus';

eb.addEvent("LANG_CHANGED", (lang: string) =>
    ReactDOM.render(<App />, document.getElementById('root'))
);
Locale.init();