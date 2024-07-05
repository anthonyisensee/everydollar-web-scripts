let amountArray = []
let exceptions = ["Operational Expenses", "Roth IRA"]   // Enter funds that should not be included in the table and total
let total = 0

document.querySelectorAll('.BudgetItemRow:has(.BudgetItemRow-typeIcon)').forEach(row => {

    const name = row.querySelector(".BudgetItem-label").dataset.text
    const amount = parseFloat(row.querySelector(".money--remaining").dataset.text.replace(/[$,]/g, ""))

    if (!exceptions.includes(name)) {

        total = total += amount
        
        amountArray.push({ name: name, amount: amount })

    }

})

amountArray.push({ name: "Total Remaining Funds", amount: total })

console.table(amountArray, ["name", "amount"])
