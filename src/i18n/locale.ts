import * as Polyglot from "node-polyglot";
import eb from "src/event-bus";

export class Locale {
    private static _polyglot = new Polyglot({ allowMissing: true });
    private static _translations: { [id: string]: number } = {};
    private static SUPPORTED_LANG = ['ar', 'en', 'ru', 'de', 'hi', 'es', 'fr', 'zh', 'ja', 'pt']

    //-------------------------------------------------------------------------------------------------------
    public static init() {
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

    //-------------------------------------------------------------------------------------------------------
    static languageName(code: string): string {
        switch (code) {
            case 'en':
                return "English"
            case 'ru':
                return "Русский"
            case 'de':
                return "Deutsche"
            case 'fr':
                return "Français"
            case 'hi':
                return "हिन्दी"
            case 'pt':
                return "Português"
            case 'es':
                return "Español"
            case 'zh':
                return "中文"
            case 'ja':
                return "日本語"
            case 'ar':
                return "عربي"
        }
        return "English"
    }

    //-------------------------------------------------------------------------------------------------------
    static get language(): string {
        return Locale._polyglot.locale() as string;
    }

    static setLanguageFromUrl(url: string): string {
        var res = url.split("/");
        if (res[1].length === 2) {
            Locale.language = res[1];
            url = url.replace("/" + res[1], "");
            console.log("LANG: " + res[1]);
        }
        console.log("URL: " + url);
        return url || "/";
    }

    //-------------------------------------------------------------------------------------------------------
    static set language(code: string) {
        if (Locale.language === code && Locale._translations[code])
            return;
        if (code === "")
            code = Locale.language;
        if (code in Locale._translations)
            Locale.setTranslation(code, Locale._translations[code])
        else
            Locale.fetchTranslation(code);
    }

    static translate(key: string, options?: Polyglot.InterpolationOptions): string {
        return Locale._polyglot.t(key, options);
    }

    //-------------------------------------------------------------------------------------------------------
    static i18nLink(path: string) {
        if (!Locale.language || Locale.language == "en")
            return path

        return '/' + Locale.language + (path.startsWith('/') ? "" : "/") + path
    }

    //-------------------------------------------------------------------------------------------------------
    private static setTranslation(code: string, translation: any) {
        Locale._translations[code] = translation;
        Locale._polyglot.extend(translation);
        Locale._polyglot.locale(code)
        localStorage.setItem('locale', code);
        eb.send("LANG_CHANGED");
    }

    //-------------------------------------------------------------------------------------------------------
    private static fetchTranslation(code: string) {
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

export default Locale.translate;