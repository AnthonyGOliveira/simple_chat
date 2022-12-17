class Message {
    constructor(message) {
        this.dateMessage = new Date();
        this.message = message;
    }

    getDateMessage() {
        return this.dateMessage;
    }
    setDateMessage(date) {
        this.dateMessage = date;
    }
    getMessage() {
        return this.message;
    }
    setMessage(message) {
        this.message = message;
    }
    getTime() {
        return `${this.dateMessage.getHours() < 10 ? '0'+this.dateMessage.getHours() : this.dateMessage.getHours()}:${this.dateMessage.getMinutes() < 10 ? '0' + this.dateMessage.getMinutes() : this.dateMessage.getMinutes()}`
    }
}