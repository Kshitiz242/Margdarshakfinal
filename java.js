
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const elements = document.getElementById("elements");
    const abcdContainer = document.querySelector(".name"); // Assuming there's only one element with class "abcd"
    let containerabc = document.querySelector(".menu-icon");
    let cont = document.querySelector(".logo");
    let contri = document.querySelector(".logo7");
    const overflowXValue = elements.style.right === "0px" ? "hidden" : "auto";
    document.documentElement.style.overflowX = overflowXValue;
    document.body.style.overflowX = overflowXValue;

    let customBehaviorActive = false;

    function handleClick() {
        if (customBehaviorActive) {
          // Restore default behavior her
            elements.style.right = "-100%";
            elements.style.display = "none"; // Hide the menu
            elements.style.right = "0px";
            abcdContainer.style.display = "block";
            cont.style.display = "flex";
            contri.style.display = "flex";
            contri.style.width = "25vw";
        const overflowXValue = elements.style.right === "0px" ? "hidden" : "auto";
    document.documentElement.style.overflowX = overflowXValue;
    document.body.style.overflowX = overflowXValue;   
        } else {
          // Perform custom behavior here
            elements.style.right = "-100%";
            elements.style.display = "block"; // Hide the menu
            elements.style.right = "0px"
            abcdContainer.style.display = "none";
            cont.style.display = "none";
     
        const overflowXValue = elements.style.right === "0px" ? "hidden" : "auto";
    document.documentElement.style.overflowX = overflowXValue;
    document.body.style.overflowX = overflowXValue;   
        }
    
        // Toggle the flag
        customBehaviorActive = !customBehaviorActive;
      }
      menuIcon.addEventListener('click', handleClick);
      
    });
    // menuIcon.addEventListener("click", function () {
    //     document.body.style.overflowX = this.hidden;

    //     if (elements.style.right === "0px" || elements.style.right === "") {
            
    //         elements.style.right = "-100%";
    //         elements.style.display = "none"; // Hide the menu
    //     } else {
    //         elements.style.right = "0px";
    //         elements.style.display = "block"; // Show the menu
    //     }
    //     if (abcdContainer.style.display === "none" || abcdContainer.style.display === "") {
    //         abcdContainer.style.display = "none";
    //     } else {
    //         abcdContainer.style.display = "block";
    //     }
    //     if (cont.style.display === "none" || cont.style.display === "") {
    //         cont.style.display = "none";
    //     } else {
    //         cont.style.display = "block";
    //     }
       
    //     const overflowXValue = elements.style.right === "0px" ? "hidden" : "auto";
    // document.documentElement.style.overflowX = overflowXValue;
    // document.body.style.overflowX = overflowXValue;   
    // }
//     );
// });
// Function to update the overflow property of the body element
