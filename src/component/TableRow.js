import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { objectTypeSpreadProperty } from '@babel/types';

const GenrateTableRowCell = (props) => {
    const cellData = props.data;
    console.log(cellData);
    if(cellData.render && typeof cellData.render === 'function' && cellData.showCell) {
        const customRenderResData = cellData.render(cellData);
        if (React.isValidElement(customRenderResData)) {
            return (
                <TableCell
                    key={cellData.muiKey}
                >
                    {customRenderResData}
                </TableCell>
            )
        } 
    } else if(cellData.showCell) {
        return (
            <TableCell
            key={cellData.muiKey}
            >
                {cellData.muiValue || ''}
            </TableCell>
        );
    } else {
        return null;
    }
};

const GetAllCells = (props) => {
    const ColumnProps = props.ColumnProps;
    const data = props.data;
    console.log(ColumnProps);
    return ColumnProps.map((d, index) => {
        const showCell = (d && d.hasOwnProperty('show')) ? d.show : true;
        let newData = {};
        if(props.header) {
            newData = { muiValue: d.headerLable, muiKey: d.headerLable, showCell };
        } else {
            newData = { muiValue: data[d.key], muiKey: data[d.id], ...d, showCell, ...data };
        }
        return <GenrateTableRowCell key={index} data={newData} />
    })
}


const MUITableRow = (props) => {
    return (
        <TableRow data-qa="table-body">
            <GetAllCells data={props.data} ColumnProps={props.ColumnProps} header={props.header} />
        </TableRow>
    );
}

MUITableRow.defaultProps = {
    data: [],
}
  
export default MUITableRow;
