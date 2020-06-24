// firestore reference
const db = firebase.firestore();
var card_number = 0;
const user_db = db.collection('users');
const products_db = db.collection('Products');



products_db.get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        user_db.get()
        .then((snapshot) => {

            snapshot.forEach((user_doc) => {
                if(!user_doc.data().admin){
                    console.log(doc.id)
                    products_db.doc(doc.id).collection("buyers_detail").doc(user_doc.data().email)
                    .set({
                        quantity : '',
                        price : ''
                    })
                }
            })
        })
        .catch(err => console.log(err))
    })
})
.catch(err => console.log(err))

db.collectionGroup('buyers_detail').get()
.then(function (querySnapshot) {
    querySnapshot.forEach((buyers_doc) => {
        console.log(buyers_doc.id, ' => ', buyers_doc.data());

        user_db.get()
        .then((snapshot) => {

            snapshot.forEach((users_doc) => {

                // if buyers_detail and users user_id are same
                if(users_doc.data().admin == false) {                      
                    console.log(`${buyers_doc.data().price}, ${buyers_doc.data().quantity} =>
                        ${users_doc.data().address}, ${users_doc.data().name}, ${users_doc.data().phone_no}`);                        
                        // adding cards info to card-dynamic tag
                        $(document).ready(function(){
                            card_number = card_number + 1;
                                $("#detailList").append(
                                        `<li><div class="card">
                                            <div class="card-content">
                                                <span class="card-title" id="name">${users_doc.data().name}</span>
                                                <p id="address">Address : ${users_doc.data().address}</p>
                                                <p>Phone_no : ${users_doc.data().phone_no}</p>
                                                <p>Quantity : ${buyers_doc.data().quantity}</p>
                                                <p>Price : <span class="price">${buyers_doc.data().price}</span></p>
                                            </div>
                                        </div></li>`
                            );
                        });
                }
            })
        })        
    })
})
.catch(err => console.warn(err))

function sort(list, key) {
    console.log("In sort function");
    $($(list).get().reverse()).each(function(outer) {
        var sorting = this;
        console.log("Hi from inside");
        console.log(sorting);
        $($(list).get().reverse()).each(function(inner) {
            if(parseInt($(key, this).text()) > parseInt($(key, sorting).text())) {
            //if($(key, this).text().localeCompare($(key, sorting).text()) > 0) {
                this.parentNode.insertBefore(sorting.parentNode.removeChild(sorting), this);
            }
        });
    });
    console.log("Exiting sort function");
}

function sortReverse(list, key) {
    console.log("In sort function");
    $($(list).get().reverse()).each(function(outer) {
        var sorting = this;
        console.log("Hi from inside");
        console.log(sorting);
        $($(list).get().reverse()).each(function(inner) {
            if(parseInt($(key, this).text()) < parseInt($(key, sorting).text())) {
            //if($(key, this).text().localeCompare($(key, sorting).text()) > 0) {
                this.parentNode.insertBefore(sorting.parentNode.removeChild(sorting), this);
            }
        });
    });
    console.log("Exiting  reverse sort function");
}



var dropdowns = document.querySelectorAll('.dropdown-trigger')
for (var i = 0; i < dropdowns.length; i++){
    M.Dropdown.init(dropdowns[i]);
}



const slide_menu = document.querySelectorAll(".sidenav");
M.Sidenav.init(slide_menu,{});