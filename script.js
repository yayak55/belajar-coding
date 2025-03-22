const API_URL = "http://127.0.0.1:5000";  // Ganti dengan URL backend jika sudah di-deploy

function register() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('status').innerText = data.message;
    });
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            document.getElementById('status').innerText = "Login berhasil!";
        } else {
            document.getElementById('status').innerText = "Login gagal!";
        }
    });
}