document.getElementById('login-btn').addEventListener('click', function () {
    const inputEmail = document.getElementById('email');
    const inputEmailText = inputEmail.value;
    
    const inputPass = document.getElementById('password');
    const inputPassText = inputPass.value;

    if (inputEmailText == 'sontan@baap.com' && inputPassText == 'secret') {
        window.location.href = 'bank.html';
    }
})