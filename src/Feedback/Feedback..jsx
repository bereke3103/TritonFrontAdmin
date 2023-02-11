import { TableCell, TableRow } from '@mui/material';

const Feedback = (props) => {
  const { id, surname, name, email, questions } = props;
  return (
    <TableRow>
      <TableCell align="center">{id}</TableCell>
      <TableCell align="center">{surname}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell width={500} align="center">
        {questions}
      </TableCell>
    </TableRow>
  );
};

export default Feedback;
