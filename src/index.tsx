import "bootstrap";
import "@/sass/main.scss";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/router";
import { Locale } from "@/i18n/locale";
import eb from "@/event-bus";

const root = createRoot(document.getElementById("root"));

eb.addEvent("LANG_CHANGED", () => root.render(<App />));
Locale.init();
root.render(<App />);
