import * as toastr from "toastr";
import ErrorModel from "./model/error";
import _ from "./i18n/locale";

//===========================================================================================================
export default class AppState {

    //-------------------------------------------------------------------------------------------------------
    static get state(): any {
        return sessionStorage.getJson('state') as any;
    }
    static set state(value: any) {
        sessionStorage.setItem('state', JSON.stringify(value))
    }
    //-------------------------------------------------------------------------------------------------------
    private static _tmp: any;
    static get tmp(): any { return this._tmp; }
    static set tmp(value: any) { this._tmp = value; }

    //-------------------------------------------------------------------------------------------------------
    static jsonEqual(a: any, b: any) {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    //-------------------------------------------------------------------------------------------------------
    static uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    //-------------------------------------------------------------------------------------------------------
    static handleError(err: any, show: boolean = false, history: any = null, state: any = null) {
        let e = err instanceof ErrorModel ? err : new ErrorModel(err);

        switch (e.code) {
            case 401:
                history?.push({ pathname: '/auth/login', state: state });
                return;
            case 404:
                if (history == null)
                    break;
                history?.push({ pathname: '/error/404' });
                return;
            default:
                if (e.code >= 500) {
                    e.message = "HTTP_500_ERROR_MESSAGE";
                    e.title = "Sorry";
                    console.error(err);
                    if (history == null)
                        break;
                    history?.push({ pathname: '/error/500' });
                    return;
                }
                break;
        }

        if (show)
            toastr.error(_(e.message), e.title, { preventDuplicates: true });
    }

    //-------------------------------------------------------------------------------------------------------
    static isNullOrEmpty(obj: any[]) {
        return obj == null || obj.length === 0;
    }

    //-------------------------------------------------------------------------------------------------------
    static isNullOrEmptyString(str: string) {
        return str == null || str.trim().length === 0;
    }
}


/**==========================================================================================================
 * Extending the Local Storage Object to allow saving of objects.
 *
 * @param  int|string   key     object key
 * @param  int|string   value   object value
 * @return bool                 true|false
 */
Storage.prototype.setJson = function (key: string, value: any) {
    this.setItem(key, JSON.stringify(value));
};


/**==========================================================================================================
 * Extending the Local Storage Object to allow returning of saved objects.
 *
 * @param  int|string   key     object key
 * @return int|string           value
 */
Storage.prototype.getJson = function (key: string) {
    var value = this.getItem(key);
    return value == null ? value : JSON.parse(value);
};


/**==========================================================================================================
// Don't do this if you can use `Object.defineProperty`
*/
String.prototype.isNullOrEmpty = function () {
    return this == null || this.trim().length === 0;
}