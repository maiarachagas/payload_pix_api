

const model = require('../models/payload_pix_model');
const crc = require('easy-crc');


function generatePayload(data) {
    model.message(data['message']);
    model.merchantName(data['name']);
    model.merchantCity(data['city']);
    model.transaction(data['idTransaction']);
    model.amount(data['amount']);
    model.merchantAccountInformation(data['pix']);
    var payload =
        model.pixEntity.getIdPayloadFormatIndicator + model.pixEntity.getPixKey + model.pixEntity.getIdMerchantCategoryCode + model.pixEntity.getIdTransactionCurrency + model.pixEntity.getAmount + model.pixEntity.getIdCountryCode + model.pixEntity.getName + model.pixEntity.getCity + model.pixEntity.getIdTransaction + model.pixEntity.getIdCRC16;

    var checksum = crc.crc16('CCITT-FALSE', payload);
    var pix = payload + `${checksum.toString(16)}`.toUpperCase();
    return pix;
}

module.exports = { generatePayload };




