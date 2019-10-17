// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it

// Get the modal
var modal2 = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}