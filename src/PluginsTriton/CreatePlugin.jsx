import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CreatePlugin = () => {
  const [titlePlugin, setTitlePlugin] = useState('');
  const [shortInfoPlugin, setShortInfoPlugin] = useState('');

  const navigate = useNavigate();

  const createNewPlugin = async (e) => {
    e.preventDefault();

    const newPlugin = {
      title: titlePlugin,
      shortInfo: shortInfoPlugin,
    };

    const url = 'https://localhost:7183/createPlugin';

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlugin),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));

    navigate('/plugins');
  };

  return (
    <div className="container">
      <Form onSubmit={createNewPlugin} style={{ marginTop: 100 }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Название плагина</Form.Label>
          <Form.Control
            type="text"
            placeholder="название плагина..."
            value={titlePlugin}
            onChange={(e) => setTitlePlugin(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Короткая информация</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={shortInfoPlugin}
            onChange={(e) => setShortInfoPlugin(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Создать
        </Button>{' '}
        <Button onClick={() => navigate('/plugins')} variant="secondary">
          Отменить
        </Button>{' '}
      </Form>
    </div>
  );
};

export default CreatePlugin;
