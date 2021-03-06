module.exports = (err, req, res, next) => {
    if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({message: err.errors[0].message})
    } else if (err.message === 'jwt malformed') {
        res.status(401).json({message: "Invalid account"})
    } else if (err.status) {
        res.status(err.status).json({message: err.message})
    } else {
        res.status(500).json({message: "Internal server error"})
    }
}