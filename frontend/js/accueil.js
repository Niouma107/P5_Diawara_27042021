fetch('http://localhost:3000/api/cameras')
.then(res => res.json())
.then(data => console.log(data))
