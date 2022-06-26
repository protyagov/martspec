import "bootstrap";
import "src/sass/main.scss"
import * as React from "react";
import { createRoot } from 'react-dom/client';
import { App } from './router';
import { Locale } from "src/i18n/locale";
import eb from 'src/event-bus';


eb.addEvent("LANG_CHANGED", (lang: string) =>
    createRoot(document.getElementById('root')).render(<App />)
);
Locale.init();