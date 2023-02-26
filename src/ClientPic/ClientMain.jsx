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
import Client from './Client';

const ClientMain = () => {
  const [client, setClient] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = 'https://localhost:7183/getClient';

    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => setClient(result));
  }, []);

  console.log(client);

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
