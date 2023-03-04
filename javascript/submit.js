function registration() {
    alert("Registered Succesfully ! Thank You")
    var name = document.form1.tname.value;
    var email = document.form1.mail.value;
    var gender = document.form1.gender.value;
    var address = document.form1.addr.value;
    var dob = document.form1.date.value;
    var profession = document.form1.profession.value;
    var mobile = document.form1.mob.value;
    var telephone = document.form1.tele.value;

    document.write("<h1><center>Trainee details</center></h1>")
    document.write(" <b> Name " + " : </b>" + name);
    document.write("<br><br>");
    document.write(" <b> Email ID " + " : </b>" + email);
    document.write("<br><br>");
    document.write(" <b> Gender " + " : </b>" + gender);
    document.write("<br><br>");
    document.write(" <b> Address " + " : </b>" + address);
    document.write("<br><br>");
    document.write(" <b> D.O.B" + " : </b>" + dob);
    document.write("<br><br>");
    document.write(" <b> Profession " + " : </b>" + profession);
    document.write("<br><br>");
    document.write(" <b> Mobile number " + " : </b>" + mobile);
    document.write("<br><br>");
    document.write(" <b> Telephone number " + " : </b>" + telephone);
    document.write("<br><br>");
}