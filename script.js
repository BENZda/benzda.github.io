document.addEventListener('DOMContentLoaded', function () {
    const eclaireLink = document.getElementById('eclaire');

    if (eclaireLink) {
        eclaireLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'about.html'; // Replace with the actual URL of your "About Me" page
        });
    }
});
