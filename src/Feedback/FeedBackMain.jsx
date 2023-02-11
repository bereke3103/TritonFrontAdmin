import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import Feedback from './Feedback.';

const FeedBackMain = () => {
  const [feedbacks, setFeedback] = useState([]);
  useEffect(() => {
    const url = 'https://localhost:7183/feedbackGet';

    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setFeedback(result);
      });
  }, []);
  return (
    <section className="section__feedback">
      <div className="container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID </TableCell>
                <TableCell align="center">Email </TableCell>
                <TableCell align="center">Имя</TableCell>
                <TableCell align="center">Фамилия</TableCell>
                <TableCell align="center">Вопрос</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feedbacks.map((item) => (
                <Feedback {...item} key={item.id} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default FeedBackMain;
