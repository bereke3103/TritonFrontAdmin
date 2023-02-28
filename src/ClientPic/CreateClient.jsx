import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAddClientMutation } from '../redux/client.Api';

const CreateClient = () => {
  const [addClient] = useAddClientMutation();
  const [clientFile, setClientFile] = useState('');
  const [clientName, setClientName] = useState('');
  const navigate = useNavigate();

  const handleChangeImg = (e) => {
    setClientFile(e.target.files[0]);
    setClientName(e.target.files[0].name);
  };

  const createNewClient = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('clientName', clientName);
    formData.append('clientFile', clientFile);

    addClient(formData);

    navigate('/clients');
  };

  return (
    <div className="container">
      <Form onSubmit={createNewClient} style={{ marginTop: 100 }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Загрузите картинку</Form.Label>
          <Form.Control
            type="file"
            placeholder="Загрузите картинку"
            readOnly
            onChange={handleChangeImg}
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
          Создать
        </Button>{' '}
        <Button onClick={() => navigate('/clients')} variant="secondary">
          Отменить
        </Button>{' '}
      </Form>
    </div>
  );
};

export default CreateClient;
