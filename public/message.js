class Message {
    constructor(message, id) {
        this.id = id;
        this.dateMessage = new Date();
        this.message = message;
    }

    getId() {
        return this.id;
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