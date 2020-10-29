import React, { useState } from 'react';

export const ReduceMethod = () => {
    const [rowDto, setRowDto] = useState([
        { id: 1, debitCredit: 'Debit', amount: 10 },
        { id: 2, debitCredit: 'Credit', amount: -10 },
        { id: 3, debitCredit: 'Debit', amount: 5 },
        { id: 4, debitCredit: 'Credit', amount: -5 },
        { id: 5, debitCredit: 'Credit', amount: -25 },
        { id: 6, debitCredit: 'Debit', amount: 15 },
        { id: 7, debitCredit: 'Debit', amount: 10 }
    ]);
    const debitTotal = rowDto.filter((itm) => itm.debitCredit === "Debit").map((itm) => itm.amount).reduce((sum, curr) => { return sum += curr }, 0);
    const creditTotal = rowDto.filter((itm) => itm.debitCredit === "Credit").map((itm) => itm.amount).reduce((sum, curr) => { return sum += curr }, 0);
    return (
        <div>
            <h2>Debit: {Math.abs(debitTotal)}</h2>
            <h2>Credit: {Math.abs(creditTotal)}</h2>
        </div>
    )
}
