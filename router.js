import * as React from "react";
import MainPage from "src/atomic/page/main";
import Error_404 from 'src/atomic/page/404';
import WaistLine from "./atomic/page/waist";
import Electrolyte from "./atomic/page/electrolyte";
import Bodymass from "./atomic/page/mass";
import Vitamin from "./atomic/page/vitamin";
import VitaminElement from "./atomic/page/vitamin-element";
import PrivacyPolicy from "./atomic/page/private-policy";
import { Locale } from "src/i18n/locale";
import BodyZinc from "./atomic/page/bodyzinc";
import BodySize from "./atomic/page/bodysize";
import Emotion from "./atomic/page/emotion";
import Productivity from "./atomic/page/emotion/productivity";
import Biorhythms from "./atomic/page/emotion/biorhythms";
import About from "src/atomic/page/about";
import Mission from "src/atomic/page/mission";
import Team from "src/atomic/page/team";
import ComingSoon from "src/atomic/page/coming-soon";
import Anxiety from "./atomic/page/emotion/anxiety";
import Harmony from "./atomic/page/emotion/harmony";
import Independence from "./atomic/page/emotion/independence";
import Energy from "./atomic/page/emotion/energy";
import Openness from "./atomic/page/emotion/openness";
import ColorTest from "./atomic/page/emotion/color-test";
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
            return React.createElement(MainPage, null);
        case "/electrolyte":
            return React.createElement(Electrolyte, null);
        case "/bodymass":
            return React.createElement(Bodymass, null);
        case "/waistline":
            return React.createElement(WaistLine, null);
        case "/vitamin":
            return React.createElement(Vitamin, null);
        case "/bodyzinc":
            return React.createElement(BodyZinc, null);
        case "/emotion":
            return React.createElement(Emotion, null);
        case "/emotion/productivity":
            return React.createElement(Productivity, null);
        case "/emotion/biorhythms":
            return React.createElement(Biorhythms, null);
        case "/emotion/anxiety":
            return React.createElement(Anxiety, null);
        case "/emotion/harmony":
            return React.createElement(Harmony, null);
        case "/emotion/independence":
            return React.createElement(Independence, null);
        case "/emotion/energy":
            return React.createElement(Energy, null);
        case "/emotion/openness":
            return React.createElement(Openness, null);
        case "/emotion/color-test":
            return React.createElement(ColorTest, null);
        case "/bodysize":
            return React.createElement(BodySize, null);
        case "/privacy-policy":
            return React.createElement(PrivacyPolicy, null);
        case "/about":
            return React.createElement(About, null);
        case "/mission":
            return React.createElement(Mission, null);
        case "/team":
            return React.createElement(Team, null);
        case "/coming-soon":
            return React.createElement(ComingSoon, null);
        default:
            const [, pagePath, currentPath] = url.split("/");
            if (pagePath == "vitamin")
                return React.createElement(VitaminElement, { id: currentPath });
            return React.createElement(Error_404, null);
    }
}
//# sourceMappingURL=router.js.map