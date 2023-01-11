let userDate = +prompt(`Якого ти року народження?`);
let userAge;

if (userDate) {
    userAge = `Тобі зараз ${2023 - userDate} років!`;
    alert (userAge)
} else {
    alert (`Шкода, що ти не захотів ввести свій рік народження!`)
} 

let userFrom = prompt(`В якому місті ти живешь?`);
let userCity;

if (userFrom === 'Київ') {
    userCity = `Ти живеш у столиці України!`;
    alert (userCity);
} else if (userFrom === 'Вашингтон') {
    userCity = `Ти живеш у столиці USA!`;
    alert (userCity);
} else if (userFrom === 'Лондон') {
    userCity = `Ти живеш у столиці Великої Британії!`;
    alert (userCity);
} else if (!userFrom) {
    alert (`Шкода, що ти не захотів ввести своє місто!`);
} else {
    userCity =`Ти живеш у місті ${userFrom}!`;
    alert (userCity);
}

let userSport = prompt (`Яким твій улюблений вид спорту?`);
let famousSportsmen;

if (userSport === 'Футбол') {
    famousSportsmen = `Круто! Хочешь стати як Ліонель Месси?`;
    alert (famousSportsmen);
} else if (userSport === 'Бокс') {
    famousSportsmen = `Круто! Хочешь стати як Олександр Усік?`;
    alert (famousSportsmen);
} else if (userSport === 'Теніс') {
    famousSportsmen = `Круто! Хочешь стати як Джиммі Конорс?`;
    alert (famousSportsmen);
} else if (!userSport) {
    alert (`Шкода, що ти не захотів ввести свій улюблений вид спорту!`);
} else {
    famousSportsmen =`Твій улюбленний вид спорту - ${userSport} . Круто!`;
    alert (famousSportsmen);
}