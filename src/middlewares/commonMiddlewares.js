
const mid1 = function (req, res, next) {
    let isFreeAppUser = req.headers.isfreeappuser;
    if (!isFreeAppUser) {
        return res.send({ Error: "some mandatory field(header) is missing" })
    }
    next()
}

module.exports.mid1 = mid1
