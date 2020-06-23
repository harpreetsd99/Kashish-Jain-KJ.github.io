

//Filter
$(document).ready(function(){

	$(".filtercategory").click(function(){

		var category = $(this).attr("id");
		if(category == 'all'){

			$('#Fruits').show();
			$('#Vegetables').show();
			$('#Others').show();
		}		

		if(category == 'fruits' ){

			$('#Fruits').show();
			$('#Vegetables').hide();
			$('#Others').hide();
		}
		if(category == 'vegetables'){

			$('#Fruits').hide();
			$('#Vegetables').show();
			$('#Others').hide();

		}
		if(category == 'others'){

			$('#Fruits').hide();
			$('#Vegetables').hide();
			$('#Others').show();

		}

	});

});


//Dropdown Trigger
var dropdowns = document.querySelectorAll('.dropdown-trigger')
for (var i = 0; i < dropdowns.length; i++){
    M.Dropdown.init(dropdowns[i]);
}

//Search Query
$(document).ready(function(){
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".card .flow-text.indigo-text *").filter(function() {
    	console.log("Title value ",$(this).text());
      $(this).parent().parent().parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//card change on mobile
$(window).on('resize', function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
            $(".card.horizontal").removeClass("horizontal");
    }
    else{
    	$(".card").addClass("horizontal");
    }
});


// const db = firebase.firestore();
var storageRef = firebase.storage().ref();
function deletep(nam){
	var docRef = db.collection("Products").doc(nam);

	docRef.get().then(function(doc) {
		 var desertRef = storageRef.child('images/'+ doc.data().Product_Img);

		// // Delete the file
		desertRef.delete().then(function() {
			db.collection("Products").doc(nam).delete().then(function() {
				console.log("Document successfully deleted!");
			}).catch(function(error) {
				console.error("Error removing document: ", error);
			});
			alert("Product Deleted");
			window.location.reload();
		}).catch(function(error) {
		// Uh-oh, an error occurred!
		});
		// console.log(doc.data().Product_Img);
}).catch(function(error) {
    console.log("Error getting document:", error);
});
		

// Delete the file

	
	

}


function editp(nam){
	localStorage.setItem("Productsss", nam);
	console.log(localStorage.getItem("Productsss"));
	window.location.href = "UpdateProduct.html";
}