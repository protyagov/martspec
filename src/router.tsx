import * as React from "react";
import MainPage from "src/page/main";
import Error_404 from 'src/error/404';
import WaistLine from "./page/waist";
import Electrolyte from "./page/electrolyte";
import Bodymass from "./page/mass";
import Vitamin from "./page/vitamin";
import VitaminElement from "./page/vitamin-element";
import PrivacyPolicy from "./page/private-policy";
import { Locale } from "src/i18n/locale";
import BodyZinc from "./page/bodyzinc";
import BodySize from "./page/bodysize";
import Emotion from "./page/emotion";
import Productivity from "./page/productivity";
import Biorhythms from "./page/biorhythms";
import About from "src/page/about";
import Mission from "src/page/mission";
import Team from "src/page/team";
import ComingSoon from "src/page/coming-soon";
import Anxiety from "./page/anxiety";

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
            return <Electrolyte />;
        case "/bodymass":
            return <Bodymass />;
        case "/waistline":
            return <WaistLine />;
        case "/vitamin":
            return <Vitamin />;
        case "/bodyzinc":
            return <BodyZinc />;
        case "/emotion":
            return <Emotion />;
        case "/emotion/productivity":
            return <Productivity />;
        case "/emotion/biorhythms":
            return <Biorhythms />
        case "/emotion/anxiety":
            return <Anxiety />
        case "/bodysize":
            return <BodySize />;
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

