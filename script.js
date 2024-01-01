var drawer = function () {

   
    if (!Element.prototype.closest) {
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      }
      Element.prototype.closest = function (s) {
        var el = this;
        var ancestor = this;
        if (!document.documentElement.contains(el)) return null;
        do {
          if (ancestor.matches(s)) return ancestor;
          ancestor = ancestor.parentElement;
        } while (ancestor !== null);
        return null;
      };
    }


    //
    // Settings
    //
    var settings = {
      speedOpen: 50,
      speedClose: 350,
      activeClass: 'is-active',
      visibleClass: 'is-visible',
      selectorTarget: '[data-drawer-target]',
      selectorTrigger: '[data-drawer-trigger]',
      selectorClose: '[data-drawer-close]',

    };


    //
    // Methods
    //

    // Toggle accessibility
    var toggleccessibility = function (event) {
      if (event.getAttribute('aria-expanded') === 'true') {
        event.setAttribute('aria-expanded', false);
      } else {
        event.setAttribute('aria-expanded', true);
      }
    };

    // Open Drawer
    var openDrawer = function (trigger) {

      // Find target
      var target = document.getElementById(trigger.getAttribute('aria-controls'));

      // Make it active
      target.classList.add(settings.activeClass);

      // Make body overflow hidden so it's not scrollable
      document.documentElement.style.overflow = 'hidden';

      // Toggle accessibility
      toggleccessibility(trigger);

      // Make it visible
      setTimeout(function () {
        target.classList.add(settings.visibleClass);
      }, settings.speedOpen);

    };

    // Close Drawer
    var closeDrawer = function (event) {
      
      // Find target
      var closestParent = event.closest(settings.selectorTarget),
        childrenTrigger = document.querySelector('[aria-controls="' + closestParent.id + '"');

      // Make it not visible
      closestParent.classList.remove(settings.visibleClass);

      // Remove body overflow hidden
      document.documentElement.style.overflow = '';

      // Toggle accessibility
      toggleccessibility(childrenTrigger);

      // Make it not active
      setTimeout(function () {
        closestParent.classList.remove(settings.activeClass);
      }, settings.speedClose);

    };

    // Click Handler
    var clickHandler = function (event) {

      // Find elements
      var toggle = event.target,
        open = toggle.closest(settings.selectorTrigger),
        close = toggle.closest(settings.selectorClose);

      // Open drawer when the open button is clicked
      if (open) {
        openDrawer(open);
      }

      // Close drawer when the close button (or overlay area) is clicked
      if (close) {
        
        closeDrawer(close);
      }

      // Prevent default link behavior
      if (open || close) {
        event.preventDefault();
      }

    };

    // Keydown Handler, handle Escape button
    var keydownHandler = function (event) {

      if (event.key === 'Escape' || event.keyCode === 7) {
        
        // Find all possible drawers
        var drawers = document.querySelectorAll(settings.selectorTarget),
          i;

        // Find active drawers and close them when escape is clicked
        for (i = 0; i < drawers.length; ++i) {
          if (drawers[i].classList.contains(settings.activeClass)) {
            closeDrawer(drawers[i]);
          }
        }

      }

    };


    //
    // Inits & Event Listeners
    //
    document.addEventListener('click', clickHandler, false);
    document.addEventListener('keydown', keydownHandler, false);


  };

  drawer();
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
//add quicklink
  const modal = document.querySelector("#modal");
  const closeModal = document.querySelector(".close-button");
  const title = document.getElementById("name");
  const url = document.querySelector(".url");
  const submit = document.getElementById("submit");
  const openModal = document.getElementById("add-quicklink");

  openModal.addEventListener("click", function() {
    modal.showModal();
  })

  closeModal.addEventListener("click", function(){
    modal.close();
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