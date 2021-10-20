
function translateKinDzaDza (LANG) {
switch (LANG) {
    case 'EN':
    LANG = 'en_US.UTF-8' 
    console.log('The Pacak must do ku twice')
    break

    case 'UK': 
    LANG = 'uk_UA.UTF-8'
    console.log('Пацак повинен робити ку два рази')
    break

    case 'DE':
    LANG = 'de_DE.utf8'
    console.log('Das Pazak muss ku zweimal machen')
    break

    default:
    LANG = 'ru_RU.UTF-8'
    console.log('Пацак должен делать ку два раза')
    break
}
}
translateKinDzaDza (process.env.LANG)