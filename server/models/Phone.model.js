const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const phoneSchema = new Schema(
    {
        id: String,
        name: String, 
        manufacturer: String,
        description: String,
        color: String,
        price: String,
        imageFileName: String,
        screen: String,
        procesor: String,
        ram: String,
    },
    {
        timestamps: true, 
    }
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;