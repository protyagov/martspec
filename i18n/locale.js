import * as Polyglot from "node-polyglot";
import eb from "src/event-bus";
export class Locale {
    static init() {
        let code = localStorage.getItem('locale');
        if (code == null) {
            if (window.location.host == 'martspec.ru')
                code = 'ru';
            else
                code = navigator.language.split(/-|_/)[0];
            if (!Locale.SUPPORTED_LANG.includes(code))
                code = "en";
        }
        Locale.language = code;
        console.log("Selected Language: " + code);
    }
    static languageName(code) {
        switch (code) {
            case 'en':
                return "English";
            case 'ru':
                return "Русский";
            case 'de':
                return "Deutsche";
            case 'fr':
                return "Français";
            case 'hi':
                return "हिन्दी";
            case 'pt':
                return "Português";
            case 'es':
                return "Español";
            case 'zh':
                return "中文";
            case 'ja':
                return "日本語";
            case 'ar':
                return "عربي";
            case 'uk':
                return "Українська";
        }
        return "English";
    }
    static get language() {
        return Locale._polyglot.locale();
    }
    static setLanguageFromUrl(url) {
        var res = url.split("/");
        if (res[1].length === 2) {
            Locale.language = res[1];
            url = url.replace("/" + res[1], "");
            console.log("LANG: " + res[1]);
        }
        console.log("URL: " + url);
        return url || "/";
    }
    static set language(code) {
        if (Locale.language === code && Locale._translations[code])
            return;
        if (code === "")
            code = Locale.language;
        if (code in Locale._translations)
            Locale.setTranslation(code, Locale._translations[code]);
        else
            Locale.fetchTranslation(code);
    }
    static translate(key, options) {
        return Locale._polyglot.t(key, options);
    }
    static i18nLink(path) {
        return window.location.origin
            + ((!Locale.language || Locale.language == "en") ? "" : ("/" + Locale.language))
            + (path.startsWith('/') ? "" : "/")
            + path;
    }
    static setTranslation(code, translation) {
        Locale._translations[code] = translation;
        Locale._polyglot.extend(translation);
        Locale._polyglot.locale(code);
        localStorage.setItem('locale', code);
        eb.send("LANG_CHANGED");
    }
    static fetchTranslation(code) {
        console.log("Fetching Locale for " + code);
        fetch(`/i18n/${code}.json`)
            .then(res => res.json())
            .then((translation) => Locale.setTranslation(code, translation))
            .catch((err) => {
            console.error(err);
            if (code != 'en')
                Locale.language = 'en';
            else
                Locale.setTranslation(code, {});
        });
    }
}
Locale._polyglot = new Polyglot({ allowMissing: true });
Locale._translations = {};
Locale.SUPPORTED_LANG = ['ar', 'en', 'ru', 'de', 'hi', 'es', 'fr', 'zh', 'ja', 'pt', 'uk'];
export default Locale.translate;
//# sourceMappingURL=locale.js.map