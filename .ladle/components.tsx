import React from "react";
import type { GlobalProvider } from "@ladle/react";
import { Locale } from "@/i18n/locale";

// import bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// locale initialization
Locale.init();

// share locale and styles via decorator
export const Provider: GlobalProvider = ({ children }) => <>{children}</>;
