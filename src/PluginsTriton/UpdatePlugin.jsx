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
  const [pluginKZ, setPluginKZ] = useState('');
  const [pluginENG, setPluginENG] = useState('');
  const [shortInfo, setShortInfo] = useState('');
  const [shortInfoKZ, setShortInfoKZ] = useState('');
  const [shortInfoENG, setShortInfoENG] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [nameFile, setNameFile] = useState('');
  const [pluginFile, setPluginFile] = useState('');
  const [pluginName, setPluginName] = useState('');
  const [urlVideo, setUrlVideo] = useState('');

  const handleChangeImg = (e) => {
    setSelectedFile(e.target.files[0]);
    setNameFile(e.target.files[0].name);
  };

  const pluginFileHandle = (e) => {
    setPluginFile(e.target.files[0]);
    setPluginName(e.target.files[0].name);
  };

  const [innerPlugin, setInnferPlugin] = useState([]);
  useEffect(() => {
    const url = 'http://46.101.153.165/getPluginInformations';

    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setInnferPlugin(result);
      });
  }, [innerPlugin]);

  const getPluginId = async () => {
    const url = `https://localhost:7183/getPlugin/${params.id}`;

    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setPlugin(result.title);
        setPluginKZ(result.titleKZ);
        setPluginENG(result.titleENG);
        setShortInfo(result.shortInfo);
        setShortInfoKZ(result.shortInfoKZ);
        setShortInfoENG(result.shortInfoENG);
        setNameFile(result.nameFile);
        setPluginName(result.pluginName);
        setUrlVideo(result.urlVideo);
      });
  };

  const updatePluginById = async (e) => {
    e.preventDefault();
    const url = `https://localhost:7183/updatePlugin/${params.id}`;

    const formData = new FormData();

    formData.append('title', plugin);
    formData.append('titleKZ', pluginKZ);
    formData.append('titleENG', pluginENG);
    formData.append('shortInfo', shortInfo);
    formData.append('shortInfoKZ', shortInfoKZ);
    formData.append('shortInfoENG', shortInfoENG);
    formData.append('imageFile', selectedFile);
    formData.append('nameFile', nameFile);
    //
    formData.append('pluginFile', pluginFile);
    formData.append('pluginName', pluginName);
    //
    formData.append('urlVideo', urlVideo);

    await fetch(url, {
      method: 'PUT',
      body: formData,
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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={`https://${nameFile}`}
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
              alt=""
            />
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>???????????????? ????????????????</Form.Label>
            <Form.Control
              type="file"
              placeholder="???????????????? ????????????????"
              readOnly
              onChange={handleChangeImg}
              accept="image/*, .png, .jpg, .gif, .web"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>???????????????? ???????????????? ???? ??????????????????</Form.Label>
            <Form.Control
              type="text"
              placeholder="???????????????? ???????????????? ???? ??????????????????"
              value={nameFile}
              onChange={(e) => setNameFile(e.target.value)}
              accept="image/*, .png, .jpg, .gif, .web"
            />
          </Form.Group>
          <hr />
          <hr />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>???????????????? ????????????</Form.Label>
            <Form.Control
              type="file"
              placeholder="???????????????? ????????????"
              readOnly
              onChange={pluginFileHandle}
              // accept="image/*, .png, .jpg, .gif, .web"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>???????????????? ?????????????? ???? ??????????????????</Form.Label>
            <Form.Control
              type="text"
              placeholder="???????????????? ?????????????? ???? ??????????????????"
              value={pluginName}
              onChange={(e) => setPluginName(e.target.value)}
            />
          </Form.Group>
          <hr />
          <hr />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>URL VIDEO</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL VIDEO"
              value={urlVideo}
              onChange={(e) => setUrlVideo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>???????????????? ??????????????</Form.Label>
            <Form.Control
              type="text"
              placeholder="???????????????? ??????????????..."
              value={plugin}
              onChange={(e) => setPlugin(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>???????????????? ??????????????(??????????????????)</Form.Label>
            <Form.Control
              type="text"
              placeholder="???????????????? ??????????????..."
              value={pluginKZ}
              onChange={(e) => setPluginKZ(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>???????????????? ??????????????(????????????????????)</Form.Label>
            <Form.Control
              type="text"
              placeholder="???????????????? ??????????????..."
              value={pluginENG}
              onChange={(e) => setPluginENG(e.target.value)}
            />
          </Form.Group>
          <hr />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>???????????????? ????????????????????</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={shortInfo}
              onChange={(e) => setShortInfo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>???????????????? ????????????????????(??????????????????)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={shortInfoKZ}
              onChange={(e) => setShortInfoKZ(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>???????????????? ????????????????????(??????????????????)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={shortInfoENG}
              onChange={(e) => setShortInfoENG(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            ??????????????????
          </Button>{' '}
          <Button onClick={() => navigate('/plugins')} variant="secondary">
            ????????????????
          </Button>{' '}
        </Form>
      </div>

      {/* {itemPlugin == undefined ? (
        <h1>????????????????</h1>
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
            ????????????????
          </Button>{' '}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">ID</TableCell>
                  <TableCell align="center">?????????????????? ????????????????????</TableCell>

                  <TableCell align="center">????????????????</TableCell>
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
                            ??????????????????????????
                          </Button>
                          <Button
                            onClick={() => {
                              if (
                                window.confirm(
                                  `???? ?????????????????????????? ???????????? ?????????????? ?????????????????? ?????????????????????" ?`
                                )
                              )
                                deleteMoreInfoById();
                            }}
                            style={{ marginLeft: 20 }}
                            variant="danger"
                          >
                            ??????????????
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
