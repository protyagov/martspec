import * as toastr from "toastr";
import ErrorModel from "./model/error";
import _ from "./i18n/locale";

//===========================================================================================================
export default class AppState {
    static readonly FETCH_INTERVAL_MSEC = 20000;
    static readonly FILTER_COUNT_UpdatePending = -1;
    static readonly FILTER_COUNT_Disabled = -2;
    static readonly FILTER_COUNT_Failed = -3;
    static readonly FILTER_NAME_MAX_LENGTH = 32;

    //-------------------------------------------------------------------------------------------------------
    static get state(): any {
        return sessionStorage.getJson('state') as any;
    }
    static set state(value: any) {
        sessionStorage.setItem('state', JSON.stringify(value))
    }
    //-------------------------------------------------------------------------------------------------------
    private static _tags: any[] = [];
    static get tags(): any[] { return this._tags; }
    static set tags(value: any[]) { this._tags = value; }

    private static _tmp: any;
    static get tmp(): any { return this._tmp; }
    static set tmp(value: any) { this._tmp = value; }

    private static _tmpFunc: any;
    static get tmpFunc(): any { return this._tmpFunc; }
    static set tmpFunc(value: any) { this._tmpFunc = value; }

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

    //-------------------------------------------------------------------------------------------------------
    static CloneNonEmpty(obj: any) {
        const o = JSON.parse(JSON.stringify(obj)); // Clone source oect.

        Object.keys(o).forEach(key => {
            if (o[key] && typeof o[key] === 'object')
                o[key] = AppState.CloneNonEmpty(o[key]);  // Recurse.
            else if (o[key] === undefined || o[key] === null || o[key] === "")
                delete o[key]; // Delete undefined and null.
            else
                o[key] = o[key];  // Copy value.
        });

        return o; // Return new object.
    }

    //-------------------------------------------------------------------------------------------------------
    static FormatHours(input: number) {
        var totalHours, totalMinutes, totalSeconds, hours, minutes, seconds, result = '';
        totalSeconds = input / 1000;
        totalMinutes = totalSeconds / 60;
        totalHours = totalMinutes / 60;

        seconds = Math.floor(totalSeconds) % 60;
        minutes = Math.floor(totalMinutes) % 60;
        hours = Math.floor(totalHours) % 60;

        if (hours !== 0) {
            result += hours + ' hr ';
            if (minutes.toString().length == 1)
                minutes = '0' + minutes;
        }

        if (minutes !== 0)
            result += minutes + ' min ';

        if (seconds.toString().length == 1)
            seconds = '0' + seconds;

        result += seconds + " sec";
        return result;
    }

    //-------------------------------------------------------------------------------------------------------
    static dateUTCtoLocal(date: Date) {
        if (date == null)
            return date;
        let newDate = new Date(date.getTime());
        let offset = date.getTimezoneOffset() / 60;
        let hours = date.getHours();
        newDate.setHours(hours - offset);
        return newDate;
    }

    //-------------------------------------------------------------------------------------------------------
    static formatDate(d: Date) {
        //get the month
        var m = d.getMonth();
        //get the day
        //convert day to string
        var day = d.getDate().toString();
        //get the year
        let y = d.getFullYear();

        //pull the last two digits of the year
        const year = y.toString().substr(-2);

        //increment month by 1 since it is 0 indexed
        //converts month to a string
        let month = (m + 1).toString();

        //if month is 1-9 pad right with a 0 for two digits
        if (month.length === 1) {
            month = "0" + month;
        }

        //if day is between 1-9 pad right with a 0 for two digits
        if (day.length === 1) {
            day = "0" + day;
        }

        //return the string "MMddyy"
        return month + "/" + day + "/" + year;
        // return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
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