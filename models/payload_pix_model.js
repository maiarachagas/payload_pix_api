
const PayloadEntity = require('./entities/payload_pix');
const pixEntity = new PayloadEntity();

function merchantAccountInformation(pix) {
    var pixLength = `${pix}`.length;
    var guiLength = pixEntity.getGUI.length;
    var msgLength = `${pixEntity.getMessage}`.length;
    var sumMsg = `${pixEntity.getIdMessage}${msgLength}`.length;
    var sumGUI = `${pixEntity.getIdGUI}${guiLength}`.length;
    var sumPix = `${pixEntity.getIdPix}${pixLength}`.length;
    var sumInformation;

    if (pixEntity.getMessage === "") {
        sumInformation = guiLength + pixLength + sumGUI + sumPix;
        pixEntity.setPixKey =
            `${pixEntity.getIdMerchantAccount}${sumInformation}${pixEntity.getIdGUI}${guiLength}${pixEntity.getGUI}${pixEntity.getIdPix}${pixLength}${pix}`;

    } else {
        sumInformation =
            guiLength + pixLength + msgLength + sumGUI + sumPix + sumMsg;
        var msg;
        if (msgLength < 10) {
            msg = '0' + msgLength;
        } else {
            msg = msgLength;
        }

        pixEntity.setPixKey =
            `${pixEntity.getIdMerchantAccount}${sumInformation}${pixEntity.getIdGUI}${guiLength}${pixEntity.getGUI}${pixEntity.getIdPix}${pixLength}${pix}${pixEntity.getIdMessage}${msg}${pixEntity.getMessage}`;
    }

    return pixEntity.getPixKey;

}

function merchantName(merchantName) {
    var merchantNameLength;
    if (`${merchantName}`.length < 10) {
        merchantNameLength = '0' + `${merchantName}`.length;
    } else {
        merchantNameLength = `${merchantName}`.length;
    }

    var key = `${merchantNameLength}${merchantName}`;
    pixEntity.setName = `${pixEntity.getIdMerchantName}${key}`;

    return pixEntity.getName;
}

function merchantCity(merchantCity) {

    var merchantCityLength;
    if (`${merchantCity}`.length < 10) {
        merchantCityLength = '0' + `${merchantCity}`.length;
    } else { merchantCityLength = `${merchantCity}`.length; }

    var key = `${merchantCityLength}${merchantCity}`;

    pixEntity.setCity = `${pixEntity.getIdMerchantCity}${key}`;

    return pixEntity.getCity;
}

function transaction(codeTransiction) {
    if (codeTransiction === "") {
        codeTransiction = '***';
    }
    var codeTransictionLength;
    if (`${codeTransiction}`.length < 10) { codeTransictionLength = '0' + `${codeTransiction}`.length; } else {
        codeTransictionLength = `${codeTransiction}`.length;
    }

    var code = `${codeTransictionLength}${codeTransiction}`;
    pixEntity.setIdTransaction =
        `${pixEntity.getIdAdditionalDataFieldTemplate}${code}`;

    return pixEntity.getIdTransaction;
}

function message(codeMessage) {
    pixEntity.setMessage = codeMessage;

    return pixEntity.getMessage;
}

function amount(amountTransiction) {
    var amountTransictionLength;

    if (`${amountTransiction}`.length < 10) {
        amountTransictionLength = '0' + `${amountTransiction}`.length;
    } else {
        amountTransictionLength = `${amountTransiction}`.length;
    }

    var key = `${amountTransictionLength}${amountTransiction}`;
    pixEntity.setAmount = `${pixEntity.getIdTransactionAmount}${key}`;

    return pixEntity.getAmount;
}

module.exports = {
    merchantAccountInformation,
    merchantName,
    merchantCity,
    transaction,
    message,
    amount,
    pixEntity,
}
