const User = require('../schemas/User.schema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');

const login = async (req, res) => {
    const {email, password} = req.body;
    try{
        await User.findOne({where: {email}}).then(user => {
            if(!user) return res.status(404).json({message: 'No user found'});
            bcrypt.compare(password, user.password).then(result => {
                if(!result) return res.status(401).json({auth: false, token: null, message: 'Invalid password'});
                const token = jwt.sign({id: user.id, user: user.name}, config.secret, {
                    expiresIn: 86400
                });
                res.status(200).json({auth: true, token, user: user.name, money: user.money , message: 'User logged in successfully'});

            });
        }).catch(error => {
            res.status(404).json({message: error});
        });
    }catch(error){
        res.status(404).json({message: error});
    }
}

const getUser = async (req, res) => {
    const {id} = req.params;
    try{
        User.findByPk(id).then(user => {
            res.status(200).json(user);
        }).catch(error => {
            res.status(404).json({message: error});
        });
    }catch(error){
        res.status(404).json({message: error.message});
    }
};

const getUsers = async (req, res) => {
    try{
        await User.findAll().then(users => {
            res.status(200).json(users);
        }).catch(error => {
            res.status(404).json({message: error});
        });
    }catch(error){
        res.status(404).json({message: error});
    }
}

const createUser = async (req, res) => {
    let {name, email, password, money} = req.body;
    password = bcrypt.hashSync(password, 10); 
    try{
        await User.create({
            name,
            email,
            password ,
            money
        }).then(user => {
            res.status(201).json(user);
        }).catch(error => {
            res.status(401).json({message: "This email is already registered"});
        });
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {name, email, password, money} = req.body;
    try{
        await User.update({
            name,
            email,
            password,
            money
        }, {
            where: {
                id
            }
        }).then(user => {
            res.status(200).json({message: 'User updated successfully'});
        }).catch(error => {
            res.status(404).json({message: error});
        });
    }catch(error){
        res.status(404).json({message: error});
    }
}

const deleteUser = async (req, res) => {   
    const {id} = req.params;
    try{
        await User.destroy({
            where: {
                id
            }
        }).then(user => {
            res.status(204).json({message: 'User deleted successfully'});
        }).catch(error => {
            res.status(404).json({message: error});
        });
    }catch(error){
        res.status(404).json({message: error});
    }
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    login
}