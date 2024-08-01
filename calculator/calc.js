//calculate THIS
var operand1 = "";
var operator = "";
var pushValue = "";


function calculate(leftOperand, operator, rightOperand, valueBox) {
  var left = Number(leftOperand)
  var right = Number(rightOperand)
debugger
  if (operator === "+") {
    var result = left   + right;
    
    valueBox.val(result);
  } else {
    if (operator === "-") {
      var result = left - right;
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
      var operand2 = pushValue.slice(1, pushValue.length);
      pushValue = "";
      debugger
      calculate(operand1, operator, operand2, valueBox);
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
    case "*":
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
      break;
    default:
      //pushValue.push(btnValue)
      pushValue = pushValue+btnValue;
      valueBox.val(pushValue);
  }
});
