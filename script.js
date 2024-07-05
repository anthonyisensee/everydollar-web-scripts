let total = 0
let amountArray = []

document.querySelectorAll('.BudgetItemRow:has(.BudgetItemRow-typeIcon)').forEach(row => {

    const name = row.querySelector(".BudgetItem-label").dataset.text
    const amount = parseFloat(row.querySelector(".money--remaining").dataset.text.replace(/[$,]/g, ""))

    amountArray.push({ name: name, amount: amount })

})

console.log(amountArray)