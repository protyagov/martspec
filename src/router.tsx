import * as React from "react";
import MainPage from "src/page/main";
import Error_404 from 'src/error/404';
import P4WaistLine from "./page/waist";
import P1Electrolyte from "./page/electrolyte";
import P2bodymass from "./page/mass";
import Vitamin from "./page/vitamin";
import VitaminElement from "./page/vitamin-element";
import PrivacyPolicy from "./page/private-policy";
import { Locale } from "src/i18n/locale";
import P5BodyZinc from "./page/bodyzinc";
import P6BodySize from "./page/bodysize";
import P7Emotion from "./page/emotion";
import Productivity from "./page/productivity";
import Biorhythms from "./page/biorhythms";
import About from "src/page/about";
import Mission from "src/page/mission";
import Team from "src/page/team";
import ComingSoon from "src/page/coming-soon";

export function App() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect == null)
        redirect = location.pathname;
    else
        redirect = redirect.replace(location.href, '/');

    if (redirect.length > 1)
        redirect = redirect.replace(/\/$/, "");
    
    const url = Locale.setLanguageFromUrl(redirect); 

    switch (url) {
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
        case "/emotion/productivity":
            return <Productivity />;
        case "/emotion/biorhythms":
            return <Biorhythms />
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
        case "/coming-soon":
            return <ComingSoon />
        default:
            const [, pagePath, currentPath] = url.split("/");
            
            if (pagePath == "vitamin") return <VitaminElement id={currentPath} />;
        
            return <Error_404 />;
    }
}

