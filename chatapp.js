//Chatapp App variable intialization with Jquery
$(() => {
  const userName = $(`#user-name`);
  const userNameLabel = $(`#name-label`);
  const userEmail = $(`#user-email`);
  const userPassword = $(`#user-password`);
  const loginButton = $(`#login-button`);
  const ORLabel = $(`#or-label`);
  const registerButton = $(`#register-button`);
  const createAccountButton = $(`#create-account-button`);

  //initial setup values for login page
  userName.hide();
  userNameLabel.hide();
  registerButton.hide();

  //initiate register page
  let convertToRegisterForm = () => {
    createAccountButton.on("click", () => {
      userNameLabel.show();
      userName.show();
      registerButton.show();
      loginButton.hide();
      ORLabel.hide();
      createAccountButton.hide();
    });
  };

  convertToRegisterForm();

  //end of wdocument.ready()
});
