#Chat application React and socket.io

##Resume

Pour envoyer un event sur socket.io cote client ou cote serveur, on utilise la methode **emit("event", data)**

```javascript
socket.emit("message", data)
```

Pour ecouter un evenement on va utiliser la methode **on("event_name", data => {})**

```javascript
socket.on("message", data=>{console.log(data)})
``` 

Pour envoyer des donnees a un utilisateur specifique qui est connecter sur notre socket, on utilise ** io.to(id).emit("new-message", data)**

```javascript
 io.to(toUser.id).emit("new-message", {pseudo: currentUser.pseudo, message})
``` 
