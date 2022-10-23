
module.exports = class PayloadEntity {
    constructor(pixKey, name, city, idTransaction, message, amount) {
        this.pixKey = pixKey;
        this.name = name;
        this.city = city;
        this.idTransaction = idTransaction;
        this.message = message;
        this.amount = amount;
        this.gui = 'br.gov.bcb.pix';
        this._idGUI = '00';
        this._idPix = '01';
        this._idMessage = '02';
        this._idMerchantName = '59';
        this._idMerchantCity = '60';
        this._idCountryCode = '5802BR';
        this._idPayloadFormatIndicator = '000201';
        this._idTransactionCurrency = '5303986';
        this._idTransactionAmount = '54';
        this._idMerchantCategoryCode = '52040000';
        this._idMerchantAccount = '26';
        this._idAdditionalDataFieldTemplate = '620705';
        this._idCRC16 = '6304';
    }
    //Getter
    get getPixKey() { return this.pixKey; }

    get getName() { return this.name; }

    get getCity() { return this.city; }

    get getIdTransaction() { return this.idTransaction; }

    get getAmount() { return this.amount; }

    get getGUI() { return this.gui; }

    get getMessage() { return this.message; }

    get getIdMessage() { return this._idMessage; }

    get getIdGUI() { return this._idGUI; }

    get getIdPix() { return this._idPix; }

    get getIdPayloadFormatIndicator() { return this._idPayloadFormatIndicator; }

    get getIdMerchantAccount() { return this._idMerchantAccount; }

    get getIdMerchantCategoryCode() { return this._idMerchantCategoryCode; }

    get getIdTransactionCurrency() { return this._idTransactionCurrency; }

    get getIdTransactionAmount() { return this._idTransactionAmount; }

    get getIdCountryCode() { return this._idCountryCode; }

    get getIdMerchantName() { return this._idMerchantName; }

    get getIdMerchantCity() { return this._idMerchantCity; }

    get getIdAdditionalDataFieldTemplate() { return this._idAdditionalDataFieldTemplate; }

    get getIdCRC16() { return this._idCRC16; }

    //Setters
    set setPixKey(newPixKey) { this.pixKey = newPixKey; }

    set setName(newName) { this.name = newName; }

    set setCity(newCity) { this.city = newCity; }

    set setIdTransaction(newIdTransaction) { this.idTransaction = newIdTransaction; }

    set setAmount(newAmount) { this.amount = newAmount; }

    set setGUI(newGui) { this.gui = newGui; }

    set setMessage(newMessage) { this.message = newMessage; }
}


