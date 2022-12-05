const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const findTask = await Task.findById(id);
        res.json(findTask);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    const {title, description} = req.body;
    try {
        const newTask = new Task({
            title,
            description
        });
        await newTask.save();
        res.status(200).json({status: 'received'}); 
    } catch (error) {
        console.log(error);
    }
    
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {title, description} = req.body;
    const newTasks = {title, description};
    try {
        await Task.findByIdAndUpdate(id, newTasks)
        res.json({
            status: "Task Update"
        });
    } catch (error) {
        console.log(error);   
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await Task.findByIdAndRemove(id);
        res.json({
            status: "task eliminated"
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;