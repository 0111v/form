const password = document.querySelector('.js-password')
const confirmPassword = document.querySelector('.js-confirm-password')
const warning = document.querySelector('.span-warning')

password.addEventListener('blur', () => {
  if (password.value !== confirmPassword.value) {
    warning.innerHTML = 'password do not match'
  }

  else {
    warning.innerHTML = ''
  }
})

confirmPassword.addEventListener('blur', () => {
  if (password.value !== confirmPassword.value) {
    warning.innerHTML = 'password do not match'
  }

  else {
    warning.innerHTML = ''
  }
})


