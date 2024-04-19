const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', required: true
},
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', required: true
},
  amount: {
    type: Number,
    required: true },
  date: {
    type: Date,
    default:
    Date.now },
});

const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;
