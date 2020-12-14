import React from 'react';
import ExcelReader from '../components/ExcelReader/ExcelReader';
import TopNavigation from '../components/TopNavigation/TopNavigation';
const ExcelToJs = () => {
    return (
        <div>
            <TopNavigation title="Excel to JS" />
            <h2>Excel to JS</h2>
            <ExcelReader />
        </div>
    )
}

export default ExcelToJs;