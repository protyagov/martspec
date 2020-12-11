export default class IdNameModel {

    constructor(id: number = null, name: string = "") {
        this.id = id;
        this.name = name;
    }

    id?: number = null;
    name: string = "";
}