import _ from "src/i18n/locale";

export default class ErrorModel {
    message: string;
    title: string;
    code: number;
    path: string;

    constructor(err: any) {
        this.code = err.status || 500;
        try {
            this.message = err?.response?.body?.message;
            if (this.message == null && err?.hasOwnProperty("message"))
                this.message = err.message;

            this.title = err?.response?.body?.error;
            this.path = err?.response?.body?.path;
            // console.table(this);            
            console.log(this);
            if (this.message.startsWith("API.ERROR")) {
                this.title = _("API.CODE." + this.code);
                this.message = _(this.message);
            }
            else
                this.title = null; // server does not send anything we want to show to user on popup.
        }
        catch{
            console.log("************* Error to read error message. Check API.*************");
            console.error(err);
        }
    }
}