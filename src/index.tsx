import "bootstrap";
import "@/sass/main.scss"
import * as React from "react";
import { createRoot } from 'react-dom/client';
import { App } from '@/router';
import { Locale } from "@/i18n/locale";
import eb from '@/event-bus';


eb.addEvent("LANG_CHANGED", (lang: string) =>
    createRoot(document.getElementById('root')).render(<App />)
);
Locale.init();