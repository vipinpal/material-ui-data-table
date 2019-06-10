import React from 'react';
import { TableHead } from '@material-ui/core';
import MUITableRow from './TableRow';


const MUITableHead = (props) => {
    return (
        <TableHead>
             <MUITableRow ColumnProps={props.ColumnData} data={props.ColumnData} header />
        </TableHead>
    );
}

MUITableHead.defaultProps = {
    data: [],
}
  
export default MUITableHead;
