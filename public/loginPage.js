'use strict';

const user = new UserForm;

user.loginFormCallback = (data) => {
    return ApiConnector.login(data, response => {
        console.log(data);
        if(response.success === true){
            location.reload();
        } else {
            user.setLoginErrorMessage("Логин или пароль введены неверно");
        }
    });
}

user.registerFormCallback = (data) =>{
    return ApiConnector.register(data, response =>{
        console.log(data);
        if(response.success === true){
            location.reload();
        } else {
            user.setRegisterErrorMessage("Регистрация не удалась");
        }
    });
}