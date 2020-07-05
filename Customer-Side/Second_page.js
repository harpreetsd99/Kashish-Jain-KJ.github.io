const Category = document.location.href.split('?')[1].split('=')[1];
console.log(Category);
const db = firebase.firestore();
var storageRef = firebase.storage().ref();
var docRef = db.collection("Products").where("Product_Category","==",Category);
document.getElementById("Catname").innerHTML = Category;
docRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(" => ", doc.data());
            var x =doc.data()['Product_Name'];
             x = x.replace(/\s/g,'');
            $("#prod").append(
                `<div class="col s12 m6 l3">
                <div class="card">
                  <div class="card-image">
                    <img src="${ doc.data()['Product_URL']}">
                  </div>
                  <div class="card-content">
                    <span class="card-title">${doc.data()['Product_Name']}</span><hr>
                    <p>500kg</p>
                    <p>Selling Price: <span><a class="fa fa-inr" style="color:black;"></a>${doc.data()['Product_Price']}</span><a href="#" class="waves-effect waves-light btn-small right orange"><i class="material-icons right">shopping_basket</i>Add</a></p>
                  </div>
                  <div class="card-action"><a href="productdetail.html?product_name=${x}">View Details</a> </div>
                </div>
              </div>
      `
            )
        });
});
