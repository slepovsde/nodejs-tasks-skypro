const fs = require('fs');

fs.readFile('lastRunTime.json', 'utf8', function (error, data) {
  if (!data) {
    const newJson = {
      lastRunTime: Date.now(),
    };
    let json = JSON.stringify(newJson);
    
    fs.writeFile('lastRunTime.json', json, 'utf8', (err) => {
      console.log('Окей, ты меня запустил. Ты доволен?');
      if (err) {
        console.log(err);
      }
    });
  } else {
    const dataTime = JSON.parse(data);
    
    const currentTime = Date.now();
    console.log(`Ну ты же уже запускал меня ${(currentTime - dataTime.lastRunTime) / 1000} секунд тому назад`);
    dataTime.lastRunTime = currentTime;
    let json = JSON.stringify(dataTime);
    fs.writeFile('lastRunTime.json', json, 'utf8', (err) => {
      if (err) {
        console.log(err);
      }
    });
    
  }
});
