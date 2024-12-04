// Variables to store the current balance, income, and expense
let balance = 0;
let income = 0;
let expense = 0;

// Get references to DOM elements
const balanceEl = document.getElementById('balance');
const incomeEl = document.getElementById('income');
const expenseEl = document.getElementById('expense');
const transactionList = document.getElementById('transactionList');
const addTransactionBtn = document.getElementById('addTransaction');

// Add transaction event listener
addTransactionBtn.addEventListener('click', () => {
    const desc = document.getElementById('desc').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Validate inputs
    if (!desc || isNaN(amount)) {
        alert('Please enter a valid description and amount!');
        return;
    }

    // Create a new transaction
    const li = document.createElement('li');
    li.innerHTML = `
        ${desc} <span>${amount > 0 ? '+' : ''}₹${amount.toFixed(2)}</span>
    `;
    li.querySelector('span').addEventListener('click', () => {
        // Update balance, income, or expense
        updateBalance(-amount);
        if (amount > 0) income -= amount;
        else expense -= Math.abs(amount);
        updateIncomeExpense();

        // Remove transaction
        transactionList.removeChild(li);
    });

    // Append to transaction history
    transactionList.appendChild(li);

    // Update balance and income/expense
    updateBalance(amount);
    if (amount > 0) income += amount;
    else expense += Math.abs(amount);
    updateIncomeExpense();

    // Reset input fields
    document.getElementById('desc').value = '';
    document.getElementById('amount').value = '';
});

// Update balance
function updateBalance(amount) {
    balance += amount;
    balanceEl.textContent = `₹${balance.toFixed(2)}`;
}

// Update income and expense
function updateIncomeExpense() {
    incomeEl.textContent = `₹${income.toFixed(2)}`;
    expenseEl.textContent = `₹${expense.toFixed(2)}`;
}
