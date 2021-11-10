function speedy(){
    document.getElementById('featuresTitle').innerHTML = 'Intelligent search';
    document.getElementById('featuresText').innerHTML = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.';    
    document.getElementById('imageFeatures').src = '../images/illustration-features-tab-2.svg';
    document.getElementById('simple').classList.remove('actived');
    document.getElementById('easy').classList.remove('actived');
    document.getElementById('speedy').classList.add('actived');
}
function simple(){
    document.getElementById('featuresTitle').innerHTML = 'Bookmark in one click';
    document.getElementById('featuresText').innerHTML = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';    
    document.getElementById('imageFeatures').src = '../images/illustration-features-tab-1.svg';
    document.getElementById('easy').classList.remove('actived');
    document.getElementById('speedy').classList.remove('actived');
    document.getElementById('simple').classList.add('actived');
}
function easy(){
    document.getElementById('featuresTitle').innerHTML = 'Share your bookmarks';
    document.getElementById('featuresText').innerHTML = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';    
    document.getElementById('imageFeatures').src = '../images/illustration-features-tab-3.svg';
    document.getElementById('speedy').classList.remove('actived');
    document.getElementById('simple').classList.remove('actived');
    document.getElementById('easy').classList.add('actived');
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}