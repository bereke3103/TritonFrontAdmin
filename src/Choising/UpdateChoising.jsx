import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import ChoisingService from '../Service/Service';

const UpdateChoising = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const getChoisingById = async () => {
    const url = `https://localhost:7183/getChoising/${params.id}`;

    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setTitle(result.title);
        setText(result.text);
      });
  };

  const updateChoisingById = async (e) => {
    e.preventDefault();
    const url = `https://localhost:7183/updateChoising/${params.id}`;

    const updateChoise = {
      title,
      text,
    };

    await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(updateChoise),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(result));

    navigate('/choising');
  };

  useEffect(() => {
    getChoisingById();
  }, []);

  return (
    <>
      {title == undefined && text == undefined ? (
        <h1>Загрузка</h1>
      ) : (
        <div className="container">
          <Form style={{ marginTop: 100 }} onSubmit={updateChoisingById}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Заголовок</Form.Label>
              <Form.Control
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Описание</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Сохранить
            </Button>{' '}
            <Button onClick={() => navigate('/choising')} variant="secondary">
              Отменить
            </Button>{' '}
          </Form>
        </div>
      )}
    </>
  );
};

export default UpdateChoising;
