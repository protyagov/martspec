import * as Polyglot from "node-polyglot";
import eb from "src/event-bus";


class Locale {

    // _polyglot = new Polyglot({ allowMissing: true, locale: navigator.language.slice(0, 2) });
    _polyglot = new Polyglot({ allowMissing: true });
    _translations: { [id: string]: number } = {};

    //-------------------------------------------------------------------------------------------------------
    constructor() {
        const code = localStorage.getItem('locale') || 'en';
        this.language = code;
    }

    //-------------------------------------------------------------------------------------------------------
    get language(): string {
        return this._polyglot.locale() as string;
    }

    //-------------------------------------------------------------------------------------------------------
    set language(code: string) {
        // if (this.language === code)
        //     return;
        if (code in this._translations)
            this.setTranslation(code, this._translations[code])
        else
            this.fetchTranslation(code);
    }

    //-------------------------------------------------------------------------------------------------------
    private setTranslation(code: string, translation: any) {
        this._translations[code] = translation;
        this._polyglot.extend(translation);
        this._polyglot.locale(code)
        localStorage.setItem('locale', code);
        // callback();
        eb.send("LANG");
    }

    //-------------------------------------------------------------------------------------------------------
    private fetchTranslation(code: string) {
        console.log("Fetching Locale for " + code);
        fetch(`/i18n/${code}.json`)
            .then(res => res.json())
            .then((translation) => this.setTranslation(code, translation))
            .catch((err) => {
                console.error(err);
                // console.error(`Could not load ${this.language}.json.`);
            });
    }
}


export const locale = new Locale();
export var _ = locale._polyglot.t.bind(locale._polyglot);
export default _;


        // var t0 = performance.now();

        // let h2 = polyglot.t("Войти");
        // var t1 = performance.now();
        // console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:', 'Poly');
