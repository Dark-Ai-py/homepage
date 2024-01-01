//isurl??
const isValidUrl = urlString=> {
  var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
return !!urlPattern.test(urlString);
}
//search function 
function search(query){
console.log(query);
if (query == "") {
  return false;
} else {
let isUrl = isValidUrl(query);
if (isUrl === true && query.startsWith('https://')|| query.startsWith('https://')) {
  webAddress = query;
} else if (isUrl === true) {
  webAddress = "https://" + query;
} else {
  var cleanQuery = query.replace(" ","+");
  webAddress = 'https://search.brave.com/search?q=' + cleanQuery;
};
window.location.href= webAddress;
};
};
//searchbar
 var searchBar = document.getElementById("search-bar");
 var searchButton = document.getElementById("search-btn");
 var clearButton = document.getElementById("clear-btn");
 //enter pressed
 searchBar.addEventListener("keyup", function(event) {
  if (event.code === 'Enter') {
    search(searchBar.value);
  }
});
//search button pressed
searchButton.addEventListener("click", function(event) {
  search(searchBar.value);
});
//clear button pressed
clearButton.addEventListener("click", function(event) {
  searchBar.value = '';
  searchBar.focus();

});
//quicklinks
//automatic image
function addImage(element) {
  let img = document.createElement("img");
  img.src = "https://besticon-demo.herokuapp.com/icon?url=" + element.href + "&size=40";
  img.style.height = '40px';
  img.style.width = '40px';
  img.style.maxWidth = '100%';
  img.style.borderRadius = '5px';
  return img;
};
document.querySelectorAll("a[href^='http']").forEach(function(element) {
  var favicon = addImage(element);
  element.insertBefore(favicon, element.firstChild);
});

/*
  submit.addEventListener("click", function(){
    alert(title.value + url.value);
    fetch('./Users/Sohan/Desktop/Coding/Databases/userInfo.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
    modal.close();
  });
*/