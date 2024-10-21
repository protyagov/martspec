import "bootstrap";
import "@/sass/main.scss";

import React from "react";
import type { GlobalProvider } from "@ladle/react";

import { Locale } from "@/i18n/locale";

// locale initialization
Locale.init();

// share locale and styles via decorator
export const Provider: GlobalProvider = ({ children }) => (
    <article className="ms-base-page ms-base-new h-100 align-content-center">{children}</article>
);
