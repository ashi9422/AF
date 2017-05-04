'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SupplierSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    }
});

const Supplier = mongoose.model('Supplier', SupplierSchema );
module.exports = Supplier;
