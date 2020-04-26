import {Bill} from '../../models/Bill.js';
import express from 'express';

const router = express.Router();


// @route GET api/bills
// @desc get all bills
// @access public
router.get('/', (req,res) => {
    Bill.find()
        .then(bills => res.json(bills))
});

// @route POST api/bills
// @desc POST a bill
// @access public
router.post('/', (req,res) => {
    const newBill = new Bill({
        number: req.body.number,
        text: req.body.text
    });
    newBill.save()
        .then(bill => res.json(bill));
});

// @route DELETE api/bills
// @desc DELETE a bill
// @access public
router.delete('/:id', (req,res) => {
    Bill.findById(req.params.id)
        .then(bill => bill.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

export {router as bills};