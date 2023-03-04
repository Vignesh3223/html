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
    var interest = document.myform.interest.value;
    if (name == "") {
        alert("Please enter a NAME");
    }
    else if (!(letters).test(name)) {
        alert("Conditions restricted");
    }
    else if (dob == "") {
        alert("Please choose a DATE");
    }
    else if (gender == "") {
        alert("Please choose a gender");
    }
    else if (fathname == "") {
        alert("Please enter a NAME");
    }
    else if (!(letters).test(fathname)) {
        alert("Conditions restricted");
    }
    else if (address == "") {
        alert("Please enter a valid ADDRESS");
    }
    else if (mobile == "") {
        alert("Please enter a MOBILE NUMBER")
    }
    else if (landline == "") {
        alert("Please enter a LANDLINE NUMBER")
    }
    else if (email == "") {
        alert("Please enter an EMAIL ID");
    }
    else if (college == "") {
        alert("Please enter the COLLEGE NAME");
    }
    else if (marks == "") {
        alert("Please enter the MARKS");
    }
    else if(interest == ""){
        alert("Please choose atleast ONE");
    }
    else{
        alert("Everything is Perfect")
    }
    alert("Uploaded Successfully , Thank You!!");
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
    document.write("<b> Personal Interest : </b>" + interest);
    document.write("<br><br>");
    document.write("<h1><center>THANK YOU</center></h1>");
}