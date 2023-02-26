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
import CardOfChoising from './CardOfChoising';

const CardOfChoisingMain = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = 'https://localhost:7183/getCard';

    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => setCards(result));
  }, []);

  console.log(cards);

  return (
    <div style={{ marginTop: 140 }} className="container">
      {' '}
      <Button
        onClick={() => navigate('/cardOfChoising/create')}
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
              <TableCell align="left">Название </TableCell>
              <TableCell align="left">Описание </TableCell>
              <TableCell align="left">Картинки </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.map((card) => (
              <CardOfChoising {...card} key={card.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CardOfChoisingMain;
