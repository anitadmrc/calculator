const display = document.getElementById("display");
function append(input){
    display.value +=input;
}
function clear(){
    display.value = "";
}
function calculate(){
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "";
    }
}
document.getElementById("keys").addEventListener("click", function(e) {
    if(e.target.textContent === "C") {
      clear();
    } 
  });