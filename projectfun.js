document.addEventListener('DOMContentLoaded', function(){
const form = document.getElementById('Information');
form.addEventListener('submit', function(event) {
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message =  document.getElementById('message').value;

if(name === ''|| email ==='' || message ===''){
    alert("All fields are required")
        event.preventDefault(); 
        return false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if(!emailPattern.test(email)){
    alert("Please enter a valid email address.");
            event.preventDefault();
            return false;
        }

        alert("Form submitted successfully!");

});

    });