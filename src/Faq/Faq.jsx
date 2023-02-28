import { TableCell, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteProductMutation } from '../redux/faq.Api';

const Faq = ({ question, answer, id }) => {
  const [deleteFaq] = useDeleteProductMutation();

  const navigate = useNavigate();
  const params = useParams();

  const handleDeleteFaq = async (id) => {
    deleteFaq(id);
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
              handleDeleteFaq(id);
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
