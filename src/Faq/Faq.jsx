import { TableCell, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Faq = (props) => {
  const { question, answer, id } = props;
  const navigate = useNavigate();
  const params = useParams();

  const deleteFaqById = () => {
    const url = `https://localhost:7183/deleteFaq/${id}`;
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
      <TableCell align="left"> {id}</TableCell>
      <TableCell align="left">{question}</TableCell>
      <TableCell width={700} align="center">
        {answer}
      </TableCell>
      <TableCell align="left">
        <Button onClick={() => navigate(`/faq/${id}`)}>Редактировать</Button>
        <Button
          onClick={() => {
            if (
              window.confirm(
                `Вы действительно хотите удалить плагин "${answer}" ?`
              )
            )
              deleteFaqById();
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

export default Faq;
