languageLang = process.env.LANG

function translateKinDzaDza () {
switch (languageLang) {
    case 'EN':
    console.log('The Pacak must do ku twice')
    break

    case 'UK': 
    console.log('Пацак повинен робити ку два рази')
    break

    case 'DE':
    console.log('Das Pazak muss ku zweimal machen')
    break

    default:
    console.log('Пацак должен делать ку два раза')
    break
}
}
translateKinDzaDza (process.env.LANG)
