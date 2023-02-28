import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useGetClientQuery } from '../redux/client.Api';
import Client from './Client';

const ClientMain = () => {
  const { data: client = [] } = useGetClientQuery();

  const navigate = useNavigate();

  return (
    <div style={{ marginTop: 140 }} className="container">
      {' '}
      <Button
        onClick={() => navigate('/clients/create')}
        style={{
          float: 'right',
          marginBottom: 34,
        }}
        variant="success"
      >
        Добавить
      </Button>{' '}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Картинки </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {client.map((client) => (
              <Client {...client} key={client.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ClientMain;
