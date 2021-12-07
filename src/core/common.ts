export class Result {

    success: boolean
    timestamp: string
    message: string
    data: any

    constructor(success, data?) {
        this.success = success;
        this.data = data
        this.timestamp = new Date().toISOString();
    }

}