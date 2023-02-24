function submit() {
    alert("Registered Successfully ! Thank You");
    var fname = document.regform.fname.value;
    var lname = document.regform.lname.value;
    var fullname = fname + lname;
    var dob = document.regform.dob.value;
    var gender = document.regform.gender.value;
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var age = date - dob;
    if (fname == null) {
        alert("Enter the First Name");
    }
    else if (lname == null) {
        alert("Enter the Last Name");
    }
    else if (age >= 18) {
        document.write(fullname + "eligible to vote");
    }
    else {
        document.write(fullname + "wait to reach 18 years");
    }
    document.write("<h1><center>Trainee details</center></h1>")
    document.write(" <b> Firstname " + " : </b>" + fname);
    document.write("<br><br>");
    document.write(" <b> Lastname " + " : </b>" + lname);
    document.write("<br><br>");
    document.write(" <b> Fullname " + " : </b>" + fullname);
    document.write("<br><br>");
    document.write(" <b> DOB " + " : </b>" + dob);
    document.write("<br><br>");
    document.write(" <b> Gender " + " : </b>" + gender);
    document.write("<br><br>");
}


