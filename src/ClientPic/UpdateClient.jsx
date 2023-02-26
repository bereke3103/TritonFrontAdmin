import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateClient = () => {
  const [clientFile, setClientFile] = useState('');
  const [clientName, setClientName] = useState('');

  const navigate = useNavigate();
  const params = useParams();

  const clientFileHandle = (e) => {
    setClientFile(e.target.files[0]);
    setClientName(e.target.files[0].name);
  };

  const getClientId = async () => {
    const url = `https://localhost:7183/getClient/${params.id}`;

    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setClientFile(result.clientFile);
        setClientName(result.clientName);
      });
  };

  console.log(clientFile);
  console.log(clientName);

  const updateClientById = async (e) => {
    e.preventDefault();
    const url = `https://localhost:7183/updateClient/${params.id}`;

    const formData = new FormData();

    formData.append('clientFile', clientFile);
    formData.append('clientName', clientName);

    await fetch(url, {
      method: 'PUT',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
    navigate('/clients');
  };

  useEffect(() => {
    getClientId();
  }, []);

  return (
    <div className="container">
      <Form onSubmit={updateClientById} style={{ marginTop: 100 }}>
        <img
          style={{ width: '350px', height: '350px', objectFit: 'cover' }}
          src={`https://${clientName}`}
          alt=""
        />
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Обновите картинку</Form.Label>
          <Form.Control
            type="file"
            placeholder="Загрузите картинку"
            readOnly
            onChange={clientFileHandle}
            accept="image/*, .png, .jpg, .gif, .web"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Название картинки по умолчанию</Form.Label>
          <Form.Control
            type="text"
            placeholder="Название картинки по умолчанию"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Сохранить
        </Button>{' '}
        <Button onClick={() => navigate('/clients')} variant="secondary">
          Отменить
        </Button>{' '}
      </Form>
    </div>
  );
};

export default UpdateClient;
