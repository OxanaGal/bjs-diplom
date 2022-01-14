'use strict';

// выход из личного кабинета
const userLogOut = new LogoutButton;

userLogOut.action = () => {
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
const rate = new RatesBoard;

function getRatesBoard(){
    return ApiConnector.getStocks(response =>{
        if(response.success === true){
            rate.clearTable();
            rate.fillTable(response.data);
        }
    });
}

getRatesBoard();

setInterval(getRatesBoard, 6000);
// операции с деньгами
// работа с избранным
