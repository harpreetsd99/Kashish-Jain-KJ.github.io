const product_name = document.location.href.split('?')[1].split('=')[1];
console.log(product_name);
const db = firebase.firestore();
var storageRef = firebase.storage().ref();
var docRef = db.collection("Products").doc(product_name);
var data = {}
docRef.get().then(function(doc) {
    if (doc.exists) {
        // data = doc.data();
        // console.log("Document data:", doc.data()['Product_Name']);
        var imge = document.getElementById("img-main");
        imge.setAttribute('src',doc.data()["Product_URL"]);
        document.getElementById("productname").innerHTML = doc.data()['Product_Name'];
        var price = document.getElementById("price");
        document.getElementById("price").innerHTML = doc.data()['Product_Price'];
        var description = document.getElementById("description");
        document.getElementById("description").innerHTML = doc.data()['Product_Discription'];
      
        var x = 1;
       
        var count = 0;
       
        var a = "CheckPointQuantity" + x.toString();
       
        while(doc.data()[a]!=""){
            count++;
            if (count==5){
                break;
            }
            x++;
            a = "CheckPointQuantity" + x.toString();
        }
     
      
    //    document.getElementById("#numcheckpoint").innerHTML=count;

      
        console.log(count);
        if(count>0){
            $("checkpoint-content").show();
            for(i=1;i<=count;i++){
                $("#checkpoint-num").append(
                    `<div class="bullet${i} bull left"><span id="num${i}">${i}</span><i class="material-icons">arrow_drop_down</i></div>`
                );
		    }
		    $("#checkpoint").append($("#checkpoint-num").html());
            for(i=1;i<=count;i++){
                a = "CheckPointQuantity" + i.toString();
                var b = "CheckPointPrice" + i.toString();
                console.log(doc.data()[a]);
                console.log(doc.data()[b]);

			    $("#qty-checkpoint").append(
				    `<sup id="label-qty${i}">
	  			    <label>${ doc.data()[a]}</label>
	  			    </sup>`
			    );
			    $("#price-checkpoint").append(
				    `<sup  id="label-price${i}">
				    <label>${ doc.data()[b]}&#8377;</label>
				    </sup>`
			    );
            }
            if(count==1){
                $(".bullet1").css("left","100%");
                $("#label-price1").css("left","95%");
                $("#label-qty1").css("left","95%");
            }
            else if(count==2){
                $(".bullet1").css("left","50%");
                $(".bullet2").css("left","95%");
                $("#label-price1").css("left","46.5%");
                $("#label-qty1").css("left","46.5%");
                $("#label-price2").css("left","90%");
                $("#label-qty2").css("left","91%");
            }
            else if(count==3){
                $(".bullet1").css("left","33.33%");
                $(".bullet2").css("left","61.66%");
                $(".bullet3").css("left","89.99%");
                $("#label-price1").css("left","30.33%");
                $("#label-qty1").css("left","30.33%");
                $("#label-price2").css("left","58.66%");
                $("#label-qty2").css("left","59.66%");
                $("#label-price3").css("left","85.99%");
                $("#label-qty3").css("left","87.99%");
            }
            else if(count==4){
                $(".bullet1").css("left","25%");
                $(".bullet2").css("left","45%");
                $(".bullet3").css("left","65%");
                $(".bullet4").css("left","85%");
                $("#label-price1").css("left","22%");
                $("#label-qty1").css("left","22%");
                $("#label-price2").css("left","42%");
                $("#label-qty2").css("left","43%");
                $("#label-price3").css("left","62%");
                $("#label-qty3").css("left","64%");
                $("#label-price4").css("left","80.6%");
                $("#label-qty4").css("left","84%");
            }
            else if(count==5){
                $(".bullet1").css("left","20%");
                $(".bullet2").css("left","35%");
                $(".bullet3").css("left","50%");
                $(".bullet4").css("left","65%");
                $(".bullet5").css("left","80%");
                $("#label-price1").css("left","17%");
                $("#label-qty1").css("left","17%");
                $("#label-price2").css("left","32%");
                $("#label-qty2").css("left","33%");
                $("#label-price3").css("left","47%");
                $("#label-qty3").css("left","49%");
                $("#label-price4").css("left","62%");
                $("#label-qty4").css("left","65%");
                $("#label-price5").css("left","77%");
                $("#label-qty5").css("left","81%");
            }
        }else{
            $("#checkpoint-details").hide();
        }
        













        db.collection("Products").where("Product_Category", "==",doc.data()['Product_Category']).get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(docc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(" => ", docc.data());
            if(docc.data()['Product_Name'] != doc.data()['Product_Name']){
                var element1 = document.getElementById("sugg");
                var div1 = document.createElement("div");
                div1.setAttribute("class","col s6 m2");
                    var div2 = document.createElement("div");
                    div2.setAttribute("class","card hoverable");
                        var div3 = document.createElement("div");
                        div3.setAttribute("class","product-image");
                            var img1 = document.createElement("img");
                            img1.setAttribute("class","img-suggestions");
                            img1.setAttribute("src", docc.data()['Product_URL']);
                            img1.setAttribute("alt", "img");
                            div3.appendChild(img1);
                        var div4 = document.createElement("div");
                        div4.setAttribute("class","card-content");
                            var div5 = document.createElement("div");
                            div5.setAttribute("class","title-offer");
                                var span1 = document.createElement("span");
                                    var txt = document.createTextNode(docc.data()['Product_Name']);
                                    span1.appendChild(txt);
                                div5.appendChild(span1);
                            var div6 = document.createElement("div");
                            div6.setAttribute("class","qty-sugg");
                                var txt1 = document.createTextNode(docc.data()['Product_Quantity']+ docc.data()['Product_Unit']);
                                div6.appendChild(txt1);
                            var div7 = document.createElement("div");
                            div7.setAttribute("class","sell-price-sugg");
                                var str = document.createElement("strong");
                                    var i3 = document.createElement("i");
                                    i3.setAttribute("class","fa fa-inr");
                                    var txt2 = document.createTextNode(docc.data()['Product_Price']);
                                    str.appendChild(i3);
                                    str.appendChild(txt2);
                                var span1 = document.createElement("span");
                                span1.setAttribute("class","right");
                                    var a1 = document.createElement("a");
                                    // a1.setAttribute("id","");
                                    a1.setAttribute("class","waves-effect waves-light btn-small btn-sugg orange");
                                        var i1 = document.createElement("i");
                                        i1.setAttribute("class","material-icons right");
                                            var txt3 = document.createTextNode("shopping_basket");
                                            i1.appendChild(txt3);
                                            a1.appendChild(i1);
                                        var txt4 = document.createTextNode("Add");
                                        a1.appendChild(txt4);
                                    span1.appendChild(a1);
                            div7.appendChild(str);
                            div7.appendChild(span1);
                        div4.appendChild(div5);
                        div4.appendChild(div6);
                        div4.appendChild(div7);
                    div2.appendChild(div3);
                    div2.appendChild(div4);
                div1.appendChild(div2);
            element1.appendChild(div1);
            $("#sugg2").append(
                `<div class="col s12 m4">
					<div class="card hoverable">
						<div class="product-image">
                        <img class="img-suggestions" src="${ docc.data()['Product_URL']}" alt="img" />
						</div>
						<div class="card-content">
							<div class="title-offer">
								<span>${docc.data()['Product_Name']}</span>
								
							</div>
							<div class="qty-sugg">${docc.data()['Product_Quantity']}+${docc.data()['Product_Unit']}</div>
							<div class="sell-price-sugg">
								<strong><a class="fa fa-inr"></a>${docc.data()['Product_Price']}</strong>
								<span class="right"><a  class="waves-effect waves-light btn-small orange"><i class="material-icons right">shopping_basket</i>Add</a></span>
							</div>
							
						</div>
					</div>
				</div> `
            );
            


            }
            
                                    
                                        


                                    

                                    

                                        

                                





                // var div2 = document.createElement("div");

        });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });


        // console.log(data['Product_Name']);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

