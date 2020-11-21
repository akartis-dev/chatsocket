const { Socket } = require('socket.io')

const io = require('socket.io')()
const port = 3001
io.listen(port)

let user = []

io.on('connection', client => {
    let currentUser = ""
    client.on("log", pseudo => {
        currentUser = pseudo
        const isAlreadyInTab = user.includes(pseudo)
        if(isAlreadyInTab){

        }else{
            user.push(pseudo)
        }
        io.emit("list-user", user)
    })

    client.on("disconnect", () => {
        user = user.filter(e => e !== currentUser)
        io.emit("list-user", user)
    })

})
