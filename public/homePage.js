'use strict';

// выход из личного кабинета
const userLogOut = new LogoutButton;

userLogOut.action = (data) => {
    return ApiConnector.logout(response =>{
        if(responce.success === true){
            location.reload();
        }
    });
}
// получение информации о пользователе
ApiConnector.current

// получение текущиз курсов валют
// операции с деньгами
// работа с избранным
