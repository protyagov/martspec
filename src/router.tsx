import * as React from "react";
import MainPage from "src/landing/main";
import Error_404 from 'src/error/404';
import P4LogWaist from "./landing/p4-waist";
import P1Electrolyte from "./landing/p1-electrolyte";
import P2LogMass from "./landing/p2-mass";
import P3LogVitamin from "./landing/p3-vitamin";
import PrivacyPolicy from "./landing/private-policy";



export function App() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect == null)
        redirect = location.pathname;
    else
        redirect = redirect.replace(location.href, '/');

    if (redirect.length > 1)
        redirect = redirect.replace(/\/$/, "");

    history.replaceState(null, null, redirect);


    switch (redirect) {
        case "/":
            return <MainPage />;
        case "/product/electrolyte":
            return <P1Electrolyte />;
        case "/product/logmass":
            return <P2LogMass />;
        case "/product/logwaist":
            return <P4LogWaist />;
        case "/product/logvitamin":
            return <P3LogVitamin />;
        case "/privacy-policy":
            return <PrivacyPolicy />;
        // return <React.Component context={React.lazy(() => import(/* webpackChunkName: "app_lazy" */'src/landing/private-policy'))} />
        default:
            return <Error_404 />;
    }
}
