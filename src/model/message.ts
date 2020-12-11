export default class MessageModel {

    constructor(text: string = "", authorEmail: string = "", authorName: string = "") {
        this.email = authorEmail;
        this.body = text;
        this.name = authorName;
    }

    email: string = "";
    name: string = "";
    body: string = "";
}
