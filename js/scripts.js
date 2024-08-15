document.addEventListener('DOMContentLoaded', function() {
    const profilePhoto = document.getElementById('profilePhoto');
    const dropdownToggle = document.getElementById('projectsDropdown');
    const dropdownMenu = dropdownToggle.nextElementSibling;
    
    profilePhoto.addEventListener('click', function() {
        this.classList.toggle('clicked-style');
    });

    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        dropdownMenu.classList.toggle('show'); // Toggle the display of the dropdown menu
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});