fetch('http://localhost:3000/api/cameras')
.then((reponse) => {
    return reponse.json()
})
.then((donnees) => {
    console.log(donnees)
})