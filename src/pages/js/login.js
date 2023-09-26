const btnShowPwd = document.getElementById('btn-eye-icon')
const inputPWd = document.getElementById('input-password')

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