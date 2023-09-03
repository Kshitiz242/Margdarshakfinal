function redirectToPage() {
    if (window.matchMedia('(max-width: 800px)').matches) {
        window.location.href = 'academia.html';
    } 
     else {
        window.location.href = 'academics.html';
    }
}

// Add a click event listener to the button with ID "abc12"
var button = document.getElementById('exploreButton');
button.addEventListener('click', redirectToPage);