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
import Faq from './Faq';
import faqPic from '../img/faq.png';

const FaqMain = () => {
  const navigate = useNavigate();
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    const url = 'https://localhost:7183/getFaq';

    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setFaq(result);
      });
  }, []);
  return (
    <section className="faq__section">
      <div className="container">
        <div className="faq__block">
          <div className="faq__img">
            <img src={faqPic} alt="" />
          </div>
          <div className="list__block">
            {' '}
            <Button
              onClick={() => navigate('create')}
              style={{
                //   marginLeft: '83%',
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
                    <TableCell align="left">ВОПРОС </TableCell>
                    <TableCell align="center">ОТВЕТ</TableCell>
                    <TableCell align="center">Операции</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {faq.map((f) => (
                    <Faq {...f} key={f.id} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqMain;
