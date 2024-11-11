const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true,
    },
    dob: {
        type: Date,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    lastDonated: {
        type: Date,
    },
    certificate: {
        type: String,
    },
    weight: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    isCancer: {
        type: Boolean,
        required: true,
    },
    isCardiacProblem: {
        type: Boolean,
        required: true,
    },
    isBleedingDisorder: {
        type: Boolean,
        required: true,
    },
    isInfections: {
        type: Boolean,
        required: true,
    },
    isDiabetes: {
        type: Boolean,
        required: true,
    },
    isInjectedDrugs: {
        type: Boolean,
        required: true,
    },
    isWilling: {
        type: Boolean,
    },
    isHighRiskIndividual: {
        type: Boolean,
        required: true,
    }
}, {timestamps:true});

module.exports = mongoose.model('User', userSchema);
