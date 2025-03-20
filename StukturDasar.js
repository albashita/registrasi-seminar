document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const submitButton = document.getElementById('submitButton');
    const addPageButton = document.getElementById('addPageButton');

    form.addEventListener('input', function() {
        let isValid = true;

        const fullName = document.getElementById('fullName').value;
        if (fullName.length < 3) {
            document.getElementById('fullNameError').textContent = 'Nama lengkap minimal 3 karakter';
            isValid = false;
        } else {
            document.getElementById('fullNameError').textContent = '';
        }

        const email = document.getElementById('email').value;
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            document.getElementById('emailError').textContent = 'Format email tidak valid';
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        const password = document.getElementById('password').value;
        if (password.length < 8) {
            document.getElementById('passwordError').textContent = 'Password minimal 8 karakter';
            isValid = false;
        } else {
            document.getElementById('passwordError').textContent = '';
        }

        const confirmPassword = document.getElementById('confirmPassword').value;
        if (confirmPassword !== password) {
            document.getElementById('confirmPasswordError').textContent = 'Password tidak sama';
            isValid = false;
        } else {
            document.getElementById('confirmPasswordError').textContent = '';
        }

        const dob = document.getElementById('dob').value;
        if (new Date(dob) > new Date('2006-12-31')) {
            document.getElementById('dobError').textContent = 'Tanggal lahir tidak boleh lebih dari 2006';
            isValid = false;
        } else {
            document.getElementById('dobError').textContent = '';
        }

        const phone = document.getElementById('phone').value;
        if (!phone.match(/^\+62\d{9,12}$/)) {
            document.getElementById('phoneError').textContent = 'Menggunakan format +62xxx';
            isValid = false;
        } else {
            document.getElementById('phoneError').textContent = '';
        }

        submitButton.disabled = !isValid;
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form berhasil disubmit!');
        form.reset();
        submitButton.disabled = true;
    });

    addPageButton.addEventListener('click', function() {
        alert('Tombol Tambah Halaman diklik!');
    });
});