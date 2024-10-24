function generatePassword() {
    const length = document.getElementById('length').value;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';
    if(length<0){
        alert('Provide valid  Password length').style.color="red";
    }
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('passwordDisplay').innerText = password;
}
