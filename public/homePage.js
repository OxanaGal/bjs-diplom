'use strict';

// выход из личного кабинета
const userLogOut = new LogoutButton;

userLogOut.action = (data) => {
    return ApiConnector.logout(response =>{
        if(response.success === true){
            location.reload();
        }
    });
}
// получение информации о пользователе
ApiConnector.current(response =>{
    if(response.success === true){
        ProfileWidget.showProfile(response.data);
    }
})

// получение текущиз курсов валют
// операции с деньгами
// работа с избранным
