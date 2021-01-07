const { Socket } = require('socket.io')
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = 3001

let user = []
let allMessage = []

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
        io.to(toUser.id).emit("new-message", {pseudo: currentUser.pseudo, message})
        allMessage.push({current:pseudo, message, pseudo: currentUser.pseudo})
    })

    client.on("getMessage", pseudo => {
        const msg = []

        allMessage.forEach(e => {
            if( e.pseudo === pseudo && e.current === currentUser.pseudo){
                msg.push(e)
            }

            if( e.pseudo === currentUser.pseudo && e.current === pseudo){
                msg.push(e)
            }
        })
        io.to(client.id).emit("getMyMessage", msg)
    })


    client.on("disconnect", () => {
        user = user.filter(e => e !== currentUser)
        io.emit("list-user", user)
    })

})

http.listen(port, '0.0.0.0')
