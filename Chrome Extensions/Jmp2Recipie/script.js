// <a href="https://www.flaticon.com/free-icons/cooking" title="cooking icons">Cooking icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/chef" title="chef icons">Chef icons created by Those Icons - Flaticon</a>

// var images = document.getElementsByTagName('img');
// for (var i = 0, l = images.length; i < l; i++) {
//   images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
// }

var links = document.querySelectorAll("a");
var found = false;
links.forEach(function(e){  
    if(e.textContent.replace(/\s+/g, '').toLowerCase() == "printrecipe" || e.textContent.replace(/\s+/g, '').toLowerCase() == "print" ){
        // window.onload = function(){ window.location = 'https://www.youtube.com' };
        e.setAttribute("target", "_blank");
        e.click();
        console.log("found print");
        return;
    }
   
})