
module.exports = class PayloadEntity {
    //propriedades e funções da classe aqui

    constructor(pixKey, name, city, idTransaction, message, amount) {
        this.pixKey = pixKey;
        this.name = name;
        this.city = city;
        this.idTransaction = idTransaction;
        this.message = message;
        this.amount = amount;

    }
}

