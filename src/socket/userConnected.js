import io from 'socket.io-client'

const socket = io('http://0.0.0.0:3001', {
    transports: ['websocket']
})
let pseudo = "";

/**
 * This pseudo setter
 * @param txt
 */
export const setUserPseudo = txt => {
    pseudo = txt
}

/**
 * This pseudo getter
 * @returns {string}
 */
const getUserPseudo = () => {
    return pseudo;
}

/**
 * Call when a new user is log
 */
export const login = () => {
    const pseudo = localStorage.getItem("pseudo")
    socket.emit("log", pseudo)
}

/**
 * Listen a userlist from socket
 * @param setUser
 */
export const userList = setUser => {
    socket.on("list-user", msg => setUser(msg))
}

/**
 * Send message in socket
 * @param pseudo
 * @param message
 */
export const sendMessage = (pseudo, message) => {
    socket.emit("message", {pseudo, message})
}

/**
 * Receive message from socket and dispatch it
 * @param setAllMessage
 * @param callback
 */
export const receiveMessage = (setAllMessage, callback) => {
    socket.on("new-message", msg => {
        const pseudo = getUserPseudo()
        callback(msg, setAllMessage, pseudo)
    })
}


/**
 * Receive message from socket and toast in because we are in another component
 * @param callback
 */
export const receiveMessageInAnotherComponent = (callback) => {
    socket.on("new-message", msg => {
        callback(msg)
    })
}

export const getUserMessage = callback => {
    socket.emit("getMessage", pseudo)
    socket.on("getMyMessage", msg => callback(msg))
}
