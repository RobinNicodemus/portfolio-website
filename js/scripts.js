(function() {
  var $form = document.querySelector('#contact-form');
  var $emailInput = document.querySelector('#emailbox');
  var $phoneInput = document.querySelector('#phonebox');

  function validateEmail() {
    var value = $emailInput.value;

    // case: empty
    if (!value) {
      showErrorMessage($emailInput, 'E-mail is a required field.');
      return false;
    }

    //case: no "@"
    if (value.indexOf('@') === -1 || value.indexOf('.') === -1) {
      showErrorMessage($emailInput, 'Not quite there yet.');
      return false;
    }

    showErrorMessage($emailInput, null);
    return true;
  }

  function validatePhone() {
    var value = $phoneInput.value;

    if (!value) {
      showErrorMessage($phoneInput, 'Please leave a number.');
      return false;
    }

    showErrorMessage($phoneInput, null);
    return true;
  }

  function showErrorMessage($inputElement, message) {
    var $container = $inputElement.parentElement;

    //remove existing error
    var error = $container.querySelector('.error-message');
    if (error) {
      $container.removeChild(error);
    }

    // if the message is not empty
    if (message) {
      var error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      $container.appendChild(error);
    }
  }

  function validatePassword() {
    var value = $passwordInput.value;

    if (!value) {
      showErrorMessage($passwordInput, 'Password is a required field.');
      return false;
    }

    if (value.length < 8) {
      showErrorMessage($passwordInput, 'The password needs to be at least 8 characters long.');
      return false;
    }

    showErrorMessage($passwordInput, null);
    return true;
  }

  function validateForm() {
    var isValidEmail = validateEmail();
    var isValidNumber = validatePhone();
    return isValidEmail && isValidNumber;
  }

  //once the form is submitting to somewhere the following will be handy:
  $form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      console.log('Test: Success!');
    }
  });

  $emailInput.addEventListener('input', validateEmail);
  $phoneInput.addEventListener('input', validatePhone);
})();
