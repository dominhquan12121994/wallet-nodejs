const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logBankRequestSchema = new Schema({
    _id: Schema.Types.ObjectId,
    metadata: { type: String },
}, { timestamps: true, collection: 'logBankRequests', });

module.exports = mongoose.model('logBankRequest', logBankRequestSchema);
