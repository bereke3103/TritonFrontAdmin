import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Client = ({ id, clientName }) => {
  const navigate = useNavigate();
  //   console.log(props);

  const deleteClientByID = () => {
    const url = `https://localhost:7183/deleteClient/${id}`;

    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };
  return (
    <TableRow>
      <TableCell align="left">{id}</TableCell>
      <TableCell>
        <img
          style={{ width: '250px', height: '250px', objectFit: 'cover' }}
          align="left"
          src={`https://${clientName}`}
          alt="Картинки"
        />
      </TableCell>

      <TableCell align="right">
        <Button onClick={() => navigate(`/clients/${id}`)}>
          Редактировать
        </Button>
        <Button
          onClick={() => {
            if (window.confirm(`Вы действительно хотите удалить картинку?`))
              deleteClientByID();
          }}
          style={{ marginLeft: 20 }}
          variant="danger"
        >
          Удалить
        </Button>{' '}
      </TableCell>
    </TableRow>
  );
};

export default Client;
