import { TableCell, TableRow } from '@mui/material';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Plugin = (props) => {
  const { id, title, shortInfo } = props;

  const navigate = useNavigate();

  const deletePluginById = () => {
    const url = `https://localhost:7183/deletePlugin/${id}`;

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
      <TableCell width={700} align="center">
        {shortInfo}
      </TableCell>
      <TableCell align="left">
        <Button onClick={() => navigate(`/plugins/${id}`)}>
          Редактировать
        </Button>
        <Button
          onClick={() => {
            if (
              window.confirm(
                `Вы действительно хотите удалить плагин "${title}" ?`
              )
            )
              deletePluginById();
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

export default Plugin;
