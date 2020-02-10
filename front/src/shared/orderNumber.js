export default class orderNumber {

    static myInstance = null;

    orderID = 0;

    static getInstance() {
        if (orderNumber.myInstance == null) {
            orderNumber.myInstance = new orderNumber();
        }

        return this.myInstance;
    }

    getID() {
        return this.orderID++;
    }

}