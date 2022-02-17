import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type Header = [string, string, string, string];
type Data = [string, string, string, string];

type Props = {
  headers: Header;
  datas: Data;
};

export const DecisionTable: React.FC<Props> = ({headers, datas}) => {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header) => {
              <TableCell align="right">header</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data, i) => (
            <TableRow key={'tableData' + i}>
              <TableCell align="right">{data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DecisionTable
