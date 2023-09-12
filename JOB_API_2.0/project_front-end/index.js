const form = document.getElementById('JobSearchform');
const submitButton = document.getElementById('Submit_btn');
const base_url = 'http://127.0.0.1:2000/';

const responseContainer = document.getElementById('responseContainer');

// Function to handle the button click event
submitButton.addEventListener('click', async (event) => {
    // Get form data
    const formData = new FormData(form);
    console.log("backend received data");
    // console.log(JSON.stringify(formData));

    // Create an object to store the form data
    const formDataObject = {};

    // Loop through form data and populate the object
    formData.forEach(function (value, key) {
        formDataObject[key] = value;
    });

    var apiUrl = base_url + "?search=" + formDataObject["jobkeys"];

    fetch(apiUrl, {
        method: 'GET'
    })
        .then(response => {
            // Check if the response status is OK (200)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Process the data returned by the API
            console.log(data);
            responseContainer.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });
    // Now you can access the form data in the formDataObject
    console.log(JSON.stringify(formDataObject));


    event.preventDefault();
    // You can perform further processing or send the data to a server here
});