function upload() {
    var name = document.myform.name.value;
    var dob = document.myform.date.value;
    var gender = document.myform.gen.value;
    var fathname = document.myform.fname.value;
    var address = document.myform.addr.value;
    var mobile = document.myform.mob.value;
    var landline = document.myform.lan.value;
    var email = document.myform.mail.value;
    var college = document.myform.clgname.value;
    var marks = document.myform.mark.value;
    var sing = document.myform.singing.checked;
    var dance = document.myform.dancing.checked;
    var swim = document.myform.swimming.checked;
    var read = document.myform.reading.checked;
    var paint = document.myform.painting.checked;
    var write = document.myform.writing.checked;
    var letters = /^([A-Za-z]{2,20})+$/;
    var mob = /^\d{10}$/;
    var tele = /^\(?(\d{2})\)?[-]?(\d{3})[-]?(\d{6})$/
    if (name == "") {
        alert("Please enter a NAME");
        return false;
    }
    else if (!(letters).test(name)) {
        alert("Conditions restricted");
        return false;
    }
    else if (dob == "") {
        alert("Please choose a DATE");
        return false;
    }
    else if (gender == " ") {
        alert("Please choose a gender");
        return false;
    }
    else if (fathname == "") {
        alert("Please enter a NAME");
        return false;
    }
    else if (!(letters).test(fathname)) {
        alert("Conditions restricted");
    }
    else if (address == "") {
        alert("Please enter a valid ADDRESS");
        return false;
    }
    else if (mobile == "") {
        alert("Please enter a MOBILE NUMBER");
        return false;
    }
    else if (!(mob).test(mobile)) {
        alert("Please enter a valid mobile number");
        return false;
    }
    else if (landline == "") {
        alert("Please enter a LANDLINE NUMBER");
        return false;
    }
    else if (!(tele).test(landline)) {
        alert("Please enter a valid landline number");
        return false;
    }
    else if (email == "") {
        alert("Please enter an EMAIL ID");
        return false;
    }
    else if (college == "") {
        alert("Please enter the COLLEGE NAME");
        return false;
    }
    else if (marks == "") {
        alert("Please enter the MARKS");
        return false;
    }
    else {
        alert("Uploaded Successfully , Thank You!!");
    }
    document.write("<h1><center><u>PERSONAL DETAILS</u></center></h1>");
    document.write("<br><br>");
    document.write("<b> Name : </b>" + name);
    document.write("<br><br>");
    document.write("<b> DOB : </b>" + dob);
    document.write("<br><br>");
    document.write("<b> Gender : </b>" + gender);
    document.write("<br><br>");
    document.write("<b> Father Name : </b>" + fathname);
    document.write("<br><br>");
    document.write("<b> Address : </b>" + address);
    document.write("<br><br>");
    document.write("<b> Mobile Number : </b>" + mobile);
    document.write("<br><br>");
    document.write("<b> Landline Number : </b>" + landline);
    document.write("<br><br>");
    document.write("<b> E-mail ID : </b>" + email);
    document.write("<br><br>");
    document.write("<b> College Name : </b>" + college);
    document.write("<br><br>");
    document.write("<b> Marks : </b>" + marks);
    document.write("<br><br>");
    document.write("<b> Personal Interest : </b>");
    if (sing) {
        document.write("Singing");
    }
    document.write(" , ");
    if (dance) {
        document.write("Dancing");
    }
    document.write(" , ");
    if (read) {
        document.write("Reading");
    }
    document.write(" , ");
    if (swim) {
        document.write("Swimming");
    }
    document.write(" , ");
    if (paint) {
        document.write("Painting");
    }
    document.write(" , ");
    if (write) {
        document.write("Writing");
    }
    document.write("<br><br>");
    document.write("<h1><center>THANK YOU</center></h1>");
}