
    function validate() {
      var password = document.getElementById("password").value;
      if (password == 87699) {
        // alert("login Successfully!!");
        window.open("life_menu.html", "_self");
        // window.location.href = "http://www.google.com";
        return false;
      }
       else {
        // alert("Login failed");
        document.getElementById("message").innerHTML = "Enter valid username and password!!!";  
      }
    }
    function done(){
      document.getElementById("message2").innerHTML = "Enter successfully!!!";  
    }
    
    
    
 