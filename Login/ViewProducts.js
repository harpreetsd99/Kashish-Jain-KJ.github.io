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
   
    
    
   
    for (i = 0; i < docum.length; i++){
        
        var element = document.getElementById("Show");
        var box = document.createElement("div");
        box.setAttribute("class", "col s12 m7");
            // var box1 = document.createElement("div");
                var card = document.createElement("div");
                card.setAttribute("class", "card horizontal");
                    var cardimg = document.createElement("div");
                    cardimg.setAttribute("class", "card-image");
                        var imge = document.createElement("img");
                            imge.setAttribute("id",dict[docum[i]]["Product_Name"] + "Img" )
                            imge.setAttribute('src',dict[docum[i]]["Product_URL"]);
                            imge.setAttribute('class',"responsive-img");
                            
                         
                            
                    cardimg.appendChild(imge);
                    var cardstack = document.createElement("div");
                    cardstack.setAttribute('class',"card-stacked");
                        var cardcontent = document.createElement("div");
                        cardcontent.setAttribute('class',"card-content");
                            var p1 = document.createElement("p");
                            p1.setAttribute("class","flow-text");
                                var b1 = document.createElement("b")
                                var node1 = document.createTextNode(dict[docum[i]]["Product_Name"]);
                                    b1.appendChild(node1);
                                p1.appendChild(b1);
                            var p2 = document.createElement("p");
                            p2.setAttribute("class","flow-text");
                                var node2 = document.createTextNode("Category: " + dict[docum[i]]["Product_Category"]);
                                p2.appendChild(node2);
                            var p3 = document.createElement("p");
                            p3.setAttribute("class","flow-text");
                                var node3 = document.createTextNode(dict[docum[i]]["Product_Discription"]);
                                p3.appendChild(node3);
                            var p4 = document.createElement("p");
                            p4.setAttribute("class","flow-text");
                                var node4 = document.createTextNode("Quantity: " + dict[docum[i]]["Product_Quantity"]);
                                p4.appendChild(node4);
                            var p5 = document.createElement("p");
                            p5.setAttribute("class","flow-text");
                                var node5 = document.createTextNode("Unit: " + dict[docum[i]]["Product_Unit"]);
                                p5.appendChild(node5);
                            var p6 = document.createElement("p");
                            p5.setAttribute("class","flow-text");
                                var node6 = document.createTextNode("Price: " + dict[docum[i]]["Product_Price"]);
                                p6.appendChild(node6);
                        cardcontent.appendChild(p1);
                        cardcontent.appendChild(p2);
                        cardcontent.appendChild(p3);
                        cardcontent.appendChild(p4);
                        cardcontent.appendChild(p5);
                    
                        var cardaction = document.createElement("div");
                        cardaction.setAttribute('class',"card-action");
                            var button1 = document.createElement("button");
                                button1.innerHTML = "edit";
                                button1.setAttribute("class", "btn waves-effect waves-light indigo");
                                button1.setAttribute("type", "submit");
                                button1.setAttribute("name", "action");
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
    element.appendChild(box);
    
    
    }
    
 
    


});


   
    





