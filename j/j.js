
    function validate() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      if (username == "123" && password == "123") {
        // alert("login Successfully!!");
        window.open("https://mr-jerry8000.github.io/my-jerry/", "_self");
        // window.location.href = "http://www.google.com";
        return false;
      } else {
        alert("Login failed");
      }
    }
 