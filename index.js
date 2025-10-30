var fancyText = document.getElementById('fancy');
var intervalTime = 150; // milliseconds between character deletion/insertion
var initialPause = 1000; // give the person viewing the website some time to view our site
var callbackPause = 500; // how long we'll wait before we go to the next type-text

function deleteContent(callback) {

    var intervalID = setInterval(function() {
        if (fancyText.innerHTML.length == 0) {
            clearInterval(intervalID);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = fancyText.innerHTML.substring(0, fancyText.innerHTML.length - 1);
    }, intervalTime);
}

function addContent(contentToAdd, callback) {
    var currIdx = 0;

    var intervalID = setInterval(function() {
        if (currIdx == contentToAdd.length) {
            clearInterval(intervalID);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = contentToAdd.substring(0, currIdx);
        currIdx++;
    }, intervalTime);
}

setTimeout(function() {

    // while(true) {

    addContent("Welcome.", function() {
        deleteContent(function() {
            addContent("I'm Mai.");
        })
    })
    // }
    
}, initialPause);

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-right a');
    const currentURL = window.location.href;

    links.forEach(link => {
        // Use includes instead of strict equality for more flexibility
        if(currentURL.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-right a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active from all links
            links.forEach(l => l.classList.remove('active'));

            // Add active to the clicked link
            this.classList.add('active');
        });
    });
});
