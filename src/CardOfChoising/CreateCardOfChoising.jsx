// import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useInitialState } from '../hooks/useInitialState';

const CreateCardOfChoising = () => {
  const title = useInitialState('');
  const titleKZ = useInitialState('');
  const titleENG = useInitialState('');
  const description = useInitialState('');
  const descriptionKZ = useInitialState('');
  const descriptionENG = useInitialState('');

  const [imageFile, setImageFile] = useState('');
  const [nameFile, setNameFile] = useState('');

  // console.log(selectedFile);

  const handleChangeImg = (e) => {
    setImageFile(e.target.files[0]);
    setNameFile(e.target.files[0].name);
  };

  const navigate = useNavigate();

  const createNewCard = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('title', title.value);
    formData.append('titleKZ', titleKZ.value);
    formData.append('titleENG', titleENG.value);
    formData.append('description', description.value);
    formData.append('descriptionKZ', descriptionKZ.value);
    formData.append('descriptionENG', descriptionENG.value);
    formData.append('imageFile', imageFile);
    formData.append('nameFile', nameFile);

    const url = 'http://46.101.153.165/createCard';

    await fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          response.json();
          navigate('/cardOfChoising');
        }
      })
      .then((result) => console.log(result));
  };

  return (
    <>
      <div className="container">
        <Form onSubmit={createNewCard} style={{ marginTop: 100 }}>
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
              value={nameFile}
              onChange={(e) => setNameFile(e.target.value)}
            />
          </Form.Group>
          <hr />
          <hr />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Название</Form.Label>
            <Form.Control
              type="text"
              placeholder="название..."
              value={title.value}
              onChange={title.onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Название (КАЗАХСКИЙ)</Form.Label>
            <Form.Control
              type="text"
              placeholder="название...(казахский)"
              value={titleKZ.value}
              onChange={titleKZ.onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Название (АНГЛИЙСКИЙ)</Form.Label>
            <Form.Control
              type="text"
              placeholder="название...(английский)"
              value={titleENG.value}
              onChange={titleENG.onChange}
            />
            <hr />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description.value}
              onChange={description.onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Описание(КАЗАХСКИЙ)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={descriptionKZ.value}
              onChange={descriptionKZ.onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Описание(АНГЛИЙСКИЙ)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={descriptionENG.value}
              onChange={descriptionENG.onChange}
            />
          </Form.Group>
          <Button type="submit" variant="success">
            Создать
          </Button>{' '}
          <Button
            onClick={() => navigate('/cardOfChoising')}
            variant="secondary"
          >
            Отменить
          </Button>{' '}
        </Form>
      </div>
    </>
  );
};

export default CreateCardOfChoising;
