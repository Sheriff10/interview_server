
const error = (err, req, res, next) => {
    console.log(err)
    res.status(500).send({error: "Internal Server Error"})
}

module.exports = error