var income = document.getElementById('income');
var add = document.getElementById('add');
var divHide = document.getElementById('expense');
var expense = document.getElementById('expenseAdd');
var field = document.getElementById('field');


add.addEventListener('click', function(){
    var personIncome = document.getElementById('personIncome').value;
    var personSalary = document.getElementById('personSalary').value;
    console.log(personIncome  + ', ' + personSalary);
    alert(personIncome , '+',  personSalary);
})

expense.addEventListener('click', function(){
    var expenseIncome = document.getElementById('personExpense').value;
    var expenseSalary = document.getElementById('expenseMoney').value;
    console.log(expenseIncome, expenseSalary);
    alert(expenseIncome, expenseSalary);
})

var para = document.getElementById('para');
display.addEventListener('click', function(){
    para.innerHTML = personIncome;
})





