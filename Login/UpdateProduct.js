const db = firebase.firestore();
var storageRef = firebase.storage().ref();

console.log(localStorage.getItem("Productsss"));
var docRef = db.collection("Products").doc(localStorage.getItem("Productsss"));
// $("#product").val()="hello";
// 
docRef.get().then(function(doc) {

    // var element1 = document.getElementById("select");
    // element1.setAttribute("value",doc.data().Product_Category);



    var element2 = document.getElementById("product");
    element2.setAttribute("value",doc.data().Product_Name);

    var element3 = document.getElementById("qty");
    element3.setAttribute("value",doc.data().Product_Quantity);

    var element4 = document.getElementById("unit");
    element4.setAttribute("value",doc.data().Product_Unit);
    
    var element5 = document.getElementById("price");
    element5.setAttribute("value",doc.data().Product_Price);

    // console.log(doc.data().Product_Discription);

    // var element6 =
    // document.getElementById("textarea1").value = doc.data().Product_Discription;
    // element6.setAttribute("value",doc.data().Product_Discription);

    // console.log(doc.data().Product_Discription);
    // var element6 = document.getElementById("textarea1");
    // element6.setAttribute("value",doc.data().Product_Discription);
    // element6.setAttribute("value",doc.data().Product_Discription);
    document.getElementById("textarea1").value = doc.data().Product_Discription;
    // var element7 = document.getElementById("checkpoint");
    // element7.setAttribute("value",parseInt(doc.data().No_Of_CheckPoints));


    var element8 = document.getElementById("qty-req1");
    element8.setAttribute("value",doc.data().CheckPointQuantity1);

    
    var element9 = document.getElementById("price-point1");
     element9.setAttribute("value",doc.data().CheckPointPrice1);

    // var op1 = document.getElementById("opt1").innerHTML;
    // var op2 = document.getElementById("opt2").innerHTML;
    // var op3 = document.getElementById("opt3").innerHTML;
    console.log(doc.data().Product_Category);

  
    var element13 = document.getElementById( doc.data().Product_Category);
    var element15 = document.getElementById( 'select');
    console.log(element13);
    element13.setAttribute('selected',"selected");
    element15.setAttribute('value',doc.data().Product_Category);
    // $('#select').val(doc.data().Product_Category);



        // var element10 = document.getElementById("imgname");
    // element10.setAttribute("value",doc.data().Product_Img);

    var element11 = document.getElementById("img1");
    element11.setAttribute("src",doc.data().Product_URL);

    var element12 = document.getElementById("img");
    element12.setAttribute("src",doc.data().Product_URL);

    var object1 = document.getElementById("qty-req2");
    object1.setAttribute("value",doc.data().CheckPointQuantity2);
    
    var object2 = document.getElementById("price-point2");
    object2.setAttribute("value",doc.data().CheckPointPrice2);

    var object3 = document.getElementById("qty-req3");
    object3.setAttribute("value",doc.data().CheckPointQuantity3);
    
    var object4 = document.getElementById("price-point3");
    object4.setAttribute("value",doc.data().CheckPointPrice3);

    var object5 = document.getElementById("qty-req4");
    object5.setAttribute("value",doc.data().CheckPointQuantity3);
    
    var object6 = document.getElementById("price-point4");
    object6.setAttribute("value",doc.data().CheckPointPrice3);

    var object7 = document.getElementById("qty-req5");
    object7.setAttribute("value",doc.data().CheckPointQuantity5);
    
    var object8 = document.getElementById("price-point5");
    object8.setAttribute("value",doc.data().CheckPointPrice5);




}).catch(function(error) {
    console.log("Error getting document:", error);
});
