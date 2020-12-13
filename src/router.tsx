import * as React from "react";
import { Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect, RouteProps } from "react-router-dom";
import { MAINTENANCE_MODE } from 'src/env';

import MainPage from "src/landing/main";
import Error_404 from 'src/error/404';
import Error_500 from "src/error/500";
import AuthAPI from "src/api/auth";
import P4Waist from "./landing/p4-waist";
import P1Electrolyte from "./landing/p1-electrolyte";
import P2LogMass from "./landing/p2-mass";
import P3LogVitamin from "./landing/p3-vitamin";
import PrivacyPolicy from "./landing/private-policy";



export function App() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect != location.href) {
        history.replaceState(null, null, redirect);
        // REMOVE THIS - just showing the redirect route in the UI
        // document.body.setAttribute('message', 'This page was redirected by 404.html, from the route: ' + redirect);
        switch (location.pathname) {
            case "/":
                return <MainPage />;
            case "/product/electrolyte":
                return <P1Electrolyte />;
            case "/product/logmass":
                return <P2LogMass />;
            case "/product/logwaist":
                return <P4Waist />;
            case "/product/logvitamin":
                return <P3LogVitamin />;
            default:
                return <Error_404 />;
        }
        return <MainPage />
    }
    else {
        // REMOVE THIS - just showing the redirect route in the UI
        // document.body.setAttribute('message', 'This page was loaded directly from the index.html file');
        return <MainPage />
    }


    return <Router>
        <Suspense fallback={<div>Loading route...</div>}>
            <Switch>
                <Route exact path="/" component={MainPage} />

                <Route exact path="/product/electrolyte" component={P1Electrolyte} />
                <Route path="/product/logmass" component={P2LogMass} />
                <Route exact path="/product/logvitamin" component={P3LogVitamin} />
                <Route exact path="/product/logwaist" component={P4Waist} />

                {/* <Route exact path="/privacy-policy" component={PrivacyPolicy} /> */}
                <Route exact path="/privacy-policy" component={React.lazy(() => import(/* webpackChunkName: "app_lazy" */'src/landing/private-policy'))} />

                <Route exact path="/error/404" component={Error_404} />
                <Route exact path="/error/404" component={Error_404} />

                <Route component={Error_404} />
            </Switch>
        </Suspense>
    </Router>
}
