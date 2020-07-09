/*code of one product*/
/*code of one product*/


const db = firebase.firestore();
// var storageRef = firebase.storage().ref();




var Subtotal=0;
var delivery = 0;
var request = new XMLHttpRequest();
var area = "haridasnagar";
var city = "mumbai";
var x = new XMLHttpRequest();
x.open("GET", "https://geocoder.ls.hereapi.com/6.2/geocode.xml?apiKey=gBtUA6HNv23XXvrblwLZZRAScPiyxizR1Eqyk91dbzw&searchtext="+area+"+"+city, true);
x.onreadystatechange = function () {
  if (x.readyState == 4 && x.status == 200)
    {
	    console.log(x.responseXML);
      var lat = x.responseXML.getElementsByTagName("Latitude")[0].childNodes[0].nodeValue;
	    var long = x.responseXML.getElementsByTagName("Longitude")[0].childNodes[0].nodeValue;
	    console.log(lat);
	    console.log(long);
	    var dis = distance(lat,long,"19.21068","72.84163","K");
      console.log(dis);    // …
      if (dis>20){
        delivery = 100;
      }
      else if( dis>15){
        delivery = 80;
      }
      else if( dis>10){
        delivery = 50;
      }
      else if( dis>5){
        delivery = 30;
      }
      else if( dis>1){
        delivery = 10;
      }
      else{
        delivery = 0;
      }
  }
};
  x.send(null);
  function distance(lat1, lon1, lat2, lon2, unit) {
	  if ((lat1 == lat2) && (lon1 == lon2)) {
		  return 0;
	  }
	  else {
		  var radlat1 = Math.PI * lat1/180;
		  var radlat2 = Math.PI * lat2/180;
		  var theta = lon1-lon2;
		  var radtheta = Math.PI * theta/180;
		  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		  if (dist > 1) {
			  dist = 1;
		  }
		  dist = Math.acos(dist);
		  dist = dist * 180/Math.PI;
		  dist = dist * 60 * 1.1515;
		  if (unit=="K") { dist = dist * 1.609344 }
		  if (unit=="N") { dist = dist * 0.8684 }
		  return dist;
	  }
  }




$( document).ready(function(){
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);

      console.log("log in hai");
      // db.collection("users").doc(user.phoneNumber).collection("Cart").doc()
      //   .onSnapshot(function(doc) {
      //   console.log("Current data: snapshot", doc.data());
      // });

      // console.log(user.phoneNumber);
      
      db.collection("users").doc(user.phoneNumber).collection("Cart").onSnapshot(function(querySnapshot) {
        $("#all-products").empty();
        Subtotal = 0;
        querySnapshot.forEach(function(doc) {
         

         
          // nam.add(doc.data()['Product_Name']);
          // console.log(doc.data());
          Subtotal = Subtotal + parseFloat(doc.data()['Product_Price'])*parseFloat(doc.data()['Product_Quantity']);
          console.log("Subtotal:",Subtotal);
          $("#all-products").append(
            `<div class="basket-product">
              <div class="item"> 
              <div class="product-details">
                <h1><strong>${doc.data()['Product_Name']}</strong></h1>  
              </div>
              </div>
              <div class="price">${doc.data()['Product_Price']}</div>
              <div class="quantity">
                <input type="number" value="${doc.data()['Product_Quantity']}" min="1" class="quantity-field" disabled>
              </div>
              <div class="subtotal">${parseInt(doc.data()['Product_Quantity']) * parseFloat(doc.data()['Product_Price'])}</div>
              <div class="remove">
                <button onclick="remove('${doc.data()['Product_Name']}')">Remove</button>
              </div>
            </div>
          `)
        
        });
        document.getElementById('basket-subtotal').innerHTML = Subtotal;
        document.getElementById('basket-delivery').innerHTML = delivery;
        if (Subtotal>0){
          document.getElementById('basket-total').innerHTML = Subtotal + delivery;
          $("#rzp-button1").show();
        }
        else{
          document.getElementById('basket-total').innerHTML = 0;
          document.getElementById('basket-delivery').innerHTML = 0;
          $("#rzp-button1").hide();
        }
        
        console.log("element ke baad",Subtotal);
        
      });
      
      
    } else {
      console.log("log out hai");
    }
  });
});


// $("#all-products").append(
//   `<div class="basket-product">
//     <div class="item">
      
//     <div class="product-details">
//       <h1><strong>Apples</strong></h1>
      
     
//     </div>
//     </div>
//     <div class="price">26.00</div>
//     <div class="quantity">
//       <input type="number" value="4" min="1" class="quantity-field" disabled>
//     </div>
//     <div class="subtotal">104.00</div>
//     <div class="remove">
//       <button>Remove</button>
//     </div>
//   </div>
// `)
$('button').click(function() {
  // removeItem(this);
  console.log("remove");
});



function Logout(){
  const db = firebase.firestore();

// firebase authentication reference
  const auth = firebase.auth();
  firebase.auth().signOut().then(function() {
      window.location.href ="index.html";
// Sign-out successful.
}).catch(function(error) {
// An error happened.
});

}


