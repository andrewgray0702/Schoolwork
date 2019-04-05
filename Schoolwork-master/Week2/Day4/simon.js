var pattern=[];
var buttons = document.querySelectorAll(".buttons"); // QUERY ALL BUTTONS
buttons.forEach(function(val, index){ // ADD EVENT LISTENER
    val.addEventListener('click', function(){
    })
})
function rndGenerator(){ // GENERATE RANDOM COLOR
    return Math.floor(Math.random()* 4);
    
}
var rndNumber = buttons[rndGenerator()];
function simonActive(){
    var index = rndGenerator();
    buttons[index].classList.add("active");
    pattern.push(index);
}
