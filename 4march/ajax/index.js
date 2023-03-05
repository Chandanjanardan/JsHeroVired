// function load(){
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function(){
    //     if(this.readyState==4&& this.status==200){
    //         document.getElementById("data").innerHTML=this.responseText
    //     }if(this.readyState==4 &&this.status==400){
    //         document.write("Not getting the data")
    //     }

    // }
    // xhttp.open("GET","file.txt",true)
    // xhttp.send()

//     function load() {
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//           if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("data").innerHTML = this.responseText;
//           }
//         };
//         xhttp.open("GET", "https://api.github.com/users", true);
//         xhttp.send();
//       }
// }


// var url = "https://api.github.com/users";


// var xhr = new XMLHttpRequest();


// xhr.onreadystatechange = function() {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     if (xhr.status === 200) {
     
//       var data = JSON.parse(xhr.responseText);
      
     
//       var login = data.login ;
      
      
//       console.log(login); 
//     } else {
//       console.log("Error: " + xhr.status);
//     }
//   }
// };


// xhr.open("GET", url, true);
// xhr.send();
// function myfun(){
//     var req = new XMLHttpRequest();
//     req.open("GET","load.html",true)
//     req.send();

//     req.onreadystatechange = function(){
//         if(req.readyState ==4 && req.status == 200){
//             document.getElementById("loaddata").innerHTML = this.responseText;
//         }
//     }
// }

// fetch("https://api.github.com/users")
// .then(response =>response.json())
// .then(data => {
//     const loginNames = data.map(user =>user.login);
//     console.log(loginNames)
// })
// .catch(error => console.error(error))

const url = 'https://api.github.com/users';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const loginNames = data.map(user => user.login);
    const usernamesDiv = document.getElementById('usernames');
    const usernamesList = document.createElement('ul');
    usernamesDiv.appendChild(usernamesList);
    for (let i = 0; i < 20; i++) {
      const usernameItem = document.createElement('li');
      const usernameText = document.createTextNode(loginNames[i]);
      usernameItem.appendChild(usernameText);
      usernamesList.appendChild(usernameItem);
    }
  })
  .catch(error => console.error(error));

