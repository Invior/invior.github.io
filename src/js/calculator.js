$(function(){
/*-------------------------------------------------*/
	let count = 0;
	let decount = 0;
	let term = 0;
	let determ = 0;
	let adcount = 0;
	let adterm = 0;
    let allCount = 0;
    let allTerm = 0;
/*-------------------------------------------------*/
	let typeCount = [
	3000,
	20000,
	40000,
	25000,
	10000,
	10000,
	16000,
	19000,
	7000,
	12000,
	11000,
];

	let termSite = [
	3,
	5,
	7,
	4,
	10,
	40,
	23,
	25,
	65,
	82,
	22,
];

let designCount = [
	3000,
	20000,
	25000,
	10000,
	19000,	
];

let termDesign = [
	0,
	10,
	30,
	15,
	22,
];

let adaptiveCount = [
	1000,
	3000,
	8000,
	10000,
	2000,
	6000,
];

let termAdaptive = [
	1,
	3,
	7,
	4,
	11,
];
/*-------------------------------------------------*/
$(function(){


    $("#typeSite").change(function(){
    if($(this).val() == 0) return false;
    let type = ($(this).val());

    if(type == 1){
    	count = typeCount[0];
    	term = termSite[0];
    	console.log(count);
    	console.log(term);
    }
    else if(type == 2){
    	count = typeCount[1];
    	term = termSite[1];
    	console.log(count);
    	console.log(term);
    }
    else if(type == 3){
    	count = typeCount[2];
    	term = termSite[2];
    	console.log(count);
    	console.log(term);
    }
    else if(type == 4){
    	count = typeCount[3];
    	term = termSite[3];
    	console.log(count);
    	console.log(term);
    }
    else if(type == 5){
    	count = typeCount[4];
    	term = termSite[4];
    	console.log(count);
    	console.log(term);
    }
    else if(type == 6){
    	count = typeCount[5];
    	term = termSite[5];
    	console.log(count);
    	console.log(term);
    }
    else if(type == 7){
    	count = typeCount[6];
    	term = termSite[6];
    	console.log(count);
    	console.log(term);
    }
    else if(type == 8){
    	count = typeCount[7];
    	term = termSite[7];
    	console.log(count);
    	console.log(term);
    }
    else if(type == 9){
    	count = typeCount[8];
    	term = termSite[8];
    	console.log(count);
    	console.log(term);
    }
    else if(type == 10){
    	count = typeCount[9];
    	term = termSite[9];
    	console.log(count);
    	console.log(term);
    }
    else if(type == 11){
    	count = typeCount[10];
    	term = termSite[10];
    	console.log(count);
    	console.log(term);
    }
    else {
    	type = false;
    }

    let allCount = count + decount + adcount;
    let allTerm = term + determ + adterm;
   	$(".cost").text(allCount);
   	$(".term").text(allTerm);
    
	});
/*-------------------------------------------------*/
	
	$("#designSite").change(function(){
    if($(this).val() == 0) return false;
    let type = ($(this).val());

    if(type == 1){
    	decount = designCount[0];
    	determ = termDesign[0];
    	console.log(decount)
    	console.log(determ)

    }
    else if(type == 2){
    	decount = designCount[1];
    	determ = termDesign[1];
        console.log(decount)
        console.log(determ)
    }
    else if(type == 3){
    	decount = designCount[2];
    	determ = termDesign[2];
    	$(".term").text(term);
    	$(".cost").text(count);
        console.log(decount)
        console.log(determ)
    }
    else if(type == 4){
    	decount = designCount[3];
    	determ = termDesign[3];
        console.log(decount)
        console.log(determ)
    }
    else if(type == 5){
    	decount = designCount[4];
    	determ = termDesign[4];
        console.log(decount)
        console.log(determ)
    }

    else {
    	type = false;
    }
     
    let allCount = count + decount + adcount;
    let allTerm = term + determ + adterm;
   	$(".cost").text(allCount);
   	$(".term").text(allTerm);

	});

/*-------------------------------------------------*/

	$("#adaptiveSite").change(function(){
    if($(this).val() == 0) return false;
    let type = ($(this).val());

    if(type == 1){
    	adcount = adaptiveCount[0];
    	adterm = termAdaptive[0];
    	console.log(adcount)
    	console.log(adterm)

    }
    else if(type == 2){
    	adcount = adaptiveCount[1];
    	adterm = termAdaptive[1];
    	console.log(adcount)
    	console.log(adterm)
    }
    else if(type == 3){
    	adcount = adaptiveCount[2];
    	adterm = termAdaptive[2];
    	console.log(adcount)
    	console.log(adterm)
    }
    else if(type == 4){
    	adcount = adaptiveCount[3];
    	adterm = termAdaptive[3];
    	console.log(adcount)
    	console.log(adterm)
    }
    else if(type == 5){
    	adcount = adaptiveCount[4];
    	adterm = termAdaptive[4];
    	console.log(adcount)
    	console.log(adterm)
    }
     else if(type == 6){
    	adcount = adaptiveCount[5];
    	adterm = termAdaptive[5];
    	console.log(adcount)
    	console.log(adterm)
    }

    else {
    	type = false;
    }
     
    let allCount = count + decount + adcount;
    let allTerm = term + determ + adterm;
   	$(".cost").text(allCount);
   	$(".term").text(allTerm);

	});

     
});

});