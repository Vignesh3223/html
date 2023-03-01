function Submit() {
    var fname = document.regform.fname.value;
    var lname = document.regform.lname.value;
    var fullname = fname + " " + lname;
    var dob = document.regform.date.value;
    var gender = document.regform.gender.value;
    var d1 = new Date(dob);
    var d2 = new Date
    agediff = d2 - d1;
    age = (agediff / 31536000000).toFixed(0);
    if (fname == "") {
        alert("Enter the First Name");
    }
    else if (lname == "") {
        alert("Enter the Last Name");
    }
    else if (dob == "") {
        alert("Enter the Date");
    }
    else if (age > 18) {
        alert(fullname + " is eligible to vote ");
    }
    else {
        alert(fullname + " have to wait for 18 years");
    }
    alert("Registered Successfully ! Thank You");
    document.write("<h1><center>Trainee details</center></h1>")
    document.write(" <b> Firstname " + " : </b>" + fname);
    document.write("<br><br>");
    document.write(" <b> Lastname " + " : </b>" + lname);
    document.write("<br><br>");
    document.write(" <b> Gender " + " : </b>" + gender);
    document.write("<br><br>");
    document.write(" <b> D.O.B" + " : </b>" + dob);
    document.write("<br><br>");
}

function validate() {
    var name = document.login.uname.value;
    var pass = document.login.passwd.value;
    var cmpass = document.login.cmpasswd.value;
    var pass_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    if (name == "") {
        alert("Username should not be blank");
    }
    else if (!letters.test(name)) {
        alert("Name field required only alphabet characters");
    }
    else if (pass == "") {
        alert("Please enter Password");
    }
    else if (cmpass == "") {
        alert("Enter Confirm Password");
    }
    else if (!pass_expression.test(pass)) {
        alert("Restricted the Password Condition");
    }
    else if (pass != cmpass) {
        alert('Password not Matched');
    }
    else {
        alert("Login Success!! Please fill in your details");
        window.location = "http://127.0.0.1:5500/javascript/regform.html";
    }
}
