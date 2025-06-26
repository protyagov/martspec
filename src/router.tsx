import * as React from "react";
import MainPage from "@/atomic/page/main";
import Error_404 from "@/atomic/page/404";
import WaistLine from "@/atomic/page/waist";
import Electrolyte from "@/atomic/page/electrolyte";
import Bodymass from "@/atomic/page/mass";
import Vitamin from "@/atomic/page/vitamin";
import Magnesium from "./atomic/page/magnesium";
import VitaminElement from "@/atomic/prototype/vitamin-element";
import PrivacyPolicy from "@/atomic/page/private-policy";
import { Locale } from "@/i18n/locale";
import BodyZinc from "@/atomic/page/bodyzinc";
import BodySize from "@/atomic/page/bodysize";
import Emotion from "@/atomic/page/emotion";
import Productivity from "@/atomic/page/emotion/productivity";
import Biorhythms from "@/atomic/page/emotion/biorhythms";
import About from "@/atomic/page/about";
import Team from "@/atomic/page/team";
import Anxiety from "@/atomic/page/emotion/anxiety";
import Harmony from "@/atomic/page/emotion/harmony";
import Independence from "@/atomic/page/emotion/independence";
import Energy from "@/atomic/page/emotion/energy";
import Openness from "@/atomic/page/emotion/openness";
import ColorTest from "@/atomic/page/emotion/color-test";
import Careers from "@/atomic/page/careers";
import VacancyDetails from "@/atomic/prototype/vacancy-details";
import ComingSoon from "@/atomic/page/coming-soon";
import Iron from "@/atomic/page/iron";

export function App() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect == null) redirect = location.pathname;
    else redirect = redirect.replace(location.href, "/");

    if (redirect.length > 1) redirect = redirect.replace(/\/$/, "");

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
        case "/magnesium":
            return <Magnesium />
        case "/emotion":
            return <Emotion />;
        case "/emotion/productivity":
            return <Productivity />;
        case "/emotion/biorhythms":
            return <Biorhythms />;
        case "/emotion/anxiety":
            return <Anxiety />;
        case "/emotion/harmony":
            return <Harmony />;
        case "/emotion/independence":
            return <Independence />;
        case "/emotion/energy":
            return <Energy />;
        case "/emotion/openness":
            return <Openness />;
        case "/emotion/color-test":
            return <ColorTest />;
        case "/bodysize":
            return <BodySize />;
        case "/privacy-policy":
            return <PrivacyPolicy />;
        case "/about":
            return <About />;
        case "/team":
            return <Team />;
        case "/careers":
            return <Careers />;
        case "/iron":
            return <Iron />;
        case "/coming-soon":
            return <ComingSoon />;
            default:
                const [, pagePath, currentPath] = url.split("/");
    
                if (pagePath === "vitamin") return <VitaminElement id={currentPath} />;
                if (pagePath === "careers") return <VacancyDetails position={currentPath}/>;

            return <Error_404 />;
    }
}
