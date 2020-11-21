import io from 'socket.io-client'


const socket = io('http://localhost:3001', {
    transports: ['websocket']
})

export const login = () => {
    const pseudo = localStorage.getItem("pseudo")
    socket.emit("log", pseudo)
}

export const userList = setUser => {
    socket.on("list-user", msg => setUser(msg))
}
