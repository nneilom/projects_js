
//Поле в котором все выводится
let input = document.querySelector('.input');
let power = "";

//Вставить символ
function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
}
//очищение поля
function clean (){
    input.textContent = "0";
    power = "";
}
function back (){
  let exp = input.textContent;
  input.textContent = exp.substring(0,exp.length - 1);
  if (input.textContent == 0){
    input.textContent = "0"
  };
}

function equal() {
    let exp = input.textContent;
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = eval(power);
        let pow = +tmp[1]
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if (exp) {
        input.textContent = eval(exp);
    }
}

function percent(){
    input.textContent = eval(input.textContent)/100;
}

//корень 
function operation (name){
    if (name == "sqrt")
         input.textContent = Math.sqrt(eval(input.textContent));
    if (name == "sqr")
         input.textContent = Math.pow(eval(input.textContent), 2);
    if (name == "^-1")
         input.textContent = Math.pow(eval(input.textContent), -1);
    if (name == "^"){
    let tmp = input.textContent;
    input.textContent += "^";
    }
}

