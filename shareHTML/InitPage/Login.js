window.onload = function () {
    const loginsec = document.querySelector('.login-section')
    const loginlink = document.querySelector('.login-link')
    const registerlink = document.querySelector('.register-link')

    registerlink.addEventListener('click', () => {  // 切换到注册界面
        loginsec.classList.add('active')
    })

    loginlink.addEventListener('click', () => {  // 切换到登录界面
        loginsec.classList.remove('active')
    })
}