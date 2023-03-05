const searchBox = document.getElementById('search-box');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const searchQuery = searchBox.value;
  const apiUrl = `https://api.github.com/users/${searchQuery}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
});