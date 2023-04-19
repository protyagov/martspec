import * as React from "react";
import MainPage from "src/landing/main";
import Error_404 from 'src/error/404';
import P4WaistLine from "./landing/p4-waist";
import P1Electrolyte from "./landing/p1-electrolyte";
import P2bodymass from "./landing/p2-mass";
import Vitamin from "./landing/vitamin";
import PrivacyPolicy from "./landing/private-policy";
import { Locale } from "src/i18n/locale";
import P5BodyZinc from "./landing/p5-bodyzinc";
import P6BodySize from "./landing/p6-bodysize";
import P7Emotion from "./landing/p7-emotion";
import About from "src/landing/about";
import Mission from "src/landing/mission";
import Team from "src/landing/team";


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
        case "/bodymass":
            return <P2bodymass />;
        case "/waistline":
            return <P4WaistLine />;
        case "/vitamin":
            return <Vitamin />;
        case "/bodyzinc":
            return <P5BodyZinc />;
        case "/emotion":
            return <P7Emotion />;
        case "/bodysize":
            return <P6BodySize />;
        case "/privacy-policy":
            return <PrivacyPolicy />;
        case "/about":
            return <About />
        case "/mission":
            return <Mission />
        case "/team":
            return <Team />
        default:
            return <Error_404 />;
    }
}

