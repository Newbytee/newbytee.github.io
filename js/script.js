if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('js/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

function meme() {
    
    document.getElementById("text1").innerHTML = "Shrek";
    
}

function hide() {
  
    var isVisible = document.getElementById("defaultPage");
    
    if (isVisible.style.display === "none") {
      
      isVisible.style.display = "block";
      document.getElementById("toggleButton").innerHTML = "frick off";
      
    } else {
      
      isVisible.style.display = "none";
      document.getElementById("toggleButton").innerHTML = "frick on";
      
    }
  
}