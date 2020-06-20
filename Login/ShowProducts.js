 const db = firebase.firestore();

var Pname = localStorage.getItem("Product_Name");
document.getElementById("Product_Name").innerHTML=Pname;

var Pcategory = localStorage.getItem("Product_Category");
document.getElementById("Product_Category").innerHTML=Pcategory;

var Pdiscription = localStorage.getItem("Product_Discription");
document.getElementById("Product_Discription").innerHTML=Pdiscription;

var Pquantity = localStorage.getItem("Product_Quantity");
document.getElementById("Product_Quantity").innerHTML=Pquantity;


var Punit = localStorage.getItem("Product_Unit");
document.getElementById("Product_Unit").innerHTML=Punit;

var Pprice = localStorage.getItem("Product_Price");
document.getElementById("Product_Price").innerHTML=Pprice;

var NoOfCheck =localStorage.getItem("No_Of_CheckPoints");
document.getElementById("No_Of_CheckPoints").innerHTML=NoOfCheck;



var Cq1 =localStorage.getItem("Cquantity1");
document.getElementById("CheckPoint_Quantity1").innerHTML=Cq1;

var Cp1 =localStorage.getItem("Cprice1");
document.getElementById("CheckPoint_Price1").innerHTML=Cp1;

var Cq2 =localStorage.getItem("Cquantity2");
document.getElementById("CheckPoint_Quantity2").innerHTML=Cq2;

var Cp2 =localStorage.getItem("Cprice2");
document.getElementById("CheckPoint_Price2").innerHTML=Cp2;


function add(){
    db.collection("Products").doc(Pname).set({
        Product_Name: Pname,
        Product_Category:  Pcategory,
        Product_Discription: Pdiscription,
        Product_Quantity:  Pquantity,
        Product_Unit: Punit,
        Product_Price: Pprice,
        No_Of_CheckPoints: NoOfCheck
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}
    




