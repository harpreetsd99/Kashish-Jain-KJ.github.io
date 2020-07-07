const product_name = document.location.href.split('?')[1].split('=')[1];
// console.log(product_name);
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
        var quantity =  parseInt(doc.data()['Product_Quantity']);
        console.log(quantity);
        var x = 1;
        var price = [];
        var qty = [];
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
        // console.log(count);
     
            document.getElementById("numcheckpoint").innerHTML=count;
            document.getElementById("soll").innerHTML= doc.data()['Quantity_Sold']+  doc.data()['Product_Unit'];
            var sell = parseInt(doc.data()['Quantity_Sold']);
      
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
                qty.push(parseInt(doc.data()[a]));
                price.push(parseInt(doc.data()[b]));
                console.log(doc.data()[a]);
                console.log(doc.data()[b]);


			    $("#qty-checkpoint").append(
				    `<sup id="label-qty${i}">
	  			    <label>${ doc.data()[a]}${ doc.data()['Product_Unit']}</label>
	  			    </sup>`
			    );
			    $("#price-checkpoint").append(
				    `<sup  id="label-price${i}">
				    <label>${ doc.data()[b]}&#8377;</label>
				    </sup>`
			    );
            }
            console.log(qty);
            console.log(price);
            if(count==1){
                var a = (qty[0]/quantity)*100; 
                console.log(a);
                var b = (sell/quantity)*100;
                // Laptop-------------------------------------------
                $(".bullet1").css("left",a+"%");
                $("#label-price1").css("left",a+"%");
                $("#label-qty1").css("left",a+"%");
                $("#bar").css("width",b+"%");

                //L-Mobile-------------------------------------------
                var mq = window.matchMedia( "(max-width: 425px)" );
                if (mq.matches) {
                    $(".bullet1").css("left",(a-3.85)+"%");
                    $("#label-price1").css("left",(a-3.85)+"%");
                    $("#label-qty1").css("left",(a-3.85)+"%");
                    $("#bar").css("width",b+"%");
                }
                //S-Mobile-------------------------------------------
                var mq2 = window.matchMedia( "(max-width: 320px)" );
                if (mq2.matches) {
                    $(".bullet1").css("left",(a-5)+"%");
                    $("#label-price1").css("left",(a-5)+"%");
                    $("#label-qty1").css("left",(a-5)+"%");
                    $("#bar").css("width",b+"%");
                }    
            }
            else if(count==2){
                // Laptop------------------------------------------
                var a = (qty[0]/quantity)*100; 
                var a1 = (qty[1]/quantity)*100;
                console.log(a);
                var b = (sell/quantity)*100;
                $(".bullet1").css("left",a+"%");
                $(".bullet2").css("left",a1+"%");
                $("#label-price1").css("left",a+"%");
                $("#label-qty1").css("left",a+"%");
                $("#label-price2").css("left",a1+"%");
                $("#label-qty2").css("left",a1+"%");
                $("#bar").css("width",b+"%");
                // L-Mobile----------------------------------------
                var mq = window.matchMedia( "(max-width: 425px)" );
                if (mq.matches) {
                    $(".bullet1").css("left",(a-3.5)+"%");
                $(".bullet2").css("left",(a1-12)+"%");
                $("#label-price1").css("left",(a-3.5)+"%");
                $("#label-qty1").css("left",(a-3.5)+"%");
                $("#label-price2").css("left",(a1-12)+"%");
                $("#label-qty2").css("left",(a1-12)+"%");
                $("#bar").css("width",b+"%");
                }
                //M-Mobile------------------------------------------
                var mq1 = window.matchMedia( "(max-width: 375px)" );
                if (mq1.matches) {
                    $(".bullet1").css("left",(a-4.5)+"%");
                    $(".bullet2").css("left",(a1-14)+"%");
                    $("#label-price1").css("left",(a-4.5)+"%");
                    $("#label-qty1").css("left",(a-4.5)+"%");
                    $("#label-price2").css("left",(a1-14)+"%");
                    $("#label-qty2").css("left",(a1-14)+"%"); 
                    $("#bar").css("width",b+"%");
                }
                // //S-Mobile------------------------------------------
                var mq2 = window.matchMedia( "(max-width: 320px)" );
                if (mq2.matches) {
                    $(".bullet1").css("left",(a-5)+"%");
                    $(".bullet2").css("left",(a1-16)+"%");
                    $("#label-price1").css("left",(a-5)+"%");
                    $("#label-qty1").css("left",(a-5)+"%");
                    $("#label-price2").css("left",(a1-16)+"%");
                    $("#label-qty2").css("left",(a1-16)+"%"); 
                    $("#bar").css("width",b+"%");
                }
                // // Tablets & Small laptop---------------------------------------------------------------------
                var mq3 = window.matchMedia( "(min-device-width : 768px) and (max-device-width : 1024px)" );
                if (mq3.matches) {
                    $(".bullet1").css("left",(a+0.5)+"%");
                    $(".bullet2").css("left",(a1-6)+"%");
                    $("#label-price1").css("left",(a+0.5)+"%");
                    $("#label-qty1").css("left",(a+0.5)+"%");
                    $("#label-price2").css("left",(a1-6)+"%");
                    $("#label-qty2").css("left",(a1-6)+"%");
                    $("#bar").css("width",b+"%");
                }
            }
            else if(count==3){
                // Laptop------------------------------------------
                var a = (qty[0]/quantity)*100; 
                var a1 = (qty[1]/quantity)*100;
                var a2 = (qty[2]/quantity)*100;
                // console.log(a);
                // console.log(a1);
                // console.log(a2);
                var b = (sell/quantity)*100;
                $(".bullet1").css("left",a+"%");
                $(".bullet2").css("left",(a1-4.75)+"%");
                $(".bullet3").css("left",(a2-9.5)+"%");
                $("#label-price1").css("left",a+"%");
                $("#label-qty1").css("left",a+"%");
                $("#label-price2").css("left",(a1-4.75)+"%");
                $("#label-qty2").css("left",(a1-4.75)+"%");
                $("#label-price3").css("left",(a2-9.5)+"%");
                $("#label-qty3").css("left",(a2-9.5)+"%");
                $("#bar").css("width",b+"%");
                // L-Mobile-----------------------------------------
                var mq = window.matchMedia( "(max-width: 425px)" );
                if (mq.matches) {
                    $(".bullet1").css("left",(a-4)+"%");
                    $(".bullet2").css("left",(a1-12.5)+"%");
                    $(".bullet3").css("left",(a2-20.5)+"%");
                    $("#label-price1").css("left",(a-4)+"%");
                    $("#label-qty1").css("left",(a-4)+"%");
                    $("#label-price2").css("left",(a1-12.5)+"%");
                    $("#label-qty2").css("left",(a1-12.5)+"%");
                    $("#label-price3").css("left",(a2-20.5)+"%");
                    $("#label-qty3").css("left",(a2-20.5)+"%"); 
                    $("#bar").css("width",b+"%");
                }
                //M-Mobile--------------------------------------------
                var mq1 = window.matchMedia( "(max-width: 375px)" );
                if (mq1.matches) {
                    $(".bullet1").css("left",(a-4.5)+"%");
                    $(".bullet2").css("left",(a1-14)+"%");
                    $(".bullet3").css("left",(a2-23.5)+"%");
                    $("#label-price1").css("left",(a-4.5)+"%");
                    $("#label-qty1").css("left",(a-4.5)+"%");
                    $("#label-price2").css("left",(a1-14)+"%");
                    $("#label-qty2").css("left",(a1-14)+"%");
                    $("#label-price3").css("left",(a2-23.5)+"%");
                    $("#label-qty3").css("left",(a2-23.5)+"%"); 
                    $("#bar").css("width",b+"%");
                }
                //S-Mobile-------------------------------------------
                var mq2 = window.matchMedia( "(max-width: 320px)" );
                if (mq2.matches) {
                    $(".bullet1").css("left",(a-5)+"%");
                    $(".bullet2").css("left",(a1-16)+"%");
                    $(".bullet3").css("left",(a2-26.5)+"%");
                    $("#label-price1").css("left",(a-5)+"%");
                    $("#label-qty1").css("left",(a-5)+"%");
                    $("#label-price2").css("left",(a1-16)+"%");
                    $("#label-qty2").css("left",(a1-16)+"%");
                    $("#label-price3").css("left",(a2-26.5)+"%");
                    $("#label-qty3").css("left",(a2-26.5)+"%"); 
                    $("#bar").css("width",b+"%");
                }
                // Tablets------------------------------------------------------------------------------------
                var mq3 = window.matchMedia( "(min-device-width : 768px) and (max-device-width : 1020px)" );
                if (mq3.matches) {
                    $(".bullet1").css("left",(a)+"%");
                    $(".bullet2").css("left",(a1-6.3)+"%");
                    $(".bullet3").css("left",(a2-13)+"%");
                    $("#label-price1").css("left",(a)+"%");
                    $("#label-qty1").css("left",(a)+"%");
                    $("#label-price2").css("left",(a1-6.3)+"%");
                    $("#label-qty2").css("left",(a1-6.3)+"%");
                    $("#label-price3").css("left",(a2-13)+"%");
                    $("#label-qty3").css("left",(a2-13)+"%"); 
                    $("#bar").css("width",b+"%");
                }
                // S-Laptops---------------------------------------------------------------------------------
                var mq4 = window.matchMedia( "(min-device-width : 1024px) and (max-device-width : 1350px)" );
                if (mq4.matches) {
                    $(".bullet1").css("left",(a)+"%");
                    $(".bullet2").css("left",(a1-4.5)+"%");
                    $(".bullet3").css("left",(a2-9.5)+"%");
                    $("#label-price1").css("left",(a)+"%");
                    $("#label-qty1").css("left",(a)+"%");
                    $("#label-price2").css("left",(a1-4.5)+"%");
                    $("#label-qty2").css("left",(a1-4.5)+"%");
                    $("#label-price3").css("left",(a2-9.5)+"%");
                    $("#label-qty3").css("left",(a2-9.5)+"%"); 
                    $("#bar").css("width",b+"%");
                }
            } 
            else if(count==4){
                var a = (qty[0]/quantity)*100; 
                var a1 = (qty[1]/quantity)*100;
                var a2 = (qty[2]/quantity)*100;
                var a3 = (qty[3]/quantity)*100;
                // console.log(a);
                // console.log(a1);
                // console.log(a2);
                var b = (sell/quantity)*100;
                // Laptop--------------------------------------------
                $(".bullet1").css("left",(a)+"%");
                $(".bullet2").css("left",(a1-4.7)+"%");
                $(".bullet3").css("left",(a2-9.5)+"%");
                $(".bullet4").css("left",(a3-14.2)+"%");
                $("#label-price1").css("left",(a)+"%");
                $("#label-qty1").css("left",(a)+"%");
                $("#label-price2").css("left",(a1-4.7)+"%");
                $("#label-qty2").css("left",(a1-4.7)+"%");
                $("#label-price3").css("left",(a2-9.5)+"%");
                $("#label-qty3").css("left",(a2-9.5)+"%");
                $("#label-price4").css("left",(a3-14.2)+"%");
                $("#label-qty4").css("left",(a3-14.2)+"%");
                $("#bar").css("width",b+"%");
                // Large-Mob-----------------------------------------
                var mq = window.matchMedia( "(max-width: 425px)" );
                if (mq.matches) {
                   $(".bullet1").css("left",(a-4)+"%");
                    $(".bullet2").css("left",(a1-12.5)+"%");
                    $(".bullet3").css("left",(a2-20.5)+"%");
                    $(".bullet4").css("left",(a3-28.7)+"%");
                    $("#label-price1").css("left",(a-4)+"%");
                    $("#label-qty1").css("left",(a-4)+"%");
                    $("#label-price2").css("left",(a1-12.5)+"%");
                    $("#label-qty2").css("left",(a1-12.5)+"%");
                    $("#label-price3").css("left",(a2-20.5)+"%");
                    $("#label-qty3").css("left",(a2-20.5)+"%");
                    $("#label-price4").css("left",(a3-28.7)+"%");
                    $("#label-qty4").css("left",(a3-28.7)+"%");
                    $("#bar").css("width",b+"%");
                }
                // med-Mob-------------------------------------------
                var mq2 = window.matchMedia( "(max-width: 375px)" );
                if (mq2.matches) {
                   $(".bullet1").css("left",(a-4.5)+"%");
                    $(".bullet2").css("left",(a1-14.2)+"%");
                    $(".bullet3").css("left",(a2-24)+"%");
                    $(".bullet4").css("left",(a3-33.2)+"%");
                    $("#label-price1").css("left",(a-4.5)+"%");
                    $("#label-qty1").css("left",(a-4.5)+"%");
                    $("#label-price2").css("left",(a1-14.2)+"%");
                    $("#label-qty2").css("left",(a1-14.2)+"%");
                    $("#label-price3").css("left",(a2-24)+"%");
                    $("#label-qty3").css("left",(a2-24)+"%");
                    $("#label-price4").css("left",(a3-33.2)+"%");
                    $("#label-qty4").css("left",(a3-33.2)+"%");
                    $("#bar").css("width",b+"%");
                }
                // small-mob----------------------------------------
                var mq3 = window.matchMedia( "(max-width: 320px)" );
                if (mq3.matches) {
                    $(".bullet1").css("left",(a-5)+"%");
                    $(".bullet2").css("left",(a1-16)+"%");
                    $(".bullet3").css("left",(a2-27)+"%");
                    $(".bullet4").css("left",(a3-37.6)+"%");
                    $("#label-price1").css("left",(a-5)+"%");
                    $("#label-qty1").css("left",(a-5)+"%");
                    $("#label-price2").css("left",(a1-16)+"%");
                    $("#label-qty2").css("left",(a1-16)+"%");
                    $("#label-price3").css("left",(a2-27)+"%");
                    $("#label-qty3").css("left",(a2-27)+"%");
                    $("#label-price4").css("left",(a3-37.6)+"%");
                    $("#label-qty4").css("left",(a3-37.6)+"%");
                    $("#bar").css("width",b+"%");
                }
                // tablets-------------------------------------------------------------------------------------
                var mq4 = window.matchMedia( "(min-device-width : 768px) and (max-device-width : 1023px)" );
                if (mq4.matches) {
                    $(".bullet1").css("left",a+"%");
                    $(".bullet2").css("left",(a1-6.5)+"%");
                    $(".bullet3").css("left",(a2-12.7)+"%");
                    $(".bullet4").css("left",(a3-19.5)+"%");
                    $("#label-price1").css("left",a+"%");
                    $("#label-qty1").css("left",a+"%");
                    $("#label-price2").css("left",(a1-6.5)+"%");
                    $("#label-qty2").css("left",(a1-6.5)+"%");
                    $("#label-price3").css("left",(a2-12.7)+"%");
                    $("#label-qty3").css("left",(a2-12.7)+"%");
                    $("#label-price4").css("left",(a3-19.5)+"%");
                    $("#label-qty4").css("left",(a3-19.5)+"%");
                    $("#bar").css("width",b+"%");
                }
                // Small Laptops------------------------------------------------------------------------------
                var mq4 = window.matchMedia( "(min-device-width : 1024px) and (max-device-width : 1350px)" );
                if (mq4.matches) {
                   $(".bullet1").css("left",(a+0.2)+"%");
                    $(".bullet2").css("left",(a1-4.5)+"%");
                    $(".bullet3").css("left",(a2-9.5)+"%");
                    $(".bullet4").css("left",(a3-14.3)+"%");
                    $("#label-price1").css("left",(a+0.2)+"%");
                    $("#label-qty1").css("left",(a+0.2)+"%");
                    $("#label-price2").css("left",(a1-4.5)+"%");
                    $("#label-qty2").css("left",(a1-4.5)+"%");
                    $("#label-price3").css("left",(a2-9.5)+"%");
                    $("#label-qty3").css("left",(a2-9.5)+"%");
                    $("#label-price4").css("left",(a3-14.3)+"%");
                    $("#label-qty4").css("left",(a3-14.3)+"%");
                    $("#bar").css("width",b+"%");
                }
            }        
            else if(count==5){
                var a = (qty[0]/quantity)*100; 
                var a1 = (qty[1]/quantity)*100;
                var a2 = (qty[2]/quantity)*100;
                var a3 = (qty[3]/quantity)*100;
                var a4 = (qty[4]/quantity)*100;
                // console.log(a);
                // console.log(a1);
                // console.log(a2);
                var b = (sell/quantity)*100;
                // Laptop-------------------------------------------
                $(".bullet1").css("left",a+"%");
                $(".bullet2").css("left",(a1-4.75)+"%");
                $(".bullet3").css("left",(a2-9.5)+"%");
                $(".bullet4").css("left",(a3-14.3)+"%");
                $(".bullet5").css("left",(a4-19)+"%");
                $("#label-price1").css("left",a+"%");
                $("#label-qty1").css("left",a+"%");
                $("#label-price2").css("left",(a1-4.75)+"%");
                $("#label-qty2").css("left",(a1-4.75)+"%");
                $("#label-price3").css("left",(a2-9.5)+"%");
                $("#label-qty3").css("left",(a2-9.5)+"%");
                $("#label-price4").css("left",(a3-14.3)+"%");
                $("#label-qty4").css("left",(a3-14.3)+"%");
                $("#label-price5").css("left",(a4-19)+"%");
                $("#label-qty5").css("left",(a4-19)+"%");
                $("#bar").css("width",b+"%");
                // Large-Mob-----------------------------------------
                var mq = window.matchMedia( "(max-width: 425px)" );
                if (mq.matches) {
                    $(".bullet1").css("left",(a-3.8)+"%");
                    $(".bullet2").css("left",(a1-12.1)+"%");
                    $(".bullet3").css("left",(a2-20.4)+"%");
                    $(".bullet4").css("left",(a3-28.5)+"%");
                    $(".bullet5").css("left",(a4-37)+"%");
                    $("#label-price1").css("left",(a-3.8)+"%");
                    $("#label-qty1").css("left",(a-3.8)+"%");
                    $("#label-price2").css("left",(a1-12.1)+"%");
                    $("#label-qty2").css("left",(a1-12.1)+"%");
                    $("#label-price3").css("left",(a2-20.4)+"%");
                    $("#label-qty3").css("left",(a2-20.4)+"%");
                    $("#label-price4").css("left",(a3-28.5)+"%");
                    $("#label-qty4").css("left",(a3-28.5)+"%");
                    $("#label-price5").css("left",(a4-35)+"%");
                    $("#label-qty5").css("left",(a4-35)+"%");
                    $("#bar").css("width",b+"%");
                }
                // med-Mob-------------------------------------------
                var mq2 = window.matchMedia( "(max-width: 375px)" );
                if (mq2.matches) {
                    $(".bullet1").css("left",(a-4.2)+"%");
                    $(".bullet2").css("left",(a1-14.2)+"%");
                    $(".bullet3").css("left",(a2-23.7)+"%");
                    $(".bullet4").css("left",(a3-33)+"%");
                    $(".bullet5").css("left",(a4-42.5)+"%");
                    $("#label-price1").css("left",(a-4.2)+"%");
                    $("#label-qty1").css("left",(a-4.2)+"%");
                    $("#label-price2").css("left",(a1-14.2)+"%");
                    $("#label-qty2").css("left",(a1-14.2)+"%");
                    $("#label-price3").css("left",(a2-23.7)+"%");
                    $("#label-qty3").css("left",(a2-23.7)+"%");
                    $("#label-price4").css("left",(a3-33)+"%");
                    $("#label-qty4").css("left",(a3-33)+"%");
                    $("#label-price5").css("left",(a4-39.5)+"%");
                    $("#label-qty5").css("left",(a4-39.5)+"%");
                    $("#bar").css("width",b+"%");
                }
                // small-mob----------------------------------------
                var mq3 = window.matchMedia( "(max-width: 320px)" );
                if (mq3.matches) {
                    $(".bullet1").css("left",(a-5.2)+"%");
                    $(".bullet2").css("left",(a1-16.2)+"%");
                    $(".bullet3").css("left",(a2-26.7)+"%");
                    $(".bullet4").css("left",(a3-37.5)+"%");
                    $(".bullet5").css("left",(a4-48.5)+"%");
                    $("#label-price1").css("left",(a-5.2)+"%");
                    $("#label-qty1").css("left",(a-5.2)+"%");
                    $("#label-price2").css("left",(a1-16.2)+"%");
                    $("#label-qty2").css("left",(a1-16.2)+"%");
                    $("#label-price3").css("left",(a2-24.7)+"%");
                    $("#label-qty3").css("left",(a2-24.7)+"%");
                    $("#label-price4").css("left",(a3-35.5)+"%");
                    $("#label-qty4").css("left",(a3-35.5)+"%");
                    $("#label-price5").css("left",(a4-44.5)+"%");
                    $("#label-qty5").css("left",(a4-44.5)+"%");
                    $("#bar").css("width",b+"%");
                }
                // tablets-------------------------------------------------------------------------------------
                var mq4 = window.matchMedia( "(min-device-width : 768px) and (max-device-width : 1020px)" );
                if (mq4.matches) {
                    $(".bullet1").css("left",(a+0.2)+"%");
                    $(".bullet2").css("left",(a1-6.3)+"%");
                    $(".bullet3").css("left",(a2-13)+"%");
                    $(".bullet4").css("left",(a3-19.5)+"%");
                    $(".bullet5").css("left",(a4-26)+"%");
                    $("#label-price1").css("left",(a+0.2)+"%");
                    $("#label-qty1").css("left",(a+0.2)+"%");
                    $("#label-price2").css("left",(a1-6.3)+"%");
                    $("#label-qty2").css("left",(a1-6.3)+"%");
                    $("#label-price3").css("left",(a2-13)+"%");
                    $("#label-qty3").css("left",(a2-13)+"%");
                    $("#label-price4").css("left",(a3-19.5)+"%");
                    $("#label-qty4").css("left",(a3-19.5)+"%");
                    $("#label-price5").css("left",(a4-25)+"%");
                    $("#label-qty5").css("left",(a4-25)+"%");
                    $("#bar").css("width",b+"%");
                }
                // Small Laptops------------------------------------------------------------------------------
                var mq5 = window.matchMedia( "(min-device-width : 1024px) and (max-device-width : 1350px)" );
                if (mq5.matches) {
                    $(".bullet1").css("left",(a+0.2)+"%");
                    $(".bullet2").css("left",(a1-4.5)+"%");
                    $(".bullet3").css("left",(a2-9.5)+"%");
                    $(".bullet4").css("left",(a3-14.5)+"%");
                    $(".bullet5").css("left",(a4-19)+"%");
                    $("#label-price1").css("left",(a+0.2)+"%");
                    $("#label-qty1").css("left",(a+0.2)+"%");
                    $("#label-price2").css("left",(a1-4.5)+"%");
                    $("#label-qty2").css("left",(a1-4.5)+"%");
                    $("#label-price3").css("left",(a2-9.5)+"%");
                    $("#label-qty3").css("left",(a2-9.5)+"%");
                    $("#label-price4").css("left",(a3-14.5)+"%");
                    $("#label-qty4").css("left",(a3-14.5)+"%");
                    $("#label-price5").css("left",(a4-19)+"%");
                    $("#label-qty5").css("left",(a4-19)+"%");
                    $("#bar").css("width",b+"%");
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

