// Main function
function calculate() {
    // Getting the gross pay from the input field
    const grossPay = document.getElementById('basicSalary').value
    // Calling the function to calculate nssf
    const nssf = calculateNSSF(grossPay)
    // Displaying the result in the nssf input field
    document.querySelector('#nssf').value = nssf
    // Calling the function to calculate nhif
    const nhif = calculateNHIF(grossPay)
    // Displaying the result in the nhif input field
    document.querySelector('#nhif').value = nhif
    // Displaying personal relief in the personal relief input field
    document.querySelector('#pr').value = 2400
    // Calling the function to calculate housing relief
    const housingRelief = calculateHousingRelief(grossPay)
    // Displaying the result in the housing relief input field
    document.querySelector('#ha').value = housingRelief
    // Calling the function to calculate taxable salary
    const toTax = taxableSalary(grossPay)
    const payee = calculatePayee(toTax)
    // Displaying the result in the payee input field
    document.querySelector('#payee').value = payee
    // Calculating net pay
    const netPay = grossPay - nssf - nhif - payee
    // Displaying the result in the net pay input field
    document.querySelector('#netSalary').value = netPay
}


// console.log(calculatePayee(98920))


// Writing a function for calculating NHIF
function calculateNHIF(grossPay) {
    let totalNHIF = 0
    if (grossPay < 6000) {
        totalNHIF = 150
        return totalNHIF
    }
    if (grossPay > 6000 && grossPay < 8000) {
        totalNHIF = 300
        return totalNHIF
    }

    if (grossPay > 8000 && grossPay < 12000) {
        totalNHIF = 400
        return totalNHIF
    }

    if (grossPay >= 12000 && grossPay < 15000 ) {
        totalNHIF = 500
        return totalNHIF
    }

    if (grossPay >= 15000 && grossPay < 20000) {
        totalNHIF = 600
        return totalNHIF
    }

    if (grossPay >= 20000 && grossPay < 25000) {
        totalNHIF = 750
        return totalNHIF
    }

    if (grossPay >= 25000 && grossPay < 30000) {
        totalNHIF = 850
        return totalNHIF
    }

    if (grossPay >= 30000 && grossPay < 35000) {
        totalNHIF = 900
        return totalNHIF
    }
    if (grossPay >= 35000 && grossPay < 40000) {
        totalNHIF = 950
        return totalNHIF
    }
    if (grossPay >= 40000 && grossPay < 45000) {
        totalNHIF = 1000
        return totalNHIF
    }
    if (grossPay >= 45000 && grossPay < 50000) {
        totalNHIF = 1100
        return totalNHIF
    }
    if (grossPay >= 50000 && grossPay < 60000) {
        totalNHIF = 1200
        return totalNHIF
    }
    if (grossPay >= 60000 && grossPay < 70000) {
        totalNHIF = 1300
        return totalNHIF
    }
    if (grossPay >= 70000 && grossPay < 80000) {
        totalNHIF = 1400
        return totalNHIF
    }
    if (grossPay >= 80000 && grossPay < 90000) {
        totalNHIF = 1500
        return totalNHIF
    }
    if (grossPay >= 90000 && grossPay < 100000) {
        totalNHIF = 1600
        return totalNHIF
    }
    if (grossPay >= 100000) {
        totalNHIF = 1700
        return totalNHIF
    }

    return totalNHIF
}

// console.log(calculateNHIF(67000))

//  Writing a function to calculate NSSF
function calculateNSSF(grossPay) {
     
    // Accumulator
    let total = 0;
    // Calculating relief on 2 tiers
    let totalNSSF1 = 0;
    let totalNSSF2 = 0;
    // Pension pay percentage
    let taxRate = 0.06
    // Calculating when under 6000 Ksh
    if (grossPay <= 6000) {
        totalNSSF1 = taxRate * grossPay
        totalNSSF2 = 0
        total = totalNSSF1 + totalNSSF2
        return total
    }

    // Calculating when above 6000
    if (grossPay > 6000 && grossPay < 18000) {
        totalNSSF1 = taxRate * 6000
        totalNSSF2 = taxRate * (grossPay - 6000)
        total = totalNSSF1 + totalNSSF2
        return total
    }
    if (grossPay > 18000) {
        totalNSSF1 = taxRate * 6000
        totalNSSF2 = taxRate * 12000
        total = totalNSSF1 + totalNSSF2
    }
    return total
}


// Writing a function to calculate housing relief
function calculateHousingRelief(grossPay) {
    let housingRelief = 0
    if (grossPay < 60000) {
        housingRelief = grossPay * 0.15
        return housingRelief
    }
    if (grossPay > 60000) {
        housingRelief = 9000
        return housingRelief
    }
    return housingRelief
}

// Writing a function to get total taxable salary from gross pay
function taxableSalary( grossPay ) {
    let result = grossPay - calculateNSSF(grossPay)
    return result
}

// console.log(taxableSalary(24000))
// console.log(calculatePayee(98920))

// Creating a function to calculate payee from the gross pay
function calculatePayee(taxableSalary) {
    // Calculating total tax on gross pay and accumulating in total
    let totalTax = 0;
    let taxPercentage = 0
    // No Payee if under 24k Ksh
    if ( taxableSalary < 24000)
    {
        return 0
    }

    if ( taxableSalary > 24000) 
    {
    // Tax percentage 10% upto 24000
    taxPercentage = 0.1
    totalTax = 24,000 * taxPercentage
    }
    totalTax = totalTax * 100

    // Tax percentage 25% upto 32333
    
    if ( (taxableSalary - 24000) > 0 )
    {
    taxPercentage = 0.25
    let tTax = (32333 - 24000) * taxPercentage
    totalTax += tTax
    // console.log(totalTax)
    // debugger
    }
    // Tax Percentage 30% over 32333
    if ((taxableSalary - 32333) > 0 ) 
    {
    taxPercentage = 0.30
    let tTax = (taxableSalary - 32333) * taxPercentage
    totalTax += tTax
    }


    // Less Tax reliefs 

    // First Tax Relief is 15% of NHIF paid
    let nhif = calculateNHIF(taxableSalary)
    let nhifRelief = (nhif * 0.15) + 2400
    // Personal Relief
    let personalRelief = 2400
    // Housing Relief
    // 15% of gross pay upto 9000 Ksh a month
    let housingRelief = calculateHousingRelief(taxableSalary)
    // Total tax relief
    let taxRelief = nhifRelief + personalRelief + housingRelief
    // console.log(taxRelief)
    // Subtracting tax relief from total tax
    totalTax -= taxRelief

    return totalTax
}









