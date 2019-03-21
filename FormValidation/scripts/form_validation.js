window.onload = main;

var form;

var name_field;
var name_msg;
var age_field;
var age_msg;
var location_field;
var location_msg;
var email_field;
var email_msg;
var phone_field;
var phone_msg;
var address_field;
var address_msg;
var post_code_field;
var post_code_msg;

var submit_button;

function main()
{
    console.log("Main function");
    form = document.getElementById("main_form");
    
    name_field =        document.getElementById("name");
    name_msg =          document.getElementById("name_msg");
    age_field =         document.getElementById("age");
    age_msg =           document.getElementById("age_msg");
    location_field =    document.getElementById("location");
    location_msg =      document.getElementById("location_msg");
    email_field =       document.getElementById("email");
    email_msg =         document.getElementById("email_msg");
    phone_field =       document.getElementById("phone");
    phone_msg =         document.getElementById("phone_msg");
    address_field =     document.getElementById("address_line_1");
    address_msg =       document.getElementById("address_msg");
    post_code_field =   document.getElementById("post_code");
    post_code_msg =     document.getElementById("post_code_msg");
    
    submit_button = document.getElementById("submit_button");
    form.addEventListener("submit",validateForm);
    
    name_field = document.getElementById("name_field");
}

function validateForm(event)
{
    event.preventDefault(event);
    
    var form_valid = true;
    
    console.log(form.name.valid);
    if (form.name.value.replace(/\s/g,''))
    {
        form_valid = false;
        name_msg.style.display = "inline";
        event.preventDefault(event);
        
    }
    
}