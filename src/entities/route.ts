export class Route {
    public _method: string = '';
    public _path: string = '';

    constructor(method: string, path: string) {
        this._method = method;
        this._path = path;
    }
}