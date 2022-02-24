const router = require("express").Router()
const Phone = require('../models/Phone.model')


router.get("/allPhones", (req, res) => {
    Phone.find(id, name, manufacturer, description, color, price, imageFileName, screen, procesor, ram)
        .then(allPhones => res.json(allPhones))
        .catch(err => res.json({ err, errMessage: "Error looking for Phones" }))
})




module.exports = router