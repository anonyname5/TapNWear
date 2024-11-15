const express = require('express');
const router = express.Router();

// Store scanned receipts
let scannedReceipts = [];

router.post('/verify-receipt', (req, res) => {
    const receiptData = req.body;
    
    // Add timestamp for verification
    const verifiedReceipt = {
        ...receiptData,
        verifiedAt: new Date(),
        verifiedBy: req.user.id // Assuming you have user authentication
    };

    scannedReceipts.push(verifiedReceipt);
    
    res.json({
        success: true,
        message: 'Receipt verified successfully',
        receipt: verifiedReceipt
    });
});

router.get('/scanned-receipts', (req, res) => {
    res.json(scannedReceipts);
});

module.exports = router; 