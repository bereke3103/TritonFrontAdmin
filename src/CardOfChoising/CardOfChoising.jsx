import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardOfChoising = ({ id, title, description, nameFile }) => {
  const navigate = useNavigate();
  //   console.log(props);
  // https:///

  const deleteCardByID = () => {
    const url = `http://165.227.162.166/deleteCard/${id}`;

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
      <TableCell align="left">{title}</TableCell>
      <TableCell align="left">{description}</TableCell>
      <TableCell>
        <img
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          align="left"
          src={nameFile}
          alt="Картинки"
        />
      </TableCell>

      <TableCell align="right">
        <Button onClick={() => navigate(`/cardOfChoising/${id}`)}>
          Редактировать
        </Button>
        <Button
          onClick={() => {
            if (window.confirm(`Вы действительно хотите удалить картинку?`))
              deleteCardByID();
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

export default CardOfChoising;
