import "bootstrap";
import "@/sass/main.scss";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/router";
import { Locale } from "@/i18n/locale";
import eb from "@/event-bus";

const root = document.getElementById("root");
if (!root) throw new Error(`html element with id:"root" was not found`);

eb.addEvent("LANG_CHANGED", (lang: string) => createRoot(root).render(<App />));
Locale.init();
