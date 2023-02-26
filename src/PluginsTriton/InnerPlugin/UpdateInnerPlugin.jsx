import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateInnerPlugin = (props) => {
  console.log(props);
  const params = useParams();
  const navigate = useNavigate();

  //   console.log(params);

  const [moreInfo, setMoreInfo] = useState('');
  const [moreInfoKZ, setMoreInfoKZ] = useState('');
  const [moreInfoENG, setMoreInfoENG] = useState('');
  const [pluginModelId, setPluginModelId] = useState('');
  const [tab, setTab] = useState('');
  //   console.log(pluginModelId);

  const getInnerPluginById = async () => {
    const url = `https://localhost:7183/getPluginInformations/${params.id}`;

    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setMoreInfo(result.itemInformation);
        setMoreInfoKZ(result.itemInformationKZ);
        setMoreInfoENG(result.itemInformationENG);
        setTab(result.tab);
        console.log(result);
      });
  };

  useEffect(() => {
    getInnerPluginById();
  }, []);

  const updateInnerPluginById = (e) => {
    e.preventDefault();

    const url = `https://localhost:7183/updatePluginInformations/${params.id}`;

    const updatePluginMoreInfo = {
      tab,
      itemInformations: moreInfo,
      itemInformationsKZ: moreInfoKZ,
      itemInformationsENG: moreInfoENG,
    };

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(updatePluginMoreInfo),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setPluginModelId(result.pluginModelId);
        // console.log(result);
        navigate(`/plugins/${result.pluginModelId}`);
      });
  };

  return (
    <>
      <div className="container">
        <Form onSubmit={updateInnerPluginById} style={{ marginTop: 100 }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Таб</Form.Label>
            <Form.Control
              type="number"
              placeholder="Таб"
              value={tab}
              onChange={(e) => setTab(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Подробная информация</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={moreInfo}
              onChange={(e) => setMoreInfo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Подробная информация(КАЗАХСКИЙ)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={moreInfoKZ}
              onChange={(e) => setMoreInfoKZ(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Подробная информация(АНГЛИЙСКИЙ)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={moreInfoENG}
              onChange={(e) => setMoreInfoENG(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Сохранить
          </Button>{' '}
          <Link
            style={{
              color: 'white',
              background: 'gray',
              padding: '9px',
              borderRadius: '6px',
            }}
            to=".."
            relative="path"
            // onClick={() => navigate(`/plugins/${pluginModelId.id}`)}
            // variant="secondary"
          >
            Отменить
          </Link>{' '}
        </Form>
      </div>
    </>
  );
};

export default UpdateInnerPlugin;
