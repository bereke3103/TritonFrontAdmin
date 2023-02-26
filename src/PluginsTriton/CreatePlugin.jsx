// import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CreatePlugin = () => {
  const [titlePlugin, setTitlePlugin] = useState('');
  const [titlePluginKZ, setTitlePluginKZ] = useState('');
  const [titlePluginENG, setTitlePluginENG] = useState('');
  const [shortInfoPlugin, setShortInfoPlugin] = useState('');
  const [shortInfoPluginKZ, setShortInfoPluginKZ] = useState('');
  const [shortInfoPluginENG, setShortInfoPluginENG] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [nameFile, setNameFile] = useState('');
  const [pluginFile, setPluginFile] = useState('');
  const [pluginName, setPluginName] = useState('');
  const [urlVideo, setUrlVideo] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // console.log(selectedFile);

  const handleChangeImg = (e) => {
    setSelectedFile(e.target.files[0]);
    setNameFile(e.target.files[0].name);
  };

  const pluginFileHandle = (e) => {
    setPluginFile(e.target.files[0]);
    setPluginName(e.target.files[0].name);
  };

  const navigate = useNavigate();

  const createNewPlugin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();

    formData.append('title', titlePlugin);
    formData.append('titleKZ', titlePluginKZ);
    formData.append('titleENG', titlePluginENG);
    formData.append('shortInfo', shortInfoPlugin);
    formData.append('shortInfoKZ', shortInfoPluginKZ);
    formData.append('shortInfoENG', shortInfoPluginENG);
    formData.append('imageFile', selectedFile);
    formData.append('nameFile', nameFile);
    formData.append('urlVideo', urlVideo);
    formData.append('pluginFile', pluginFile);
    formData.append('pluginName', pluginName);

    const url = 'https://localhost:7183/createPlugin';

    await fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          setIsLoading(false);
          response.json();
        }
      })
      .then((result) => console.log(result));

    navigate('/plugins');
  };

  return (
    <>
      <div className="container">
        <Form onSubmit={createNewPlugin} style={{ marginTop: 100 }}>
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
            <Form.Label>Загрузите плагин</Form.Label>
            <Form.Control
              type="file"
              placeholder="Загрузите плагин"
              readOnly
              onChange={pluginFileHandle}
              // accept="image/*, .png, .jpg, .gif, .web"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Название плагина по умолчанию</Form.Label>
            <Form.Control
              type="text"
              placeholder="Название плагина по умолчанию"
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
            <Form.Label>Название плагина</Form.Label>
            <Form.Control
              type="text"
              placeholder="название плагина..."
              value={titlePlugin}
              onChange={(e) => setTitlePlugin(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Название плагина(КАЗАХСКИЙ)</Form.Label>
            <Form.Control
              type="text"
              placeholder="название плагина...((казахский)"
              value={titlePluginKZ}
              onChange={(e) => setTitlePluginKZ(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Название плагина(АНГЛИЙСКИЙ)</Form.Label>
            <Form.Control
              type="text"
              placeholder="название плагина...(английский)"
              value={titlePluginENG}
              onChange={(e) => setTitlePluginENG(e.target.value)}
            />
            <hr />
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Короткая информация(КАЗАХСКИЙ)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={shortInfoPluginKZ}
              onChange={(e) => setShortInfoPluginKZ(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Короткая информация(АНГЛИЙСКИЙ)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={shortInfoPluginENG}
              onChange={(e) => setShortInfoPluginENG(e.target.value)}
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
      {isLoading && (
        <div className="pre__loader">
          <div className="pre__loader__container">Идет загрузка...</div>
        </div>
      )}
    </>
  );
};

export default CreatePlugin;
