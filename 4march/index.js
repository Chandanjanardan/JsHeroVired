function load() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 || this.status == 200) {
      var jsonData = this.responseText;

      var data = JSON.parse(jsonData);
      document.getElementById("data").innerHTML = data;
      let str = "";

      for (let i = 0; i < 20; i++) {
        document.write(
          `<img src = ${data[i].avatar_url}  width =100px>`,

          "ID:",
          data[i].id,

          "</br>Username:",
          data[i].login + "</br></br>"
        );
      }
      //   document.getElementById("data").innerHTML = str;
    }
  };

  // Display the username
  //   console.log(username); // Output: johndoe
  xhttp.open("GET", "https://api.github.com/users", true);
  xhttp.send();
}

//
