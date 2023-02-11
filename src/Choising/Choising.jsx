import { Button, TableCell, TableRow } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Choising = (props) => {
  const { id, title, text } = props;
  const router = useNavigate();
  return (
    <TableRow>
      <TableCell align="left"> {id}</TableCell>
      <TableCell align="left"> {title}</TableCell>
      <TableCell width={700} align="center">
        {text}
      </TableCell>
      <TableCell>
        <Button
          onClick={() => router(`/choising/${id}`)}
          variant="contained"
          color="success"
        >
          Редактировать
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Choising;
