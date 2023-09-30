const btnShowPwd = document.getElementById('btn-eye-icon')
const inputPWd = document.getElementById('input-password')
const btnLogin = document.getElementById('btn-login')

let pwdIShow = false
btnShowPwd.addEventListener('click', e => {
    e.preventDefault()
    if (pwdIShow){
        e.target.src = '../assets/icons/icon_eye_slash.png'
        inputPWd.type = 'password'
    } else {
        e.target.src = '../assets/icons/icon_eye_open.svg'
        inputPWd.type = 'text'
    }
    console.log();
    pwdIShow = !pwdIShow
})

btnLogin.addEventListener('click', e => {
    e.preventDefault()

    window.location.replace('../pages/home.html')
})