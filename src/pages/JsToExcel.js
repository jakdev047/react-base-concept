import React from 'react';
import { ExportCSV } from '../components/ExportCSV/ExportCSV';
import TopNavigation from '../components/TopNavigation/TopNavigation';

const JsToExcel = () => {
    const fileName = 'TechnicalAdda';
    const viewers = [
        { id: 1, name: 'sakumar' },
        { id: 2, name: 'kumar' }
    ]
    return (
        <div>
            <TopNavigation title="JS to Excel" />
            <h2>JS to Excel</h2>
            <ExportCSV  csvData={viewers} fileName={fileName}/>
        </div>
    )
}

export default JsToExcel;