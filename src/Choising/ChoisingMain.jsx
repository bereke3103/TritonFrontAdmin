import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Choising from './Choising';
import choisingPic from '../img/choising.png';
import { useGetChoisingQuery } from '../redux/choising.Api';

const ChoisingMain = () => {
  const { data: choisings = [] } = useGetChoisingQuery();

  return (
    <section className="choising__section">
      <div className="container">
        {' '}
        <div className="choising__block">
          <div className="choising__img">
            <img src={choisingPic} alt="" />
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">ID</TableCell>
                  <TableCell align="left">Заголовок </TableCell>
                  <TableCell align="center">Описание</TableCell>
                  <TableCell align="left">Операции</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {choisings.map((item) => (
                  <Choising {...item} key={item.id} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </section>
  );
};

export default ChoisingMain;
