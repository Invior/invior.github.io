"use strict"

//----------------------------------------------------------------------------------------------------------------
let typeSite = [
	"Сайт-визитка",
	"Интернет-магазин",
	"Новостной сайт",
];

let siteDesign = [
	"Шаблонный",
	"Уникальный",
	"Не такой как у Всех",
];

let siteAdaptive = [
	"Только под ПК",
	"Только под мобильные устройства",
	"Полностью адаптивный",
];

let typeCount = [
	4000,
	15000,
	10000,
];

let designCount = [
	2000,
	6000,
	20000,
];

let adaptiveCount = [
	1000,
	3000,
	8000,
];


let termSite = [
	5,
	21,
	14,
];

let termDesign = [
	0,
	10,
	30,
];

let termAdaptive = [
	1,
	3,
	7,
];
//----------------------------------------------------------------------------------------------------------------

let site;
let count;
let desite;
let decount;
let adsite;
let adcount;
let term;
let determ;
let adterm;
//-----------------------------------------------------------------------------------------------------------------
	
	if (confirm("Добро пожаловать! Ответьте на несколько вопросов")) {
	let type = prompt("Какой тип сайта Вам нужен? \n 1. Сайт-визитка \n 2. Интернет-магазин \n 3. Новостной сайт");
		if (type == 1) {
			site = typeSite[0]
			count = typeCount[0]
			term = termSite[0]
			console.log(site);
			console.log(count);
			console.log(term);
		} else if (type == 2) {
			site = typeSite[1]
			count = typeCount[1]
			term = termSite[1]
			console.log(site);
			console.log(count);
			console.log(term);
		} else if (type == 3) {
			site = typeSite[2]
			count = typeCount[2]
			term = termSite[2]
			console.log(site);
			console.log(count);
			console.log(term);
		}
		else {
			alert("Введено неверное значение!")
		};

//--------------------------------------------------------------------------------------------------------------------

	let design = prompt("Какой вариант дизайна (выберите цифру):\n 1. Шаблонный \n 2. Уникальный \n 3. Не такой как у Всех");
		if (design == 1) {
			desite = siteDesign[0]
			decount = designCount[0]
			determ = termDesign[0]
			console.log(desite);
			console.log(decount);
			console.log(determ);
		} else if (design == 2) {
			desite = siteDesign[1]
			decount = designCount[1]
			determ = termDesign[1]
			console.log(desite);
			console.log(decount);
			console.log(determ);
		} else if (design == 3) {
			desite = siteDesign[2]
			decount = designCount[2]
			determ = termDesign[2]
			console.log(desite);
			console.log(decount);
			console.log(determ);
		}
		else {
			alert("Введено неверное значение!")
		};

//----------------------------------------------------------------------------------------------------------------------

	let adaptive = prompt("Требуется ли адаптивность? \n 1. Только под ПК \n 2. Только под мобильные устройства \n 3. Полностью адаптивный");
		if (adaptive == 1) {
			adsite = siteAdaptive[0]
			adcount = adaptiveCount[0]
			adterm = termAdaptive[0]
			console.log(adsite);
			console.log(adcount);
			console.log(adterm);
		} else if (adaptive == 2) {
			adsite = siteAdaptive[1]
			adcount = adaptiveCount[1]
			adterm = termAdaptive[1]
			console.log(adsite);
			console.log(adcount);
			console.log(adterm);
		} else if (adaptive == 3) {
			adsite = siteAdaptive[2]
			adcount = adaptiveCount[2]
			adterm = termAdaptive[2]
			console.log(adsite);
			console.log(adcount);
			console.log(adterm);
		}
		else {
			alert("Введено неверное значение!");
		}; 

		let allCount = count + decount + adcount;
		let allTerm = term + determ + adterm;
		if (confirm("Вы выбрали: \n" + "Тип сайта: " + site + "\nДизайн: " + desite + "\nАдаптивность: " + 
			adsite + "\nОбщая стоимость разработки: " + allCount + " руб." + "\nОбщий срок разработки: " + allTerm + " дней.\nСформировать заявку?")) {
			alert("Заявка сформирована.");
		} else { alert("Очень жаль :(")
		};

} else {
	alert("Хорошего дня!");
};
//-----------------------------------------------------------------------------------------------------------------------





//-----------------------------------------------------------------------------------------------------------------------