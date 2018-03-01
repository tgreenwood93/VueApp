module.exports = {
  register (req, res) {
    res.send({
      message: `Hello ${req.body.username}! you have sucessfully registered!`
    })
  }
}
