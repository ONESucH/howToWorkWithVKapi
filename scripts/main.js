//31231

var createBlockInContainer = document.createElement('div'),
    mainBlockFullInformation = document.createElement('div'),
    informationUser = document.createElement('div'),
    tableUl = document.createElement('ul'),
    createInputInBlock = document.createElement('input'),
    createTitleInBlock = document.createElement('h1'),
    createTitleInBlockTwo = document.createElement('h2'),
    createButtonInBlock = document.createElement('button');

createBlockInContainer.className = 'main-block';
createButtonInBlock.innerHTML = 'Найти';
createTitleInBlock.innerHTML = 'Добавьте Id пользователя Vk';

$('.container').append(createBlockInContainer);
createBlockInContainer.append(createTitleInBlock, createInputInBlock, createButtonInBlock);

createButtonInBlock.addEventListener('click', function () {
    var dataID = document.getElementsByTagName('input')[0].value;

    if (!Number(dataID)) {
        console.log('В ID не используются буквы');
        createInputInBlock.value = 'Пример: 1112220';
        setTimeout(function () {
            createInputInBlock.value = ''
        }, 2000);
        return false;
    } else if (dataID.length > 10) {
        createInputInBlock.value = 'ID состоит из 0-10 цифр';
        setTimeout(function () {
            createInputInBlock.value = ''
        }, 2000);
        return false;
    } else {
        createUserToken(dataID);
    }
    createInputInBlock.value = '';
});

function createUserToken(dataID) {
    var idUser = dataID,
        userNameAndFamily = 'https://api.vk.com/method/users.get?user_ids=' + idUser + '&fields=bdate&v=5.62';

    $.ajax({
        url: userNameAndFamily,
        type: 'GET',
        dataType: 'JSONP',
        beforeSend: function () {
            console.log('Отправление данных...');
        },
        success: function (answer) {
            tableUl.innerHTML = '<li>' + 'Id : ' + '<span>' + answer.response[0].id + '</span>' + '</li>' +
                '<li>' + 'Дата регистрации : ' + '<span>' + answer.response[0].bdate + '</span>' + '</li>' +
                '<li>' + 'Статус : ' + '<span>' + answer.response[0].deactivated + '</span>' + '</li>' +
                '<li>' + 'Скрытность : ' + '<span>' + answer.response[0].hidden + '</span>' + '</li>';
            createTitleInBlockTwo.innerHTML = answer.response[0].last_name + '  ' + answer.response[0].first_name;
            console.log('Данные получены: ');
        },
        error: function (answer) {
            console.log('Ошибка при получении данных: ', answer);
        }
    });

    mainBlockFullInformation.className = 'information-block';
    informationUser.className = 'imageUser';

    informationUser.append(createTitleInBlockTwo);
    mainBlockFullInformation.append(informationUser, tableUl);
    $('.container').append(mainBlockFullInformation);

    console.log(userNameAndFamily);
}