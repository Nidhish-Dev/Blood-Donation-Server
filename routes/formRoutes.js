const express = require('express');
const { handleFormSubmission,getFormData } = require('../controllers/FormController')
const upload = require('../middlewares/uploadMiddleware');
const router = express.Router();

router.post('/submit', upload.single('certificate'), handleFormSubmission);
router.get('/', getFormData);

module.exports = router;