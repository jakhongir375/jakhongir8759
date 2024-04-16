let btn = document.querySelector('#btn');

const randomPassword = () => {
  let displayPassword = document.querySelector('#displayPassword');
  let passwordLength = +document.querySelector('#passwordLength').value;
  let password = '';
  let characters =
    'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_+=-~`<>;:,/|"';

  if (passwordLength === 0) {
    error.innerHTML = 'Please select password length';
    error.style.color = 'red';
  }

  for (let i = 0; i < passwordLength; i++) {
    password =
      password + characters[Math.floor(Math.random() * characters.length)];
  }

  displayPassword.value = password;
};

btn.addEventListener('click', () => randomPassword());
