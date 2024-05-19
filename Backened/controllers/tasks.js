const express = require('express');
const app = express();
const Task = require('../models/Task');
app.use(express.json());

const getAllTasks = async (req, res)=>{
    try{
        const task = await Task.find({});
        if(!task){
            return res.status(404).send('Data Not Found');
        }
        res.status(200).json(task);
    } catch(error){
        res.status(500).json(error);
    }
};

const createTask = async (req, res)=>{
    try{
        const task = await Task.create(req.body);

        if(!task){
            return res.status(400).send('Provide data to add');
        }

        res.status(200).json(task);
    } catch(error){
        res.status(500).json(error);
    }
};

const getTask = async (req, res)=>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        
        if(!task){
            return res.status(404).send(`No data is found with id ${taskID}`);
        }

        res.status(200).json(task);
    }catch(error){
        res.status(500).json(error);
    }
};

const updateTask = async (req, res)=>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new: true, runValidators: true
        });

        if(!task){
            return res.status(404).send(`No data is found with id ${taskID}`);
        }

        res.status(200).json(task);
    } catch(error){
        res.status(500).json({error});
    }
    // res.status(200).send("Update Task");
};

const deleteTask = async (req, res)=>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});

        if(!task){
            res.status(404).json(`No data with id ${taskID}`);
        }

        res.status(200).json(task);
    } catch(error){
        res.status(500).json(error);
    }
};

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask};