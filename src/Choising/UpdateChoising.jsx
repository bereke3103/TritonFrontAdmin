import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useUpdateChoisingMutation } from '../redux/choising.Api';

const UpdateChoising = () => {
  const [updateChoising] = useUpdateChoisingMutation();
  const params = useParams();
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [titleKZ, setTitleKZ] = useState('');
  const [titleENG, setTitleENG] = useState('');
  const [text, setText] = useState('');
  const [textKZ, setTextKZ] = useState('');
  const [textENG, setTextENG] = useState('');

  const getChoisingById = async () => {
    const url = `http://165.227.162.166/getChoising/${params.id}`;

    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setId(result.id);
        setTitle(result.title);
        setTitleKZ(result.titleKZ);
        setTitleENG(result.titleENG);
        setText(result.text);
        setTextKZ(result.textKZ);
        setTextENG(result.textENG);
      });
  };

  const handleUpdateChoising = async (e) => {
    e.preventDefault();

    const updateItemChoise = {
      id,
      title,
      titleKZ,
      titleENG,
      text,
      textKZ,
      textENG,
    };

    updateChoising(updateItemChoise);

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
          <Form style={{ marginTop: 100 }} onSubmit={handleUpdateChoising}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Заголовок</Form.Label>
              <Form.Control
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Заголовок(КАЗАХСКИЙ)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Заголовок(КАЗАХСКИЙ)"
                value={titleKZ}
                onChange={(e) => setTitleKZ(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Заголовок(АНГЛИЙСКИЙ)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Заголовок(АНГЛИЙСКИЙ)"
                value={titleENG}
                onChange={(e) => setTitleENG(e.target.value)}
              />
            </Form.Group>
            <hr />
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Описание(КАЗАХСКИЙ)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={textKZ}
                onChange={(e) => setTextKZ(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Описание(АНГЛИЙСКИЙ)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={textENG}
                onChange={(e) => setTextENG(e.target.value)}
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
