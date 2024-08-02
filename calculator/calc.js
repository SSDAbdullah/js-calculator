//calculate THIS
var operand1 = "";
var operator = "";
var operand2=""
var pushValue = "";


function calculate(leftOperand, operator, rightOperand, valueBox) { 
  var left = Number(leftOperand)
  var right = Number(rightOperand)

  if (operator === "+") {
    var result = left   + right;
    valueBox.val(result);
  } else {
    if (operator === "-") {
      var result = left-right
      valueBox.val(result);
    } else {
      if (operator === "*") {
        var result = left * right;
        valueBox.val(result);
      } else {
        if (operator === "/") {
          var result = left / right;
          valueBox.val(result);
        } else {
          if (operator === "%") {
            var result = left % right;
            valueBox.val(result);
          } else {
            valueBox.val("error!!!!!!!");
          }
        }
       
      }
    }
  }
}




$(".btn").click(function () {
  var btnValue = $(this).text();
  var valueBox = $("#valueBox");

  
  switch (btnValue) {
    case "=":
     operand2 = pushValue.slice(1, pushValue.length);
      pushValue = "";
      calculate(operand1,operator,operand2,valueBox) 
      
      break;
    case "/":
      operator = "/";
      operand1 = pushValue;
      pushValue = "";
      pushValue = pushValue.concat(btnValue);
      valueBox.val(pushValue);
      break;

    case "+":
      operator = "+";
      operand1 = pushValue;
      pushValue = "";
      pushValue = pushValue.concat(btnValue);
      valueBox.val(pushValue);

      break;
    case "*":debugger
      operator = "*";
      operand1 = pushValue;
      pushValue = "";
      pushValue = pushValue.concat(btnValue);
      valueBox.val(pushValue);
      break;
    case "-":
      operator = "-";
      operand1 = pushValue;
      pushValue = "";
      pushValue = pushValue.concat(btnValue);
      valueBox.val(pushValue);
    
    case "%":
      operator = "%";
      operand1 = pushValue;
      pushValue = "";
      pushValue = pushValue.concat(btnValue);
      valueBox.val(pushValue);
      case"C":
      pushValue = ''
      valueBox.val(pushValue);
      operand1 = ''
      operand2=''
      operator=''
      break;
      case"CE":
  var othing=valueBox.val() 
 var fetch= othing.length - 1 
 var input= othing.slice(0,fetch)
 pushValue=input
  valueBox.val(input) 
      break;
      case"+/-":
      randomButton(pushValue,valueBox)
      break;
    default:
    
      pushValue = pushValue+btnValue;
      valueBox.val(pushValue);
  }
});
function randomButton(value,input){
  if (value == value) {
 value = -value
  input.val(value)
  } else if(value == -value) {
    
    input.val( value.slice(1,value.length))
  }

}