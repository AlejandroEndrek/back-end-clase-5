const express = require ("express")
const { renderRegister, createUser } = require("../controllers/usersControllers")
const router = express.Router()

router.get("/registro" , renderRegister)

router.post("/nuevo-usuario" , createUser)

module.exports= router