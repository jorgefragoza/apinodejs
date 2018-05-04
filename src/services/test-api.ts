export class TestApi {
    private name: string = '';
    private url: String = '';

    constructor() {
        this.getConfigApi();
    }

    public consultar() {
        return {
            result: {
                data: {
                    param1: "pruebala",
                    param2: 200
                },
                code: 200,
                message: ''
            }
        };
    }

    private getConfigApi() {
        this.name = 'apiService';
        this.url = 'http://localhost/api/test-service/';
    }
}