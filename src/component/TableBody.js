import React from 'react';
import { TableBody } from '@material-ui/core';
import MUITableRow from './TableRow';

const GenrateTableBody = (props) => props.data.map((d, index) => {
    return (
        <MUITableRow key={index} ColumnProps={props.ColumnData} data={d}/>
    );
});


const MUITableBody = (props) => {
    return (
        <TableBody data-qa="table-body">
            <GenrateTableBody data={props.data} ColumnData={props.ColumnData} />
        </TableBody>
    );
}

MUITableBody.defaultProps = {
    data: [],
}
  
export default MUITableBody;
