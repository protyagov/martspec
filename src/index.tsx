import "bootstrap";
import "src/sass/main.scss"
import * as React from "react";
import * as toastr from "toastr";
import * as ReactDOM from 'react-dom';
import { App } from './router';
import eb from 'src/event-bus';

eb.addEvent("LANG_CHANGED", (lang: string) =>
    ReactDOM.render(<App />, document.getElementById('root'))
);
toastr.options.positionClass = "toast-top-center";