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
            var box1 = document.createElement("div");
                var card = document.createElement("div");
                    var cardimg = document.createElement("div");
                        var imge = document.createElement("img");
                            imge.setAttribute("id",dict[docum[i]]["Product_Name"] + "Img" )
                            imge.setAttribute("width", "100");
                            imge.setAttribute("height", "100"); 
                            imge.setAttribute('src',dict[docum[i]]["Product_URL"]);
                         
                            
                    cardimg.appendChild(imge);
                    var cardstack = document.createElement("div");
                        var cardcontent = document.createElement("div");
                            var p1 = document.createElement("p");
                                var node1 = document.createTextNode(dict[docum[i]]["Product_Name"]);
                                p1.appendChild(node1);
                            var p2 = document.createElement("p");
                                var node2 = document.createTextNode(dict[docum[i]]["Product_Discription"]);
                                p2.appendChild(node2);
                            var p3 = document.createElement("p");
                                var node3 = document.createTextNode("Other Details");
                                p3.appendChild(node3);
                        cardcontent.appendChild(p1);
                        cardcontent.appendChild(p2);
                        cardcontent.appendChild(p3);
                    
                        var cardaction = document.createElement("div");
                            var button1 = document.createElement("button");
                                button1.innerHTML = "edit";
                            var button2 = document.createElement("button");
                                button2.innerHTML = "delete";
                        cardaction.appendChild(button1);
                        cardaction.appendChild(button2);
                    
                    cardstack.appendChild(cardcontent);
                    cardstack.appendChild(cardaction);
                card.appendChild(cardimg);
                card.appendChild(cardstack);
            box1.appendChild(card);
            box1.setAttribute("class", "col s12 m7");
        box.appendChild(box1);
    element.appendChild(box);
    
    
    }
    
 
    


});


   
    





