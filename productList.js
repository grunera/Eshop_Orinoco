class Product 
{
	constructor(pId, pImageUrl, pName, pPrice)
	{
	     this.id  = pId;
         this.imageUrl = pImageUrl;
         this.name = pName;
         this.price = pPrice;
	}
}   

//A remplacer plus tard par l'utilisation du json
const prod1 = new Product(1,"./images/teddy_1.jpg","Norbert",29.00);
const prod2 = new Product(2,"./images/teddy_2.jpg","Arnold",39.00);
const prod3 = new Product(3,"./images/teddy_3.jpg","Lenny and Carl",59.00);
const prod4 = new Product(4,"./images/teddy_4.jpg","Gustav",45.00);
const prod5 = new Product(5,"./images/teddy_5.jpg","Garfunkel",55.00);

//En dehors de populateTableList3 sinon ne sera pas visible par AjouteLigneProduit
var listOfProducts = "";


//Fonction appelée lors du clic sur le bouton "Show all"
function populateTableList3(){
       
        
	var products = [];
    	products.push(prod1,prod2,prod3,prod4,prod5);

      	products.forEach(AjouteLigneProduit);

	document.getElementById("productArray").innerHTML = listOfProducts;

    }


function AjouteLigneProduit(prod)
{
listOfProducts += "<tr class=\"text-center\"><td>"+prod.id+"</td> <td><img src=\"" + prod.imageUrl + "\" class=\"img-fluid img-thumbnail w-50\"></td> <td class=\"w-25 align-middle\">" + prod.name + "</td> <td class=\"w-25 align-middle\">"+ prod.price + "€</td> <td class=\"w-25 align-middle\"><button class=\"btn btn-info\">View</button></td></tr>";  
}

