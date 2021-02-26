import React from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import "antd/dist/antd.css";
import Table from "antd/lib/table";

const ReactDynamicTable = () => {
    let sameKey;
    const columns = [
        {
            title: "Objective",
            dataIndex: "objective",
            key: "objective",
            render: (value, row, index) => {
                const obj = {
                    children: <div className="text-left"> {value} </div>,
                    props: {},
                };
                if (!(sameKey !== value)) {
                    obj.props.rowSpan = 0;
                    return obj;
                }
                const count = reports.filter(
                    (item) =>
                        item.intStrategicParticularsID === row.intStrategicParticularsID
                ).length;
                sameKey = value;
                obj.props.rowSpan = count;
                return obj;
            },
        },

        {
            title: "KPI",
            dataIndex: "kpi",
            key: "kpi",
            render: (v, r, index) => {
                return <div className="text-left">{v}</div>;
            },
        },
        {
            title: "SRF",
            dataIndex: "strFrequency",
            key: "strFrequency",
        },
        {
            title: "Weight",
            dataIndex: "numWeight",
            key: "numWeight",
        },
        {
            title: "Operator",
            dataIndex: "operator",
            key: "operator",
        },
        {
            title: "Target",
            dataIndex: "numTarget",
            key: "numTarget",
        },
        {
            title: "Ach.",
            dataIndex: "numAchivement",
            key: "numAchivement",
        },
    ];

    const reports = [
        {
            heading: "Customer",
            intStrategicParticularsID: 333,
            objective: "Improve customer satisfaction  (Base line data: Customer satisfaction NIL)",
            strTargetFrequency: "Monthly",
            strAggregationType: "avarage",
            kpiId: 8972,
            strKPIFormat: "% of",
            kpi: "%  Customer complanit received Vs resolved",
            numTarget: 90,
            numAchivement: 0,
            chart_type: 1,
            chart_type_label: "Bar",
            isShown: false,
            intMaxMin: 1,
            intFrequency: 2,
            strFrequency: "Monthly",
            numWeight: 10,
            numLastYearTgt: 0,
            numLastYearAch: 0,
            strDataSource: "ERP",
            intYearId: 11,
            strURL: ""
        },
        {
            heading: "Customer",
            intStrategicParticularsID: 333,
            objective: "Improve customer satisfaction  (Base line data: Customer satisfaction NIL)",
            strTargetFrequency: "Monthly",
            strAggregationType: "avarage",
            kpiId: 8973,
            strKPIFormat: "% of",
            kpi: "% New requirement assigned Vs resolved",
            numTarget: 70,
            numAchivement: 0,
            chart_type: 1,
            chart_type_label: "Bar",
            isShown: false,
            intMaxMin: 1,
            intFrequency: 2,
            strFrequency: "Monthly",
            numWeight: 10,
            numLastYearTgt: 0,
            numLastYearAch: 0,
            strDataSource: "ERP",
            intYearId: 11,
            strURL: ""
        },
        {
            heading: "Process",
            intStrategicParticularsID: 335,
            objective: "Ensure system & application up time for customer  (Base line data: NIL)",
            strTargetFrequency: "Monthly",
            strAggregationType: "avarage",
            kpiId: 8974,
            strKPIFormat: "% of",
            kpi: "% Application up time",
            numTarget: 100,
            numAchivement: 0.3,
            chart_type: 1,
            chart_type_label: "Bar",
            isShown: false,
            intMaxMin: 1,
            intFrequency: 2,
            strFrequency: "Monthly",
            numWeight: 10,
            numLastYearTgt: 0,
            numLastYearAch: 0,
            strDataSource: "ERP",
            intYearId: 11,
            strURL: ""
        },
        {
            heading: "Process",
            intStrategicParticularsID: 550,
            objective: "Develop industry specific enterprise solutions ",
            strTargetFrequency: "Monthly",
            strAggregationType: "sum",
            kpiId: 8975,
            strKPIFormat: "# of",
            kpi: "#  Solutions developed on time",
            numTarget: 39,
            numAchivement: 0,
            chart_type: 2,
            chart_type_label: "Donut",
            isShown: false,
            intMaxMin: 1,
            intFrequency: 2,
            strFrequency: "Monthly",
            numWeight: 15,
            numLastYearTgt: 0,
            numLastYearAch: 0,
            strDataSource: "ERP",
            intYearId: 11,
            strURL: ""
        },
        {
            heading: "Process",
            intStrategicParticularsID: 550,
            objective: "Develop industry specific enterprise solutions ",
            strTargetFrequency: "Monthly",
            strAggregationType: "sum",
            kpiId: 8976,
            strKPIFormat: "# of",
            kpi: "# On time delivery",
            numTarget: 39,
            numAchivement: 0,
            chart_type: 2,
            chart_type_label: "Donut",
            isShown: false,
            intMaxMin: 1,
            intFrequency: 2,
            strFrequency: "Monthly",
            numWeight: 10,
            numLastYearTgt: 0,
            numLastYearAch: 0,
            strDataSource: "ERP",
            intYearId: 11,
            strURL: ""
        },
        {
            heading: "People, L and G",
            intStrategicParticularsID: 558,
            objective: "Provide training for skill development",
            strTargetFrequency: "Monthly",
            strAggregationType: "sum",
            kpiId: 8977,
            strKPIFormat: "# of",
            kpi: "# Training assigned Vs. provided",
            numTarget: 3,
            numAchivement: 0,
            chart_type: 2,
            chart_type_label: "Donut",
            isShown: false,
            intMaxMin: 1,
            intFrequency: 2,
            strFrequency: "Monthly",
            numWeight: 10,
            numLastYearTgt: 0,
            numLastYearAch: 0,
            strDataSource: "ERP",
            intYearId: 11,
            strURL: ""
        },
        {
            heading: "People, L and G",
            intStrategicParticularsID: 559,
            objective: "Receive training for skill development",
            strTargetFrequency: "Yearly",
            strAggregationType: "sum",
            kpiId: 8978,
            strKPIFormat: "# of",
            kpi: "# Hour Training received",
            numTarget: 24,
            numAchivement: 0,
            chart_type: 2,
            chart_type_label: "Donut",
            isShown: false,
            intMaxMin: 1,
            intFrequency: 4,
            strFrequency: "Yearly",
            numWeight: 5,
            numLastYearTgt: 0,
            numLastYearAch: 0,
            strDataSource: "ERP",
            intYearId: 11,
            strURL: ""
        }
    ];

    let sameKey2;
    const columns2 = [
        {
            title: "Name of Supply",
            dataIndex: "nameOfSupply",
            key: "nameOfSupply",
            colSpan: 2,
            render: (value, row, index) => {
                const obj = {
                    children: <div className="text-left"> {value} </div>,
                    props: {},
                };
                if (!(sameKey2 !== value)) {
                    obj.props.rowSpan = 0;
                    return obj;
                }

                const count = reports2.filter(
                    (item) =>
                        item.outputTaxRowId === row.outputTaxRowId
                ).length;
                sameKey2 = value;
                obj.props.rowSpan = count;

                row.col === 2 ? obj.props.colSpan = 2 : obj.props.colSpan = 1

                return obj;
            },
        },
        {
            title: "nameOfSubSupply",
            dataIndex: "nameOfSubSupply",
            key: "nameOfSubSupply",
            colSpan: 0,
            render: (v, r, index) => {
                return <div className="text-left">{v}</div>;
            },
        },
        {
            title: "Note",
            dataIndex: "note",
            key: "note",
        },
        {
            title: "Value",
            dataIndex: "value",
            key: "value",
        },
        {
            title: "SD",
            dataIndex: "sd",
            key: "sd",
        },
        {
            title: "Vat",
            dataIndex: "vat",
            key: "vat",
        },
        {
            title: "subform",
            dataIndex: "subform",
            key: "subform",
        },
    ];

    const reports2 = [
        {
            outputTaxRowId: 1,
            col: 1,
            nameOfSupply: "Zero Rated Goods/Service",
            nameOfSubSupply: "Direct Export",
            note: "Note",
            value: "Value",
            vat: "Vat",
            sd: "SD",
            subform: "Sub Form"
        },
        {
            outputTaxRowId: 1,
            col: 1,
            nameOfSupply: "Zero Rated Goods/Service",
            nameOfSubSupply: "Deemed Export",
            note: "Note",
            value: "Value",
            vat: "Vat",
            sd: "SD",
            subform: "Sub Form"
        },
        {
            outputTaxRowId: 2,
            col: 1,
            nameOfSupply: "Exempted Goods/Service",
            nameOfSubSupply: "Deemed Export",
            note: "Note",
            value: "Value",
            vat: "Vat",
            sd: "SD",
            subform: "Sub Form"
        },
        {
            outputTaxRowId: 2,
            col: 1,
            nameOfSupply: "Exempted Goods/Service",
            nameOfSubSupply: "Direct Export",
            note: "Note",
            value: "Value",
            vat: "Vat",
            sd: "SD",
            subform: "Sub Form"
        },
    ];

    let sameKey3;
    const columns3 = [
        {
            title: "Name of Supply",
            dataIndex: "nameOfSupply",
            key: "nameOfSupply",
            colSpan: 2,
            render: (value, row, index) => {
                const obj = {
                    children: <div className="text-left"> {value} </div>,
                    props: {},
                };
                if (!(sameKey3 !== value)) {
                    obj.props.rowSpan = 0;
                    return obj;
                }

                const count = reports3.filter(
                    (item) =>
                        item.outputTaxRowId === row.outputTaxRowId
                ).length;
                sameKey3 = value;
                obj.props.rowSpan = count;

                row.col === 2 ? obj.props.colSpan = 2 : obj.props.colSpan = 1

                return obj;
            },
        },
        {
            title: "nameOfSubSupply",
            dataIndex: "nameOfSubSupply",
            key: "nameOfSubSupply",
            colSpan: 0,
            render: (v, r, index) => {
                return <div className="text-left">{v}</div>;
            },
        },
        {
            title: "Note",
            dataIndex: "note",
            key: "note",
        },
        {
            title: "Value",
            dataIndex: "value",
            key: "value",
        },
        {
            title: "SD",
            dataIndex: "sd",
            key: "sd",
        },
        {
            title: "Vat",
            dataIndex: "vat",
            key: "vat",
        },
        {
            title: "subform",
            dataIndex: "subform",
            key: "subform",
        },
    ];

    const reports3 = [
        {
            outputTaxRowId: 1,
            col: 1,
            nameOfSupply: "Zero Rated Goods/Service",
            nameOfSubSupply: "Direct Export",
            note: "Note",
            value: "Value",
            vat: "Vat",
            sd: "SD",
            subform: "Sub Form"
        },
        {
            outputTaxRowId: 1,
            col: 1,
            nameOfSupply: "Zero Rated Goods/Service",
            nameOfSubSupply: "Deemed Export",
            note: "Note",
            value: "Value",
            vat: "Vat",
            sd: "SD",
            subform: "Sub Form"
        },
        {
            outputTaxRowId: 2,
            col: 2,
            nameOfSupply: "Exempted Goods/Service",
            nameOfSubSupply: "",
            note: "Note",
            value: "Value",
            vat: "Vat",
            sd: "SD",
            subform: "Sub Form"
        },
        {
            outputTaxRowId: 3,
            col: 2,
            nameOfSupply: "Standard Rated Goods/Service",
            nameOfSubSupply: "",
            note: "Note",
            value: "Value",
            vat: "Vat",
            sd: "SD",
            subform: "Sub Form"
        }
    ];
    return (
        <div>
            <TopNavigation title="Dynamic Table" />
            <h2>Dynamic Table</h2>
            <div className="achievement bsc-print mb-5">
                <Table
                    columns={columns}
                    dataSource={reports?.map((d, i) => ({ key: i, ...d }))}
                    pagination={false}
                    bordered={true}
                />
            </div>

            <div className="output-tax mb-5">
                <table className="table table-striped table-bordered text-center" style={{ margin: '0' }}>
                    <thead>
                        <tr>
                            <th colSpan="7">Input Tax</th>
                        </tr>
                    </thead>
                </table>
                <Table
                    columns={columns2}
                    dataSource={reports2?.map((d, i) => ({ key: i, ...d }))}
                    pagination={false}
                    bordered={true}
                />
            </div>

            <div className="output-tax mb-5">
                <table className="table table-striped table-bordered text-center" style={{ margin: '0' }}>
                    <thead>
                        <tr>
                            <th colSpan="7">Output Tax</th>
                        </tr>
                    </thead>
                </table>
                <Table
                    columns={columns3}
                    dataSource={reports3?.map((d, i) => ({ key: i, ...d }))}
                    pagination={false}
                    bordered={true}
                />
            </div>


        </div>
    )
}

export default ReactDynamicTable;