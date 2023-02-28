import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDeleteClientMutation } from '../redux/client.Api';

const Client = ({ id, clientName }) => {
  const [deleteClient] = useDeleteClientMutation();
  const navigate = useNavigate();

  const deleteClientByID = async (id) => {
    await deleteClient(id);
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
              deleteClientByID(id);
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
