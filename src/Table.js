import React from 'react';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';

import TableBody from './component/TableBody';
import TableHead from './component/TableHead';

function MUITable(props) {
    return (
        <Container maxWidth="sm">
        <Table>
            <TableHead 
                ColumnData={props.ColumnData}
            />
            <TableBody 
                data={props.data}
                ColumnData={props.ColumnData}
            />
        </Table>
        </Container>
    );
}
  
export default MUITable;
