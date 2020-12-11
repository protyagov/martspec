import * as React from "react";
import { version } from '../../package.json';
import { locale } from "src/i18n/locale";

// export function LanguageSwitcher() {

//     console.log(locale.language);

//     return (
//         <div className="btn-group btn-group-toggle text-center" data-toggle="buttons">

//             <button className={`rr-btn-lang ${locale.language == "en" ? 'disabled' : 'active'} language`}
//                 onClick={() => eb.send("LANG", "en")} >English</button>
//             <span>|</span>
//             <button className={`rr-btn-lang ${locale.language == "ru" ? 'disabled' : 'active'} language`}
//                 onClick={() => eb.send("LANG", "ru")} >Русский</button>
//         </div>)
// }

export function LanguageSwitcher() {
    return (
        <div className="btn-group btn-group-toggle text-center" data-toggle="buttons">

            <button className={`rr-btn-lang ${locale.language == "en" ? 'disabled' : 'active'} language`}
                onClick={() => locale.language = "en"} >English</button>
            <span>|</span>
            <button className={`rr-btn-lang ${locale.language == "ru" ? 'disabled' : 'active'} language`}
                onClick={() => locale.language = "ru"} >Русский</button>
        </div>)
}


export const Footer = () =>

    <footer className="rr-footer">
        {/* <p className="text-muted text-center">v{version} - &copy; 2020 - AgentSpec LLC. All rights reserved.</p> */}
        <p className="text-center">Copyright &copy; 2020 Martspec LLC. All rights reserved. | 
        <a href="/privacy-policy"> Privacy Policy</a></p>
        {/* <LanguageSwitcher /> */}

    </footer>
