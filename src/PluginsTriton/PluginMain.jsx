import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Plugin from './Plugin';

const PluginMain = () => {
  const [plugins, setPlugins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = 'http://46.101.153.165/getPlugin';

    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setPlugins(result);
      });
  }, [plugins]);

  return (
    <section style={{ marginTop: 140 }} className="plugins__section">
      <div className="container">
        {' '}
        <Button
          onClick={() => navigate('/plugins/create')}
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
                <TableCell align="left">Название плагина </TableCell>
                <TableCell align="center">Короткая информация</TableCell>
                <TableCell align="center">Операции</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {plugins.map((plugin) => (
                <Plugin {...plugin} key={plugin.id} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default PluginMain;
