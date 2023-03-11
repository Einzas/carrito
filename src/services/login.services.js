const User = require('../schemas/User.schema');

const getUser = async (req, res) => {
    const {id} = req.params;
    try{
        User.findByPk(id).then(user => {
            res.status(201).json(user);
        }).catch(error => {
            res.status(404).json({message: error});
        });
    }catch(error){
        res.status(404).json({message: error});
    }
};

const getUsers = async (req, res) => {
    try{
        await User.findAll().then(users => {
            res.status(201).json(users);
        }).catch(error => {
            res.status(404).json({message: error});
        });
    }catch(error){
        res.status(404).json({message: error});
    }
}

const createUser = async (req, res) => {
    const {name, email, password, money} = req.body;
    try{
        await User.create({
            name,
            email,
            password,
            money
        }).then(user => {
            res.status(201).json(user);
        }).catch(error => {
            res.status(404).json({message: error});
        });
    }catch(error){
        res.status(404).json({message: error});
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
            res.status(201).json(user);
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
            res.status(202);
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
    deleteUser
}