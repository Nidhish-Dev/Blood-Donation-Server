const User = require('../models/User');
const { cloudinary } = require('../utils/cloudinaryConfig');
const fs = require('fs');

async function handleFormSubmission(req, res) {
    try {
        const body = req.body;
        const certificateURL = req.file ? req.file.path : null;

        const result = await User.create({
            firstName: body.firstName,
            lastName: body.lastName,
            registrationNumber: body.registrationNumber,
            dob: body.dob,
            email: body.email,
            mobileNumber: body.mobileNumber,
            bloodGroup: body.bloodGroup,
            lastDonated: body.lastDonated,
            certificate: certificateURL, 
            weight: body.weight,
            height: body.height,
            isCancer: body.isCancer,
            isCardiacProblem: body.isCardiacProblem,
            isBleedingDisorder: body.isBleedingDisorder,
            isInfections: body.isInfections,
            isDiabetes: body.isDiabetes,
            isInjectedDrugs: body.isInjectedDrugs,
            isWilling: body.isWilling,
            isHighRiskIndividual: body.isHighRiskIndividual,
        });

        if (req.file) {
            fs.unlink(req.file.path, (err) => {
                if (err) {
                    console.error('Error deleting file from server:', err);
                }
            });
        }

        res.status(201).json({ message: 'User created successfully', user: result });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
}

async function getFormData(req, res) {
    try {
        const users = await User.find(); 
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Error fetching user data', error: error.message });
    }
}

module.exports = { handleFormSubmission, getFormData };
