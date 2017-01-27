//85927952 user
//5660660 program
//accessToken = 'f9df78113bb1da2fe574a1850617422584d9bf20278fc75c68199a331b2a7e5b8b3ebb482a6bfe138fd31';

var createBlockInContainer = document.createElement('div'),
    createInputInBlock = document.createElement('input'),
    createTitleInBlock = document.createElement('h1'),
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
        mainBlockFullInformation = document.createElement('div'),
        informationUser = document.createElement('div'),
        userNameAndFamily = 'https://api.vk.com/method/users.get?user_id='+idUser+'&v=5.52';

    mainBlockFullInformation.className = 'information-block';


    $('.container').append(mainBlockFullInformation);
    mainBlockFullInformation.append(informationUser);

    console.log(userNameAndFamily);
    console.log(idUser, '<--');
}