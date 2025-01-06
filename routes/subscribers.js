import express from 'express';
const router = express.Router();
import Subscriber from '../models/subscriber.js';

// Getting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.status(200).send({subscribers})
    } catch(err) {
        res.status(500).send({message: err.message})
    }
});
// Getting one
router.get('/:id', async (req, res) => {
    const {id} = req.params.id;
});
// Creating one
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel,
        subscribeDate: req.body.subscribeDate
    });
    try {
        const newSub = await subscriber.save();
        res.status(201).send(newSub);
    }
    catch(err) {
        res.status(400).send({message: err.message});
    }
});

// Updating one
router.patch('/:id', (req, res) => {
 
});

// Deleting one
router.delete('/:id', (req, res) => {

});

export default router;