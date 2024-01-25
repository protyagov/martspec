import "bootstrap";
import "src/sass/main.scss";
import * as React from "react";
import { createRoot } from 'react-dom/client';
import { App } from './router';
import { Locale } from "src/i18n/locale";
import eb from 'src/event-bus';
eb.addEvent("LANG_CHANGED", (lang) => createRoot(document.getElementById('root')).render(React.createElement(App, null)));
Locale.init();
//# sourceMappingURL=index.js.map