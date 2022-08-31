function valuebuton(e){
  calculatorform.screen.value +=e.value;  
}
function removeValue(data){
    console.log( calculatorform.screen.value,data);
    calculatorform.screen.value = null;  
}
function calculate(){
    calculatorform.screen.value =eval( calculatorform.screen.value );
}    