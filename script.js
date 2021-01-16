function validateform() {
    // variable declaration
    var letters = /^[A-Za-z]+$/;
    var numeric = /^[0-9]+$/;
    var userOutput = "";
    var nameOutput = "";
    var passOutput = "";
    var countryOutput = "";
    var zipOutput = "";
    var emailOutput = "";
    var genderOutput = "";
    var langOutput = "";
    // Access  html tags 

    var userId = document.forms["myform"]["userid"].value;
    var password = document.forms["myform"]["password"].value;
    var name = document.forms["myform"]["name"].value;
    var country = document.forms["myform"]["country"].value;
    var zipCode = document.forms["myform"]["zipcode"].value;
    var email = document.forms["myform"]["email"].value;
    var gender = document.forms["myform"]["gender"];
    var language = document.forms["myform"]["language"];
    // code .........

    // user id 
    if (userId == "") {
        userOutput += "<small> Must be filled. <small>"
        document.getElementById("idpara").innerHTML = userOutput;
        return false;
    }


    else if (userId.length < 5 || userId.length > 12) {
        userOutput += "<small> Must be of length 5 to 12. <small>"
        document.getElementById("idpara").innerHTML = userOutput;

        return false;
        
        }
    // password
    else if (password == "") {
        passOutput += "<small> Must be filled out. <small>"
        document.getElementById("passpara").innerHTML = passOutput;
        return false;
    }

    else if (password.length < 7 || password.length > 12) {
        passOutput += "<small> Must be of length 7 to 12. <small>"
        document.getElementById("passpara").innerHTML = passOutput;
        return false;
    }
    // Name
    else if (name == "") {
        nameOutput += "<small> Must be filled out. <small>"
        document.getElementById("namepara").innerHTML = nameOutput;
        return false;
    }


    else if (!name.match(letters)) {
        nameOutput += "<small>Please enter only alphabets.<small>"
        document.getElementById("namepara").innerHTML = nameOutput;
        return false;
    }
    // Country
    else if (country == "country select") {
        countryOutput += "<small> Must select a country. <small>"
        document.getElementById("countrypara").innerHTML = countryOutput;
        return false;
    }
    // zipcode
    else if (zipCode == "") {
        zipOutput += "<small> Must be filled out. <small>"
        document.getElementById("zippara").innerHTML = zipOutput;
        return false;
    }


    else if (!zipCode.match(numeric)) {
        zipOutput += "<small>Must be numeric only.<small>"
        document.getElementById("zippara").innerHTML = zipOutput;
        return false;
    }


    else if ( zipCode.length < 5)   {
        zipOutput += "<small> Please enter a valid ZipCode. <small>"
        document.getElementById("zippara").innerHTML = zipOutput;
        return false;
    }


    // Email


    else if (email == "") {
        emailOutput += "<small> Must be filled out. <small>"
        document.getElementById("emailpara").innerHTML = emailOutput;
        return false;
    }

    else if (email.indexOf("@") == -1) {
        emailOutput += "<small> Not a valid Email. [use:@example.com] <small>"
        document.getElementById("emailpara").innerHTML = emailOutput;
        return false;
    }

    // Gender
    for (let index = 0; index < gender.length; index++) {
        if (gender[index].checked == true) {
            return true;
        }
        genderOutput += "<small> Please Select One. <small>"
        document.getElementById("genderpara").innerHTML = genderOutput;
        return false;
    }

    // languages
    for (let index = 0; index < language.length; index++) {
        if (language[index].checked == true) {
            return true
        }

        langOutput += "<small> Please Select Atleast One. <small>"
        document.getElementById("langpara").innerHTML = langOutput;
        return false;
    }

}



