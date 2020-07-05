// firestore reference
const db = firebase.firestore();

// firebase authentication reference
const auth = firebase.auth();

const signinForm = document.querySelector('form');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signinForm['email'].value;
    const password = signinForm['password'].value;
    const valid_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    
    if(valid_email.test(email)) {
        console.log(email,password);

        //  sign in firebase method
        auth.signInWithEmailAndPassword(email, password)
        .then(cred => {

            console.log(cred);
            
            //  get data from firestore
            db.collection("users").get()
            .then((querySnapshot) => {

                    querySnapshot.forEach((doc) => {
                        if(doc.data().email === email) {

                            console.log(`${doc.id} => ${doc.data().admin}`);

                            if(doc.data().admin) 
                                
                                window.location.href="Dashboard.html"
                            
                        }
                    })         
            })  
        }) 
        .catch(() => {
            var err = new Error('Only admin can login');
            alert(err);
        })
    }
    else{
        document.getElementById('email-error').innerHTML = "Enter valid email address";
    }    

})








































































































































