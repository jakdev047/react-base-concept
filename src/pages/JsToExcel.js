import React from 'react';
import { ExportCSV } from '../components/ExportCSV/ExportCSV';

const JsToExcel = () => {
    const fileName = 'TechnicalAdda';
    const viewers = [
        { id: 1, name: 'sakumar' },
        { id: 2, name: 'kumar' }
    ]
    return (
        <div className="container">
            <h2>JS to Excel</h2>
            <ExportCSV  csvData={viewers} fileName={fileName}/>
        </div>
    )
}

export default JsToExcel;