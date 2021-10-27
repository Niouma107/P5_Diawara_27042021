//appeler api
async function cameras(){
    let reponse = await fetch('http://localhost:3000/api/cameras');
    let data = await reponse.json();
    console.log(data);
    afficherCameras(data);
    document.querySelector('img').src= data[0].url;
}



// afficher les donnes de l'api
function afficherCameras(cameras){
    let divCameras=document.getElementById('cameras');
    for(let i=0; i<cameras.length;i++){
        divCameras.innerHTML += `
        
            <div class="row row-cols-1 row-cols-md-3 g-4 ">
                <div class="col">
                    <div class="card center">
                    
                        <img src="${cameras[i].imageUrl}">
                        <div class="card-body center">
                            <h5 class="card-title">${cameras[i].name}</h5>
                            <div class="price"><span>${cameras[i].price}€</span></div>
                            <p class="card-text center">
                            ${cameras[i].description}</p>
                            <a href="/produit.html?id=${cameras[i]._id}">
                            <button type="button" class="btn btn-dark"> Voir description </button>
                            </a>
                        </div>
                      
                    </div>
                </div>
            </div>
            `;
    }
}

window.addEventListener("DOMContentLoaded", () => {
 cameras()  
});
