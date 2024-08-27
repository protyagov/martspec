import React from "react";
import type { GlobalProvider } from "@ladle/react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Provider: GlobalProvider = ({ children }) => <>{children}</>;
