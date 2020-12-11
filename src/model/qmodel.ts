export default class QParamModel {

    constructor(sort?: string[], q?: string, page?: number, size?: number, proj?: string[]) {
        this.q = q;
        this.sort = sort;
        this.page = page || 0;
        this.size = size || 20;
        this.projection = proj;
    }
    q?: string;
    sort?: string[];
    page: number = 0;
    size: number = 100;
    projection?: string[];

    toQueryString() {
        let res = "?offset=" + this.page * this.size + "&limit=" + this.size;
        if (this.q != null)
            res += "&q=" + this.q;
        if (this.projection != null && this.projection.length != 0)
            res += "&projection=" + this.projection.join();
        if (this.sort != null)
            res += "&sort=" + this.sort.join();
        return res;
    }
}