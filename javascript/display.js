function upload() {
    var name = document.detailsform.name.value;
    var dob = document.detailsform.date.value;
    var gender = document.detailsform.gen.value;
    var fname = document.detailsform.fname.value;
    var address = document.detailsform.addr.value;
    var mobile = document.detailsform.mob.value;
    var landline = document.detailsform.lan.value;
    var email = document.detailsform.mail.value;
    var college = document.detailsform.cname.value;
    var marks = document.detailsform.mark.value;
    var interest = document.detailsform.interest.value;
    var letters = /^[A-Za-z][ ][.]+$/;
    var addr_expr = /^[A-Za-z][0-9][,][ ]]+$/;
    if (name == null || name == " ") {
        alert("Please enter a name");
    }
    else if (!(letters).test(name)) {
        alert("Name condition restricted")
    }
    else if (dob == " ") {
        alert("Please choose a date");
    }
    else if (gender == " ") {
        alert("Please choose a value");
    }
    else if (fname == null || fname == " ") {
        alert("Please enter a name");
    }
    else if (address == " ") {
        alert("Please enter an address");
    }
    else if (!(addr_expr).test(address)) {
        alert("Address condition restricted")
    }
    else if (mobile == " ") {
        alert("Please enter a valid mobile number");
    }
    else if (landline == " ") {
        alert("Please enter a valid landline number");
    }
    else if (email == " ") {
        alert("Please enter a valid e-mail address");
    }
    else if (college == " ") {
        alert("Please enter a name");
    }
    else if (marks == " ") {
        alert("Please enter valid marks");
    }
    else if (interest == " ") {
        alert("Please choose some values");
    }
    else {
        alert("Uploaded Successfully!! Thank You");
    }
    document.write("<h1><center>Personal details</center></h1>")
    document.write("<br><br>");
    document.write(" <b> Name " + " : </b>" + name);
    document.write("<br><br>");
    document.write(" <b> DOB " + " : </b>" + dob);
    document.write("<br><br>");
    document.write(" <b> Gender " + " : </b>" + gen);
    document.write("<br><br>");
    document.write(" <b>Father Name " + " : </b>" + fname);
    document.write("<br><br>");
    document.write(" <b> Address " + " : </b>" + addr);
    document.write("<br><br>");
    document.write(" <b> Mobile Number " + " : </b>" + mobile);
    document.write("<br><br>");
    document.write(" <b> Landline Number " + " : </b>" + landline);
    document.write("<br><br>");
    document.write(" <b> E-mail ID " + " : </b>" + email);
    document.write("<br><br>");
    document.write(" <b> College Name " + " : </b>" + college);
    document.write("<br><br>");
    document.write(" <b> Marks scored " + " : </b>" + marks);
    document.write("<br><br>");
    document.write(" <b> Personal Interest " + " : </b>" + interest);
    document.write("<br><br>");
    document.write("<h1><center>Thank You</center></h1>")
}