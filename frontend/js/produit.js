
function principal()
{
    recupereID();
}
async function recupereID(){
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get("id");
    console.log(id);  
    let reponse = await fetch('http://localhost:3000/api/cameras/'+id);
    let data = await reponse.json();
    console.log(data);
    produitCamera(data);
}

principal();

function produitCamera(camera){
    let divProduit=document.getElementById('produit');
  
        divProduit.innerHTML = `
        
    <div class="row row-cols-1 row-cols-md-3 g-4 ">
        <div class="col">
            <div class="card center">
            
                <img src="${camera.imageUrl}">
                <div class="card-body center">
                    <h5 class="card-title">${camera.name}</h5>
                    <div class="price"><span>${camera.price}€</span></div>
                    <p class="card-text center">
                    ${camera.description}</p>
                    <select class="form-select" aria-label="Default select example" id="idform">
                    <option selected>Choissisez la taille de votre appareil</option>
                        <option value="1">2 pouce</option>
                        <option value="2">3 pouce</option>
                        <option value="3">4 pouce</option> 
                    </select>
                    <a href="/produit.html?id=${camera._id}">
                    <button type="submit" name="id="envoye" class="btn btn-dark btn_envoyerPanier"> Ajouter au panier </button>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
    `;


 console.log(camera)


} 
//partier envoyer au panier//
//selectioner id du form
//const idOption = document.querySelector("#idform");
//mettre la reponse de utilusateur dans une variable
//const choixform = idOption.value;
//selection boutton envoyer au panier
//const btn_envoyerPanier = document.querySelector ("#envoye");

//ecouter le boutton et envoyer au panier
//btn_envoyerPanier.addEventListener("click",(e)=>{
  //  e.preventDefault();
//});
