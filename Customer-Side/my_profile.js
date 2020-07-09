var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var mob = document.getElementById("mob");
var email = document.getElementById("email");
var textarea1 = document.getElementById("textarea1");

var cityRef = document.getElementById('city');
var city = cityRef.options[cityRef.selectedIndex];

var stateRef = document.getElementById('state');
var state = stateRef.options[stateRef.selectedIndex];

const db = firebase.firestore();
const users_db = db.collection('users');
var user = firebase.auth().currentUser;
if (user) {

  console.log("log in hai");

  // User is signed in.
} else {
    console.log("log out hai.");
}

function onLoad() {
    const phone_no = localStorage.getItem('phone');

    users_db.doc(phone_no).get()
    .then(snapshot => {
        fname.value = snapshot.data().first_name;
        lname.value = snapshot.data().last_name;
        mob.value = snapshot.data().phone_no;
        email.value = snapshot.data().email;
        textarea1.value = snapshot.data().address;
        city.text = snapshot.data().city;
        state.text = snapshot.data().state;

        fname.readOnly = true;
        lname.readOnly = true;
        mob.readOnly = true;
        email.readOnly = true;
        textarea1.readOnly = true;

        console.log(snapshot.data().first_name,snapshot.data().last_name,
        snapshot.data().address,snapshot.data().city,snapshot.data().state,
        snapshot.data().phone_no,snapshot.data().email)
    })
    .catch(err => console.error(err))

}


$(document).ready(function(){
    var phone_no = localStorage.getItem('phone');
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            // No user is signed in.
            console.log("not signed in");
              window.location.assign('./signin.html');
          
        } else {
      
        
    $("#edit-btn").click(function(){
        $("#edit-btn").hide();
        $("#submit-btn").show();
        // $(".details").css("padding","0px 50px");
        // $(".img").css("padding","67px 50px");
        $(":input").prop("readonly", "");
    });
    $("#edit-btn-small").click(function(){
        $("#edit-btn-small").hide();
        $("#submit-btn").show();
        // $(".details").css("padding","0px 50px");
        // $(".img").css("padding","67px 50px");
        $(":input").prop("readonly", "");
    });
    $("#submit-btn").click(function(){
        $("#edit-btn").show();
        $("#submit-btn").hide();
        // $(".details").css("padding","18px 50px");
        // $(".img").css("padding","58px 50px");
        $(":input").prop("readonly", "readonly");

        var fname = $('#fname');
        var lname = $('#lname');
        var textarea1 = $('#textarea1');
        var email = $('#email');
        var phone = $('#mob');
        var city = $("#city option:selected");
        var state = $("#state option:selected");

        users_db.doc(phone_no).set({
            first_name : fname.val(),
            last_name : lname.val(),
            admin: false,
            email : email.val(),
            phone_no : phone.val(),
            address: textarea1.val(),
            city : city.text(),
            state: state.text()
        })
        .then(() => console.log('updated info'))
        .catch(err => console.error(err))
    })
}
});
});