function remove(item){
  item = item.replace(/\s/g,'');
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      db.collection("users").doc(user.phoneNumber).collection("Cart").doc(item).delete()  
    }
    else{

    }
  
  console.log(item);
  });
  console.log("bahar kidar bhi",Subtotal);
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var fname,lname,emailid,address;
    db.collection("users").doc(user.phoneNumber).get().then(function(doccc){
      fname = doccc.data()['first_name'];
      lname = doccc.data()['last_name'];
      emailid = doccc.data()['email'];
      address = doccc.data()['address'];
    });
    document.getElementById('rzp-button1').onclick = function(e){
    // alert(document.getElementById("total").innerHTML);
    var options = {
      "key": "rzp_test_rFCJhKj1DnF5dO", // Enter the Key ID generated from the Dashboard
      "amount": (Subtotal + delivery)*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Codellion",
      "description": "Software building Company",
       //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
              db.collection("Orders").doc(response.razorpay_payment_id).set({
                  First_name: fname,
                  Last_name:  lname,
                  Email_id: emailid,
                  Address: address,
                  Order_id: response.razorpay_payment_id,
                  Payment_method: "RazorPay",
                  Pnone_no: user.phoneNumber,
              });
              db.collection("users").doc(user.phoneNumber).collection("Cart").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                  db.collection("Orders").doc(response.razorpay_payment_id).collection("Items").doc(doc.id).set({
                    Name: doc.data()['Product_Name'],
                    Price: doc.data()['Product_Price'],
                    Product_Quantity: doc.data()['Product_Quantity'],
                    Product_Price: doc.data()['Product_Price']
                  });
                });
                
              });
              db.collection("users").doc(user.phoneNumber).collection("Cart").doc().delete();
              // alert(response.razorpay_payment_id);
              // alert(response.razorpay_order_id);
              // alert(response.razorpay_signature);
              alert("Payment Successful. You will soon receive a whatsapp message related to your order.");
      },
      "prefill": {
          "name": fname +" "+lname,
          "email": emailid,
          "contact": user.phoneNumber,
          "address": address
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "orange"
      },
      
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
  // alert("done");
  e.preventDefault();
 
}
}
else{
  
}
});


// $(document).ready(function(){
// $('#bb').click(function() {
//   // removeItem(this);
//   console.log("remove");
// });
// });

/* Set values + misc */
// var fadeTime = 300;

// /* Assign actions */
// $('.quantity input').change(function() {
//   updateQuantity(this);
// });



// $(document).ready(function() {
//     $('.sidenav').sidenav();
//     updateSumItems();
// });


// /* Recalculate cart */
// function recalculateCart(onlyTotal) {
//   var subtotal = 0;

//   /* Sum up row totals */
//   $('.basket-product').each(function() {
//     subtotal += parseFloat($(this).children('.subtotal').text());
//   });

//   /* Calculate totals */
//   var total = subtotal;

//   /*If switch for update only total, update only total display*/
//   if (onlyTotal) {
//     /* Update total display */
//     $('.total-value').fadeOut(fadeTime, function() {
//       $('#basket-total').html(total.toFixed(2));
//       $('.total-value').fadeIn(fadeTime);
//     });
//   } else {
//     /* Update summary display. */
//     $('.final-value').fadeOut(fadeTime, function() {
//       $('#basket-subtotal').html(subtotal.toFixed(2));
//       $('#basket-total').html(total.toFixed(2));
//       if (total == 0) {
//         $('.checkout-cta').fadeOut(fadeTime);
//       } else {
//         $('.checkout-cta').fadeIn(fadeTime);
//       }
//       $('.final-value').fadeIn(fadeTime);
//     });
//   }
// }

// /* Update quantity */
// function updateQuantity(quantityInput) {
//   /* Calculate line price */
//   var productRow = $(quantityInput).parent().parent();
//   var price = parseFloat(productRow.children('.price').text());
//   var quantity = $(quantityInput).val();
//   var linePrice = price * quantity;

//   /* Update line price display and recalc cart totals */
//   productRow.children('.subtotal').each(function() {
//     $(this).fadeOut(fadeTime, function() {
//       $(this).text(linePrice.toFixed(2));
//       recalculateCart();
//       $(this).fadeIn(fadeTime);
//     });
//   });

//   productRow.find('.item-quantity').text(quantity);
//   updateSumItems();
// }

// function updateSumItems() {
//   var sumItems = 0;
//   $('.quantity input').each(function() {
//     sumItems += parseInt($(this).val());
//   });
//   $('.total-items').text(sumItems);
// }

/* Remove item from cart */
// function removeItem(removeButton) {
//   /* Remove row from DOM and recalc cart total */
//   alert("removee");
//   var productRow = $(removeButton).parent().parent();
//   productRow.slideUp(fadeTime, function() {
//     productRow.remove();
//     recalculateCart();
//     updateSumItems();
//   });
// }