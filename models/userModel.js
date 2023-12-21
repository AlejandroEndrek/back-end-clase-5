const fs = require("fs")
const path = require("path")

const dataPath = path.join(__dirname , ".." , "database" , "users.json") 

function getUsers (){
    const data = fs.readFileSync(dataPath)
    return JSON.parse(data)
}

function newUser (user) {
    const users = getUsers()
    users.push(user)
    const userParsed = JSON.stringify(users)
    fs.writeFileSync(dataPath , userParsed)
}

module.exports = {getUsers , newUser}