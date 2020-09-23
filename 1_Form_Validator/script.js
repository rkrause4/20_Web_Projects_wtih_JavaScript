const username = document.querySelector('#username'),
  formSubmitBtn = document.querySelector('#formSubmitBtn');

// username.addEventListener('keydown', e => console.log(e.value));

const validateForm = e => {
  console.log(username.value.trim());

  //   e.preventDefault();
};

const formSubmit = e => {
  e.preventDefault();

  validateForm(e);
};

formSubmitBtn.addEventListener('click', formSubmit);
// username.addEventListener('keyup', validateForm);
