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
                // Laptop-------------------------------------------
                $(".bullet1").css("left","100%");
                $("#label-price1").css("left","95%");
                $("#label-qty1").css("left","95%");
                //L-Mobile-------------------------------------------
                var mq = window.matchMedia( "(max-width: 425px)" );
                if (mq.matches) {
                   $(".bullet1").css("left","95%");
                    $("#label-price1").css("left","92%");
                    $("#label-qty1").css("left","92%"); 
                }
                //S-Mobile-------------------------------------------
                var mq2 = window.matchMedia( "(max-width: 320px)" );
                if (mq2.matches) {
                   $(".bullet1").css("left","94%");
                    $("#label-price1").css("left","92%");
                    $("#label-qty1").css("left","92%"); 
                }    
            }
            else if(count==2){
                // Laptop------------------------------------------
                $(".bullet1").css("left","50%");
                $(".bullet2").css("left","95%");
                $("#label-price1").css("left","46.5%");
                $("#label-qty1").css("left","46.5%");
                $("#label-price2").css("left","90%");
                $("#label-qty2").css("left","91%");
                // L-Mobile----------------------------------------
                var mq = window.matchMedia( "(max-width: 425px)" );
                if (mq.matches) {
                    $(".bullet1").css("left","44%");
                    $(".bullet2").css("left","87%");
                    $("#label-price1").css("left","43%");
                    $("#label-qty1").css("left","43%");
                    $("#label-price2").css("left","85%");
                    $("#label-qty2").css("left","87%"); 
                }
                //M-Mobile------------------------------------------
                var mq1 = window.matchMedia( "(max-width: 375px)" );
                if (mq1.matches) {
                    $(".bullet1").css("left","43%");
                    $(".bullet2").css("left","85%");
                    $("#label-price1").css("left","42%");
                    $("#label-qty1").css("left","42%");
                    $("#label-price2").css("left","83%");
                    $("#label-qty2").css("left","85%"); 
                }
                //S-Mobile------------------------------------------
                var mq2 = window.matchMedia( "(max-width: 320px)" );
                if (mq2.matches) {
                    $(".bullet1").css("left","42%");
                    $(".bullet2").css("left","83%");
                    $("#label-price1").css("left","41%");
                    $("#label-qty1").css("left","41%");
                    $("#label-price2").css("left","81%");
                    $("#label-qty2").css("left","83%"); 
                }
                // Tablets & Small laptop---------------------------------------------------------------------
                var mq3 = window.matchMedia( "(min-device-width : 768px) and (max-device-width : 1024px)" );
                if (mq3.matches) {
                    $(".bullet1").css("left","45%");
                    $(".bullet2").css("left","92%");
                    $("#label-price1").css("left","45%");
                    $("#label-qty1").css("left","45%");
                    $("#label-price2").css("left","87%");
                    $("#label-qty2").css("left","89%"); 
                }
            }
            else if(count==3){
                // Laptop------------------------------------------
                $(".bullet1").css("left","33.33%");
                $(".bullet2").css("left","61.66%");
                $(".bullet3").css("left","89.99%");
                $("#label-price1").css("left","30.33%");
                $("#label-qty1").css("left","30.33%");
                $("#label-price2").css("left","58.66%");
                $("#label-qty2").css("left","59.66%");
                $("#label-price3").css("left","85.99%");
                $("#label-qty3").css("left","87.99%");
                // L-Mobile-----------------------------------------
                var mq = window.matchMedia( "(max-width: 425px)" );
                if (mq.matches) {
                    $(".bullet1").css("left","26%");
                    $(".bullet2").css("left","52%");
                    $(".bullet3").css("left","79%");
                    $("#label-price1").css("left","27%");
                    $("#label-qty1").css("left","27%");
                    $("#label-price2").css("left","52%");
                    $("#label-qty2").css("left","54%");
                    $("#label-price3").css("left","78%");
                    $("#label-qty3").css("left","81%"); 
                }
                //M-Mobile--------------------------------------------
                var mq1 = window.matchMedia( "(max-width: 375px)" );
                if (mq1.matches) {
                    $(".bullet1").css("left","25%");
                    $(".bullet2").css("left","50%");
                    $(".bullet3").css("left","76%");
                    $("#label-price1").css("left","26%");
                    $("#label-qty1").css("left","26%");
                    $("#label-price2").css("left","50%");
                    $("#label-qty2").css("left","52%");
                    $("#label-price3").css("left","75.5%");
                    $("#label-qty3").css("left","79%"); 
                }
                //S-Mobile-------------------------------------------
                var mq2 = window.matchMedia( "(max-width: 320px)" );
                if (mq2.matches) {
                    $(".bullet1").css("left","24%");
                    $(".bullet2").css("left","49%");
                    $(".bullet3").css("left","73%");
                    $("#label-price1").css("left","24%");
                    $("#label-qty1").css("left","24%");
                    $("#label-price2").css("left","49%");
                    $("#label-qty2").css("left","52%");
                    $("#label-price3").css("left","73.5%");
                    $("#label-qty3").css("left","77%"); 
                }
                // Tablets------------------------------------------------------------------------------------
                var mq3 = window.matchMedia( "(min-device-width : 768px) and (max-device-width : 1020px)" );
                if (mq3.matches) {
                    $(".bullet1").css("left","27%");
                    $(".bullet2").css("left","57%");
                    $(".bullet3").css("left","82%");
                    $("#label-price1").css("left","27%");
                    $("#label-qty1").css("left","27%");
                    $("#label-price2").css("left","57%");
                    $("#label-qty2").css("left","60%");
                    $("#label-price3").css("left","83%");
                    $("#label-qty3").css("left","87%"); 
                }
                // S-Laptops---------------------------------------------------------------------------------
                var mq4 = window.matchMedia( "(min-device-width : 1024px) and (max-device-width : 1350px)" );
                if (mq4.matches) {
                    $(".bullet1").css("left","29%");
                    $(".bullet2").css("left","58%");
                    $(".bullet3").css("left","87%");
                    $("#label-price1").css("left","25%");
                    $("#label-qty1").css("left","25%");
                    $("#label-price2").css("left","54%");
                    $("#label-qty2").css("left","55%");
                    $("#label-price3").css("left","82%");
                    $("#label-qty3").css("left","85%"); 
                }
            } 
            else if(count==4){
                // Laptop--------------------------------------------
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
                // Large-Mob-----------------------------------------
                var mq = window.matchMedia( "(max-width: 425px)" );
                if (mq.matches) {
                   $(".bullet1").css("left","17%");
                    $(".bullet2").css("left","34%");
                    $(".bullet3").css("left","52%");
                    $(".bullet4").css("left","71%");
                    $("#label-price1").css("left","17%");
                    $("#label-qty1").css("left","17%");
                    $("#label-price2").css("left","35%");
                    $("#label-qty2").css("left","37%");
                    $("#label-price3").css("left","53%");
                    $("#label-qty3").css("left","57%");
                    $("#label-price4").css("left","70%");
                    $("#label-qty4").css("left","75%");
                }
                // med-Mob-------------------------------------------
                var mq2 = window.matchMedia( "(max-width: 375px)" );
                if (mq2.matches) {
                   $(".bullet1").css("left","16%");
                    $(".bullet2").css("left","32%");
                    $(".bullet3").css("left","50%");
                    $(".bullet4").css("left","65.5%");
                    $("#label-price1").css("left","16%");
                    $("#label-qty1").css("left","16%");
                    $("#label-price2").css("left","34%");
                    $("#label-qty2").css("left","36%");
                    $("#label-price3").css("left","52%");
                    $("#label-qty3").css("left","56%");
                    $("#label-price4").css("left","68%");
                    $("#label-qty4").css("left","74%");
                }
                // small-mob----------------------------------------
                var mq3 = window.matchMedia( "(max-width: 320px)" );
                if (mq3.matches) {
                   $(".bullet1").css("left","15%");
                    $(".bullet2").css("left","30%");
                    $(".bullet3").css("left","47%");
                    $(".bullet4").css("left","62%");
                    $("#label-price1").css("left","16%");
                    $("#label-qty1").css("left","16%");
                    $("#label-price2").css("left","33%");
                    $("#label-qty2").css("left","35%");
                    $("#label-price3").css("left","51%");
                    $("#label-qty3").css("left","55%");
                    $("#label-price4").css("left","65%");
                    $("#label-qty4").css("left","71%");
                }
                // tablets-------------------------------------------------------------------------------------
                var mq4 = window.matchMedia( "(min-device-width : 768px) and (max-device-width : 1023px)" );
                if (mq4.matches) {
                    $(".bullet1").css("left","19%");
                    $(".bullet2").css("left","38%");
                    $(".bullet3").css("left","56%");
                    $(".bullet4").css("left","73%");
                    $("#label-price1").css("left","19%");
                    $("#label-qty1").css("left","19%");
                    $("#label-price2").css("left","40%");
                    $("#label-qty2").css("left","43%");
                    $("#label-price3").css("left","58%");
                    $("#label-qty3").css("left","62%");
                    $("#label-price4").css("left","72%");
                    $("#label-qty4").css("left","78%");
                }
                // Small Laptops------------------------------------------------------------------------------
                var mq4 = window.matchMedia( "(min-device-width : 1024px) and (max-device-width : 1350px)" );
                if (mq4.matches) {
                   $(".bullet1").css("left","20%");
                    $(".bullet2").css("left","40%");
                    $(".bullet3").css("left","60%");
                    $(".bullet4").css("left","80%");
                    $("#label-price1").css("left","16%");
                    $("#label-qty1").css("left","16%");
                    $("#label-price2").css("left","35%");
                    $("#label-qty2").css("left","37%");
                    $("#label-price3").css("left","56%");
                    $("#label-qty3").css("left","59%");
                    $("#label-price4").css("left","76%");
                    $("#label-qty4").css("left","80%");
                }
            }        
            else if(count==5){
                // Laptop-------------------------------------------
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
                // Large-Mob-----------------------------------------
                var mq = window.matchMedia( "(max-width: 425px)" );
                if (mq.matches) {
                    $(".bullet1").css("left","13%");
                    $(".bullet2").css("left","26%");
                    $(".bullet3").css("left","38%");
                    $(".bullet4").css("left","51%");
                    $(".bullet5").css("left","63%");
                    $("#label-price1").css("left","13%");
                    $("#label-qty1").css("left","13%");
                    $("#label-price2").css("left","27%");
                    $("#label-qty2").css("left","29%");
                    $("#label-price3").css("left","40%");
                    $("#label-qty3").css("left","43%");
                    $("#label-price4").css("left","54%");
                    $("#label-qty4").css("left","59%");
                    $("#label-price5").css("left","66%");
                    $("#label-qty5").css("left","72%");
                }
                // med-Mob-------------------------------------------
                var mq2 = window.matchMedia( "(max-width: 375px)" );
                if (mq2.matches) {
                    $(".bullet1").css("left","12%");
                    $(".bullet2").css("left","24%");
                    $(".bullet3").css("left","35%");
                    $(".bullet4").css("left","47%");
                    $(".bullet5").css("left","56%");
                    $("#label-price1").css("left","12%");
                    $("#label-qty1").css("left","12%");
                    $("#label-price2").css("left","24%");
                    $("#label-qty2").css("left","26%");
                    $("#label-price3").css("left","36%");
                    $("#label-qty3").css("left","40%");
                    $("#label-price4").css("left","49%");
                    $("#label-qty4").css("left","55%");
                    $("#label-price5").css("left","60%");
                    $("#label-qty5").css("left","67%");
                }
                // small-mob----------------------------------------
                var mq3 = window.matchMedia( "(max-width: 320px)" );
                if (mq3.matches) {
                    $(".bullet1").css("left","10%");
                    $(".bullet2").css("left","21%");
                    $(".bullet3").css("left","32%");
                    $(".bullet4").css("left","43%");
                    $(".bullet5").css("left","52%");
                    $("#label-price1").css("left","10%");
                    $("#label-qty1").css("left","10%");
                    $("#label-price2").css("left","22%");
                    $("#label-qty2").css("left","25%");
                    $("#label-price3").css("left","33%");
                    $("#label-qty3").css("left","38%");
                    $("#label-price4").css("left","46%");
                    $("#label-qty4").css("left","53%");
                    $("#label-price5").css("left","56%");
                    $("#label-qty5").css("left","64%");
                }
                // tablets-------------------------------------------------------------------------------------
                var mq4 = window.matchMedia( "(min-device-width : 768px) and (max-device-width : 1020px)" );
                if (mq4.matches) {
                    $(".bullet1").css("left","13%");
                    $(".bullet2").css("left","26%");
                    $(".bullet3").css("left","39%");
                    $(".bullet4").css("left","51%");
                    $(".bullet5").css("left","63%");
                    $("#label-price1").css("left","14%");
                    $("#label-qty1").css("left","14%");
                    $("#label-price2").css("left","27%");
                    $("#label-qty2").css("left","30%");
                    $("#label-price3").css("left","41%");
                    $("#label-qty3").css("left","45%");
                    $("#label-price4").css("left","52%");
                    $("#label-qty4").css("left","59%");
                    $("#label-price5").css("left","64%");
                    $("#label-qty5").css("left","71%");
                }
                // Small Laptops------------------------------------------------------------------------------
                var mq5 = window.matchMedia( "(min-device-width : 1024px) and (max-device-width : 1350px)" );
                if (mq5.matches) {
                    $(".bullet1").css("left","15%");
                    $(".bullet2").css("left","30%");
                    $(".bullet3").css("left","45%");
                    $(".bullet4").css("left","59%");
                    $(".bullet5").css("left","74%");
                    $("#label-price1").css("left","12%");
                    $("#label-qty1").css("left","12%");
                    $("#label-price2").css("left","27%");
                    $("#label-qty2").css("left","28%");
                    $("#label-price3").css("left","42%");
                    $("#label-qty3").css("left","45%");
                    $("#label-price4").css("left","56%");
                    $("#label-qty4").css("left","60%");
                    $("#label-price5").css("left","69%");
                    $("#label-qty5").css("left","74%");
                }
            }
        }else{
            $("#checkpoint-details").hide();
            $("#no-check").hide();
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

