export const fakeAuth = function (req, res, next){
    const {id} = req.params

    if (id === "yusif") {
        next()
        return "ugurla kecdiniz"
    }
    return res.send("duzgun id daxil edin!!!")
}