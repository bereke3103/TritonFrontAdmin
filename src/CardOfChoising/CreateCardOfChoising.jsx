// import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CreateCardOfChoising = () => {
  const [title, seTitle] = useState('');
  const [titleKZ, setTitleKZ] = useState('');
  const [titleENG, setTitleENG] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionKZ, setDescriptionKZ] = useState('');
  const [descriptionENG, setDescriptionENG] = useState('');
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

    formData.append('title', title);
    formData.append('titleKZ', titleKZ);
    formData.append('titleENG', titleENG);
    formData.append('description', description);
    formData.append('descriptionKZ', descriptionKZ);
    formData.append('descriptionENG', descriptionENG);
    formData.append('imageFile', imageFile);
    formData.append('nameFile', nameFile);

    const url = 'https://localhost:7183/createCard';

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
              value={title}
              onChange={(e) => seTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Название (КАЗАХСКИЙ)</Form.Label>
            <Form.Control
              type="text"
              placeholder="название...(казахский)"
              value={titleKZ}
              onChange={(e) => setTitleKZ(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Название (АНГЛИЙСКИЙ)</Form.Label>
            <Form.Control
              type="text"
              placeholder="название...(английский)"
              value={titleENG}
              onChange={(e) => setTitleENG(e.target.value)}
            />
            <hr />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Описание(КАЗАХСКИЙ)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={descriptionKZ}
              onChange={(e) => setDescriptionKZ(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Описание(АНГЛИЙСКИЙ)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={descriptionENG}
              onChange={(e) => setDescriptionENG(e.target.value)}
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
