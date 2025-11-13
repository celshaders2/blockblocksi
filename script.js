function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loginContainer = document.getElementById('login-container');
    const contentContainer = document.getElementById('content-container');

    // Hardcoded credentials for demonstration
    const correctUsernames = 'Blocksee400z' ;
    const correctPassword = 'Jan1000g7';

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        loginContainer.style.display = 'none';
        contentContainer.style.display = 'block';
        errorMessage.textContent = ''; // Clear any previous error
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
}

function logout() {
    const loginContainer = document.getElementById('login-container');
    const contentContainer = document.getElementById('content-container');

    loginContainer.style.display = 'block';
    contentContainer.style.display = 'none';
    document.getElementById('username').value = ''; // Clear inputs on logout
    document.getElementById('password').value = '';
}
