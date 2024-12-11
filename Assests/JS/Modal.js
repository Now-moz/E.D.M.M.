    // Get the modal element
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Show the modal when the page loads
    window.onload = function() {
        modal.style.display = "block";
    }

    // Close the modal when the user clicks on <span> (x)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }