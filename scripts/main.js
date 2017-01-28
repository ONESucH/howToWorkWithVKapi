//85927952 user
//5660660 program
//accessToken = 'f9df78113bb1da2fe574a1850617422584d9bf20278fc75c68199a331b2a7e5b8b3ebb482a6bfe138fd31';

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
    } else if (dataID.length !== 7 && dataID.length !== 8) {
        createInputInBlock.value = 'ID состоит из 7-8 цифр';
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
        userNameAndFamily = 'https://api.vk.com/method/users.get?user_id=' + idUser + '&v=5.52';

    $.ajax({
        url: userNameAndFamily,
        type: 'GET',
        dataType: 'JSONP',
        beforeSend: function () {
            console.log('Отправление данных...');
        },
        success: function (answer) {
            tableUl.innerHTML = '<li>' + 'Id : ' + '<span>' + answer.response[0].id + '</span>' + '</li>' +
                '<li>' + 'Статус : ' + '<span>' + answer.response[0].deactivated + '</span>' + '</li>' +
                '<li>' + 'Id : ' + '<span>' + answer.response[0].id + '</span>' + '</li>';
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