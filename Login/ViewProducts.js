const db = firebase.firestore();
var storageRef = firebase.storage().ref();
 docum = []
 var dict = {}
db.collection("Products").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        docum.push(doc.id);
        dict[doc.id] = doc.data();
        
    });
    // console.log(docum[0]);
    // console.log(dict[docum[0]]["Product_Name"]);
   
        var element1 = document.getElementById("Fruits");
        var element2 = document.getElementById("Vegetables");
        var element3 = document.getElementById("Others");
    
   
    for (i = 0; i < docum.length; i++){
        
        // var element = document.getElementById("Show");
        
        var box = document.createElement("div");
        box.setAttribute("class", "col s12 m7 align-self-center");
            // var box1 = document.createElement("div");
                var card = document.createElement("div");
                card.setAttribute("class", "card horizontal hoverable ");
                    var cardimg = document.createElement("div");
                    cardimg.setAttribute("class", "card-image");
                        var imge = document.createElement("img");
                            imge.setAttribute("id",dict[docum[i]]["Product_Name"] + "Img" )
                            imge.setAttribute('src',dict[docum[i]]["Product_URL"]);
                            imge.setAttribute('class',"responsive-img");
                            imge.setAttribute('width',"300px");
                            imge.setAttribute('height',"300px");
                            
                         
                            
                    cardimg.appendChild(imge);
                    var cardstack = document.createElement("div");
                    cardstack.setAttribute('class',"card-stacked");
                        var cardcontent = document.createElement("div");
                        cardcontent.setAttribute('class',"card-content");
                            var p1 = document.createElement("p");
                            p1.setAttribute("class","flow-text indigo-text");
                            p1.setAttribute("style","margin-top:10px;");
                                var b1 = document.createElement("b");
                                var node1 = document.createTextNode(dict[docum[i]]["Product_Name"]);
                                    b1.appendChild(node1);
                                p1.appendChild(b1);
                            var p2 = document.createElement("p");
                            p2.setAttribute("class","flow-text ");
                            p2.setAttribute("style","margin-top:10px;");
                                var span2 = document.createElement("span");
                                span2.setAttribute("class"," indigo-text");
                                var txt2 = document.createTextNode("Category: ");
                                span2.appendChild(txt2);
                                var node2 = document.createTextNode( dict[docum[i]]["Product_Category"]);
                                p2.appendChild(span2);
                                p2.appendChild(node2);
                            var p3 = document.createElement("p");
                            p3.setAttribute("style","margin-top:10px;");
                                var span3 = document.createElement("span");
                                span3.setAttribute("class"," indigo-text");
                                var txt3 = document.createTextNode("Description: ");
                                span3.appendChild(txt3);
                                p3.setAttribute("class","flow-text");
                                var node3 = document.createTextNode(dict[docum[i]]["Product_Discription"]);
                                p3.appendChild(span3);
                                p3.appendChild(node3);
                            var p4 = document.createElement("p");
                            p4.setAttribute("style","margin-top:10px;");
                                p4.setAttribute("class","flow-text");
                                var span4 = document.createElement("span");
                                span4.setAttribute("class"," indigo-text");
                                var txt4 = document.createTextNode("Quantity: ");
                                span4.appendChild(txt4);
                                var node4 = document.createTextNode(dict[docum[i]]["Product_Quantity"]);
                                p4.appendChild(span4);
                                p4.appendChild(node4);
                            var p5 = document.createElement("p");
                            p5.setAttribute("style","margin-top:10px;");
                                var span5 = document.createElement("span5");
                                span5.setAttribute("class"," indigo-text");
                                var txt5 = document.createTextNode("Unit: ");
                                span5.appendChild(txt5);
                                p5.setAttribute("class","flow-text");
                                var node5 = document.createTextNode(dict[docum[i]]["Product_Unit"]);
                                p5.appendChild(span5);
                                p5.appendChild(node5);
                            var p6 = document.createElement("p");
                            p6.setAttribute("style","margin-top:10px;");
                                p6.setAttribute("class","flow-text");
                                var span6 = document.createElement("span6");
                                span6.setAttribute("class"," indigo-text");
                                var txt6 = document.createTextNode("Price: ");
                                span6.appendChild(txt6);
                                var node6 = document.createTextNode(dict[docum[i]]["Product_Price"]);
                                p6.appendChild(span6);
                                p6.appendChild(node6);
                            var a1 = document.createElement("a");
                            a1.setAttribute("style","margin-top:100px;");
                            a1.setAttribute("href","detail.html?product_name="+docum[i]);
                                var at = document.createTextNode("View Buyers Details");
                                
                                a1.appendChild(at);
                        cardcontent.appendChild(p1);
                        cardcontent.appendChild(p2);
                        cardcontent.appendChild(p3);
                        cardcontent.appendChild(p4);
                        cardcontent.appendChild(p5);
                        cardcontent.appendChild(p6);
                        cardcontent.appendChild(a1);
                    
                        var cardaction = document.createElement("div");
                        cardaction.setAttribute('class',"card-action");
                            var button1 = document.createElement("button");
                                button1.innerHTML = "edit";
                                button1.setAttribute("class", "btn waves-effect waves-light indigo");
                                button1.setAttribute("type", "submit");
                                button1.setAttribute("name", "action");
                                button1.setAttribute("value", dict[docum[i]]["Product_Name"]);   
                                button1.setAttribute("onclick", "editp(value)");
                                var i1 = document.createElement("i");
                                var t1 = document.createTextNode("edit");
                                i1.setAttribute("class", "material-icons right");
                                i1.appendChild(t1);
                                button1.appendChild(i1);
                            var button2 = document.createElement("button");
                                button2.innerHTML = "delete";
                                button2.setAttribute("class", "btn waves-effect waves-light indigo");
                                button2.setAttribute("type", "submit");
                                button2.setAttribute("name", "action");
                                button2.setAttribute("value", dict[docum[i]]["Product_Name"]);
                             
                                button2.setAttribute("onclick", "deletep(value)");
                                var i2 = document.createElement("i");
                                var t2 = document.createTextNode("delete");
                                i2.setAttribute("class", "material-icons right");
                                i2.appendChild(t2);
                                button2.appendChild(i2);
                        cardaction.appendChild(button1);
                        cardaction.appendChild(button2);
                    
                    cardstack.appendChild(cardcontent);
                    cardstack.appendChild(cardaction);
                card.appendChild(cardimg);
                card.appendChild(cardstack);
            // box1.appendChild(card);
            // box1.setAttribute("class", "col s12 m7");
        box.appendChild(card);
    if(dict[docum[i]]["Product_Category"] == "Fruits"){
        element1.appendChild(box);
    }
    else if(dict[docum[i]]["Product_Category"] =="Veggies"){
        element2.appendChild(box);
    }
    else{
        element3.appendChild(box);
    }
    // element.appendChild(box);
    
    
    }
    
 
    


});


   
    





