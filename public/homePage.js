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

setInterval(getRatesBoard, 60000);
// операции с деньгами
const userBalance = new MoneyManager;

userBalance.addMoneyCallback = (data) =>{
    return ApiConnector.addMoney(data, response =>{
        if(response.success === true){
            ProfileWidget.showProfile(response.data);
            userBalance.setMessage(response.success, "Баланс пополнен");
        } else {
            userBalance.setMessage(response.success, "Не удалось пополнить банланс");
        }
    });
}

userBalance.conversionMoneyCallback = (data) =>{
    return ApiConnector.convertMoney(data, response =>{
        if(response.success === true){
            ProfileWidget.showProfile(response.data);
            userBalance.setMessage(response.success, "Конветация завершена");
        } else {
            userBalance.setMessage(response.success, "Ошибка конвертации");
        }
    });
}

userBalance.sendMoneyCallback = (data) =>{
    return ApiConnector.transferMoney(data, response =>{
        if(response.success === true){
            ProfileWidget.showProfile(response.data);
            userBalance.setMessage(response.success, "Перевод завершен успешно");
        } else {
            userBalance.setMessage(response.success, "Ошибка транзакции");
        }
    });
}
// работа с избранным
const userFav = new FavoritesWidget;

function getUserFav(){
    return ApiConnector.getFavorites(response =>{
        if(response.success === true){
            userFav.clearTable();
            userFav.fillTable(response.data);
            MoneyManager.updateUserList(response.data);
        }
    });
}

userFav.addUserCallback = data =>{
    return ApiConnector.addUserToFavorites(data, response =>{
        if(response.success === true){
            ProfileWidget.showProfile(response.data);
            userFav.setMessage(response.success, "Добавлено в избранное");
        } else {
            userFav.setMessage(response.success, "Ошибка добавления");
        }
    });
}

userFav.removeUserCallback = data =>{
    return ApiConnector.removeUserFromFavorites(data, response =>{
        if(response.success === true){
            ProfileWidget.showProfile(response.data);
            userFav.setMessage(response.success, "Удалено из избранного");
        } else {
            userFav.setMessage(response.success, "Ошибка удаления");
        }
    });
}