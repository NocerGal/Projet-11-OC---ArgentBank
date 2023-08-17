function signInError() {
  const errorContainer = document.createElement('div');
  const errorMessage = document.createElement('span');
  const secondInputWrapper = document.querySelector(
    '.input-wrapper:nth-child(2)'
  );

  errorContainer.classList = 'error-container';
  errorMessage.innerText = 'Votre email ou mot de passe est incorrect';

  errorContainer.appendChild(errorMessage);

  secondInputWrapper.after(errorContainer);
}
export default signInError;
