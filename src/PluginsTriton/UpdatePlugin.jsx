import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import InnerPlugin from './InnerPlugin/InnerPlugin';

const UpdatePlugin = () => {
  const params = useParams();
  const navigate = useNavigate();
  //   console.log(params);

  const [plugin, setPlugin] = useState('');
  const [shortInfo, setShortInfo] = useState('');

  const [innerPlugin, setInnferPlugin] = useState([]);
  useEffect(() => {
    const url = 'https://localhost:7183/getPluginInformations';

    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setInnferPlugin(result);
      });
  }, [innerPlugin]);

  //   const itemPlugin = innerPlugin.find((i) => i.pluginModelId == params.id);
  //   console.log(itemPlugin);

  const getPluginId = async () => {
    const url = `https://localhost:7183/getPlugin/${params.id}`;

    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setPlugin(result.title);
        setShortInfo(result.shortInfo);
      });
  };

  const updatePluginById = async (e) => {
    e.preventDefault();
    const url = `https://localhost:7183/updatePlugin/${params.id}`;

    const updatePluginById = {
      title: plugin,
      shortInfo: shortInfo,
    };

    await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(updatePluginById),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(result));

    navigate('/plugins');
  };

  useEffect(() => {
    getPluginId();
  }, []);

  return (
    <>
      <div className="container">
        <Form onSubmit={updatePluginById} style={{ marginTop: 100 }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Название плагина</Form.Label>
            <Form.Control
              type="text"
              placeholder="название плагина..."
              value={plugin}
              onChange={(e) => setPlugin(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Короткая информация</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={shortInfo}
              onChange={(e) => setShortInfo(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Сохранить
          </Button>{' '}
          <Button onClick={() => navigate('/plugins')} variant="secondary">
            Отменить
          </Button>{' '}
        </Form>
      </div>

      {/* {itemPlugin == undefined ? (
        <h1>Загрузка</h1>
      ) : ( */}
      <section style={{ marginTop: 140 }} className="plugins__section">
        <div className="container">
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
                  <TableCell align="center">Подробная информация</TableCell>

                  <TableCell align="center">Операции</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {innerPlugin.map((i) => {
                  if (i.pluginModelId == params.id) {
                    const deleteMoreInfoById = () => {
                      const url = `https://localhost:7183/deletePluginInformations/${i.id}`;

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
                      <TableRow key={i.id}>
                        <TableCell align="left"> {i.id}</TableCell>

                        <TableCell width={700} align="center">
                          {i.itemInformation}
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            onClick={() =>
                              navigate(`/plugins/${params.id}/${i.id}`)
                            }
                          >
                            Редактировать
                          </Button>
                          <Button
                            onClick={() => {
                              if (
                                window.confirm(
                                  `Вы действительно хотите удалить подробную информацию?" ?`
                                )
                              )
                                deleteMoreInfoById();
                            }}
                            style={{ marginLeft: 20 }}
                            variant="danger"
                          >
                            Удалить
                          </Button>{' '}
                        </TableCell>
                      </TableRow>
                    );
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>
      {/* )} */}
    </>
  );
};

export default UpdatePlugin;
