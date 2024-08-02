//calculate THIS
var operand1 = "";
var operator = "";
var operand2 = "";
var pushValue = "";
var result = $(".result")
function calculate(leftOperand, operator, rightOperand, valueBox) {
  var left = Number(leftOperand);
  var right = Number(rightOperand);
  var result;

  switch (operator) {
    case "+":
      result = left + right;
      break;
    case "-":
      result = left - right;
      break;
    case "x":
      result = left * right;
      break;
    case "/":
      result = left / right;
      break;
    case "%":
      result = left % right;
      break;
    default:
      result = "error!!!!!!!";
  }
  
  valueBox.val(result);
}

$(".btn").click(function () {
  var btnValue = $(this).text();
  var valueBox = $("#valueBox");
console.log(btnValue)
  switch (btnValue) {
    case "=":
      operand2 = pushValue;
      pushValue = "";
      calculate(operand1, operator, operand2, valueBox);
      lastline(operand1,btnValue,operand2,result,operator)
      break;
    case "+":
    case "-":
    case "x":
    case "/":
    case "%":
      
      operator = btnValue;
      operand1 = pushValue;
      pushValue = "";
      valueBox.val(pushValue);
      lastline(operand1,btnValue,operand2,result,operator)
    
      break;
    case "C":
      pushValue = '';
      operand1 = '';
      operand2 = '';
      operator = '';
      valueBox.val(pushValue);
      lastline(operand1,btnValue,operand2,result,operator)
      break;
    case "CE":
      pushValue = pushValue.slice(0, -1);
      valueBox.val(pushValue);
      lastline(operand1,btnValue,operand2,result,operator)
      break;
    case "+/-":
      if (pushValue) {
        if (pushValue.startsWith("-")) {
          pushValue = pushValue.slice(1);
        } else {
          pushValue = "-" + pushValue;
        }
        valueBox.val(pushValue);
      }
      break;
    default:
      pushValue += btnValue;
      valueBox.val(pushValue);
      lastline(operand1,btnValue,operand2,result,operator)
  }
});
function lastline(operand1,btnValue,operand2,valueBox,operator){
switch (btnValue) {
  case "+":
    case "-":
      case "x":
    case"/":
    case"%":
valueBox.text(operand1+""+operator)


    break;
    case"=":
  valueBox.text(operand1+""+operator+""+operand2+""+"=")
  

 
    break;
    case"C":
 valueBox.text("cleared")   
    break;
    


  default:
}

}
