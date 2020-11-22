const { Socket } = require('socket.io')
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = 3001

let user = []

io.on('connection', client => {
    const id = client.id
    let currentUser = ""

    client.on("log", pseudo => {
        currentUser = {id: id, pseudo: pseudo }
        let isAlreadyInTab = false
        user.forEach(e =>  e.pseudo === pseudo ? isAlreadyInTab = true : isAlreadyInTab = false)
        if(isAlreadyInTab){

        }else{
            user.push(currentUser)
        }
        io.emit("list-user", user)
    })

    client.on("message", ({pseudo, message}) => {
        let toUser = null
        user.forEach(e => e.pseudo === pseudo ? toUser = e : null)
        client.broadcast.to(toUser.id).emit("new-message", {pseudo: currentUser.pseudo, message})
    })


    client.on("disconnect", () => {
        user = user.filter(e => e !== currentUser)
        io.emit("list-user", user)
    })

})

http.listen(port)
