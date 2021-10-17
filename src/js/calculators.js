$(function(){

let type;
let count;
let term;

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

/*-------------------------------------------------*/

$("#typeSite").change(function(){
    if($(this).val() == 0) return false;
    type = ($(this).val());
});

/*-------------------------------------------------*/

$("#designSite").change(function(){
	if($(this).val() == 0) return false;
	type = ($(this).val());
});

/*-------------------------------------------------*/

if(type == 1){
    	count = typeCount[0];
    	term = termSite[0];
    	$(".term").text(term);
    	$(".cost").text(count);
    }
    else if(type == 2){
    	count = typeCount[1];
    	term = termSite[1];
    	$(".term").text(term);
    	$(".cost").text(count);
    }
    else if(type == 3){
    	count = typeCount[2];
    	term = termSite[2];
    	$(".term").text(term);
    	$(".cost").text(count);
    }
    else if(type == 4){
    	count = typeCount[3];
    	term = termSite[3];
    	$(".term").text(term);
    	$(".cost").text(count);
    }
    else if(type == 5){
    	count = typeCount[4];
    	term = termSite[4];
    	$(".term").text(term);
    	$(".cost").text(count);
    }
    else if(type == 6){
    	count = typeCount[5];
    	term = termSite[5];
    	$(".term").text(term);
    	$(".cost").text(count);
    }
    else if(type == 7){
    	count = typeCount[6];
    	term = termSite[6];
    	$(".term").text(term);
    	$(".cost").text(count);
    }
    else if(type == 8){
    	count = typeCount[7];
    	term = termSite[7];
    	$(".term").text(term);
    	$(".cost").text(count);
    }
    else if(type == 9){
    	count = typeCount[8];
    	term = termSite[8];
    	$(".term").text(term);
    	$(".cost").text(count);
    }
    else if(type == 10){
    	count = typeCount[9];
    	term = termSite[9];
    	$(".term").text(term);
    	$(".cost").text(count);
    }
    else if(type == 11){
    	count = typeCount[10];
    	term = termSite[10];
    	$(".term").text(term);
    	$(".cost").text(count);
    }
    else {
    	type = false;
    };

});