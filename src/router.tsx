import * as React from "react";
import MainPage from "src/landing/main";
import Error_404 from 'src/error/404';
import P4LogWaist from "./landing/p4-waist";
import P1Electrolyte from "./landing/p1-electrolyte";
import P2LogMass from "./landing/p2-mass";
import P3LogVitamin from "./landing/p3-vitamin";
import PrivacyPolicy from "./landing/private-policy";
import { Locale } from "src/i18n/locale";



export function App() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect == null)
        redirect = location.pathname;
    else
        redirect = redirect.replace(location.href, '/');

    if (redirect.length > 1)
        redirect = redirect.replace(/\/$/, "");

    switch (Locale.setLanguageFromUrl(redirect)) {
        case "/":
            return <MainPage />;
        case "/electrolyte":
            return <P1Electrolyte />;
        case "/logmass":
            return <P2LogMass />;
        case "/logwaist":
            return <P4LogWaist />;
        case "/logvitamin":
            return <P3LogVitamin />;
        case "/privacy-policy":
            return <PrivacyPolicy />;
        default:
            return <Error_404 />;
    }
}

