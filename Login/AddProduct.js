

const db = firebase.firestore();

function addp(){
    
  
// Retrieve

   
    
    
    
    
    
    
    

}

$( document ).ready(function(){
    $("#preview").on("click",function(e){
    var Pname = document.getElementById("Product_Name").value;
    var Pcategory = document.getElementById("Product_Category").value;
    var Pdiscription = document.getElementById("Product_Discription").value;
    var Pquantity = document.getElementById("Product_Quantity").value;
    var Punit = document.getElementById("Product_Unit").value;
    var Pprice = document.getElementById("Product_Price").value;
    var NoOfCheck = document.getElementById("No_Of_CheckPoints").value;
   
    


    localStorage.setItem("Product_Name", Pname);
    localStorage.setItem("Product_Category", Pcategory);
    localStorage.setItem("Product_Discription", Pdiscription );
    localStorage.setItem("Product_Quantity", Pquantity);
    localStorage.setItem("Product_Unit",Punit);
    localStorage.setItem("Product_Price", Pprice);
    localStorage.setItem("No_Of_CheckPoints", NoOfCheck);
    localStorage.setItem("Cquantity1", Cq1);
    localStorage.setItem("Cprice1", Cp1);
    localStorage.setItem("Cquantity2",Cq2);
    localStorage.setItem("Cprice2", Cp2);
    

    window.location.href = "ShowProducts.html";
        $("body").css("background-color","#f4f4f4");
    });
});




