// Get all navbar options
const navOptions = document.querySelectorAll('.navOption li');

// Add click event listener to each navbar option
navOptions.forEach(option => {
    option.addEventListener('click', () => {
        const sectionId = option.querySelector('a').getAttribute('href').substring(1);
        const sections = document.querySelectorAll('.main section');

        // Hide all sections except the one corresponding to the clicked option
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});

// By default, display the 'About' section
document.getElementById('about').style.display = 'block';



// contact form
document.getElementById('contactForm').addEventListener('submit',function (event) {
    event.preventDefault();
    var data = new FormData(event.target);

    fetch("https://formspree.io/f/mrgnygog", {
        method: 'POST',
        body: data,
    }).then(response => {
        if(response.ok){
            alert('Success');
        } else{
            alert('Error');
        }
    });
    document.getElementById
    ('contactForm').reset();
});

