document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const jobType = document.getElementById('jobType').value;
    const skills = Array.from(document.querySelectorAll('.skill:checked')).map(skill => skill.value);
    const workEnvironment = document.querySelector('input[name="workEnvironment"]:checked').value;

    // Create a confirmation message
    const confirmationText = `
        Thank you for submitting your information!
        <br>Name: ${name}
        <br>Email: ${email}
        <br>Phone: ${phone}
        <br>Experience: ${experience}
        <br>Preferred Job Type: ${jobType}
        <br>Skills: ${skills.join(', ') || 'None'}
        <br>Preferred Work Environment: ${workEnvironment}
    `;

    // Show confirmation message
    document.getElementById('confirmationText').innerHTML = confirmationText;
    document.getElementById('confirmationMessage').classList.remove('hidden');

    // Display alert box
    alert("Your information has been submitted successfully!");

    // Optional prompt box for additional feedback
    const feedback = prompt("Please provide any additional feedback:");
    if (feedback) {
        console.log("User feedback:", feedback);
    }
});