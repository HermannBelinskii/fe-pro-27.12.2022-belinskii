let userDate = +prompt(`Якого ти року народження?`);
let userFrom = prompt(`В якому місті ти живешь?`);
let userSport = prompt (`Яким твій улюблений вид спорту?`);
let userAge;
let famousSportsmen;
let userCity;

// switch (userSport) {
//     case 'Футбол':
//         famousSportsmen = `Твій улюбленний вид спорту - ${userSport} . Круто! Хочешь стати як Ліонель Месси?`
//         break;
//     case 'Бокс':
//         famousSportsmen = `Твій улюбленний вид спорту - ${userSport} . Круто! Хочешь стати як Олександр Усік?`
//         break;
//     case 'Теніс':
//         famousSportsmen = `Твій улюбленний вид спорту - ${userSport} . Круто! Хочешь стати як Джиммі Конорс?`
//         break;
//     case null:
//         famousSportsmen = `Шкода, що ти не захотів ввести свій улюблений вид спорту!`
//         break;
//     default: 
//         famousSportsmen = `Твій улюбленний вид спорту - ${userSport} . Круто!`
// }

if (userSport === 'Футбол') {
    famousSportsmen = `Твій улюбленний вид спорту - ${userSport} . Круто! Хочешь стати як Ліонель Месси?`
} else if (userSport === 'Бокс') {
    famousSportsmen = `Твій улюбленний вид спорту - ${userSport} . Круто! Хочешь стати як Олександр Усік?`
} else if (userSport === 'Теніс') {
    famousSportsmen = `Твій улюбленний вид спорту - ${userSport} . Круто! Хочешь стати як Джиммі Конорс?`
} else if (!userSport) {
    famousSportsmen = `Шкода, що ти не захотів ввести свій улюблений вид спорту!`
} else {
    famousSportsmen =`Твій улюбленний вид спорту - ${userSport} . Круто!`
}

if (userFrom === 'Київ') {
    userCity = `Ти живеш у столиці України!`
} else if (userFrom === 'Вашингтон') {
    userCity = `Ти живеш у столиці USA!`
} else if (userFrom === 'Лондон') {
    userCity = `Ти живеш у столиці Великої Британії!`
} else if (!userFrom) {
    userCity = `Шкода, що ти не захотів ввести своє місто!`
} else {
    userCity =`Ти живеш у місті ${userFrom}!`
}

if (!userDate) {
    userAge = `Шкода, що ти не захотів ввести свій рік народження!`;
} else {
    userAge = `Тобі зараз ${2023 - userDate} років!`;
}

alert (`Привіт! ${userAge} ${userCity} ${famousSportsmen}`)