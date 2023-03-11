const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../schemas/User.schema');

const verifyToken = async (req, res, next) => {
    try{
        const token = req.headers['x-access-token'];
        if(!token) return res.status(403).json({message: 'No token provided'});
        const decoded = await jwt.verify(token, config.secret, async(err, decoded) => {
            if(err) return res.status(401).json({message: 'Unauthorized'});
            return decoded;
        });
        req.userId = decoded.id;
        console.log(decoded);
        const user = await User.findByPk(req.userId, {attributes: {exclude: ['password']}});
        
        if(!user) return res.status(404).json({message: 'No user found'});
        next();
    }catch(error){
        return res.status(401).json({message: 'Unauthorized'});
    }
}

module.exports = verifyToken;