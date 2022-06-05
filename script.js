var income = document.getElementById('income');
var add = document.getElementById('add');
var divHide = document.getElementById('expense');
var expense = document.getElementById('expenseAdd');
var field = document.getElementById('field');
var expensive = document.getElementById('expensive');
var display = document.getElementById('display');


income.onclick = function(){
    document.getElementById("field").style.visibility = "visible";
}

expensive.onclick = function(){
    document.getElementById("expense").style.visibility = "visible";
}


display.onclick = function(){
    document.getElementById("spanResult").style.visibility = "visible";
}


add.addEventListener('click', function(){
    var personIncome = document.getElementById('personIncome').value;
    var personSalary = document.getElementById('personSalary').value;
    // console.log(personIncome  + ', ' + personSalary);
    alert(personIncome  + ', ' +  personSalary);
    var result = personIncome + ', ' + personSalary;
    document.getElementById('spanResult').textContent = result;
})

expense.addEventListener('click', function(){
    var expenseIncome = document.getElementById('personExpense').value;
    var expenseSalary = document.getElementById('expenseMoney').value;
    // console.log(expenseIncome, expenseSalary);
    alert(expenseIncome  + ', ' + expenseSalary);
    var result1 = expenseIncome + ', ' + expenseSalary;
    document.getElementById('spanResult').textContent = result1;
})





