$(document).ready(function(){
	let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onLoad, options);
    let elements = $('.load');
    elements.each((i, el) => {
        observer.observe(el);
    });
});

function onLoad (entry){
    entry.forEach(change => {
        if(change.isIntersecting) {
            change.target.src = change.target.dataset.src;
        }
    });
};