function check(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let output = document.getElementById('output');

    if (!name || !email || !password) {
        output.style.color = "red";
        output.textContent = "Please fill out all fields.";
        return false;
    }

    // Display success message
    output.style.color = "green";
    output.innerHTML = `
        <strong>Sign In Successful!</strong>   <br>
        Name: ${name} <br> 
        Email: ${email} <br>
    `;
    return true;
}
