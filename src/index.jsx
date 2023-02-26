import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import ChoisingMain from './Choising/ChoisingMain';
import FeedBackMain from './Feedback/FeedBackMain';
import Header from './Header/Header';
import FaqMain from './Faq/FaqMain';
import CreateFaq from './Faq/CreateFaq';
import UpdateChoising from './Choising/UpdateChoising';
import UpdateFaq from './Faq/UpdateFaq';
import PluginMain from './PluginsTriton/PluginMain';
import UpdatePlugin from './PluginsTriton/UpdatePlugin';
import UpdateInnerPlugin from './PluginsTriton/InnerPlugin/UpdateInnerPlugin';
import CreateInnerPlugin from './PluginsTriton/InnerPlugin/CreateInnerPlugin';
import CreatePlugin from './PluginsTriton/CreatePlugin';
import NotFound from './NotFound/NotFound';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import Login from './login/Login';
import ClientMain from './ClientPic/ClientMain';
import CreateClient from './ClientPic/CreateClient';
import UpdateClient from './ClientPic/UpdateClient';
import UpdateCardOfChoising from './CardOfChoising/UpdateCardOfChoising';
import CardOfChoisingMain from './CardOfChoising/CardOfChoisingMain';
import CreateCardOfChoising from './CardOfChoising/CreateCardOfChoising';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route path="/" element={<Header />}>
          <Route index element={<App />} />
          <Route path="feedback" element={<FeedBackMain />} />
          <Route path="/choising" element={<ChoisingMain />} />
          <Route path="/choising/:id" element={<UpdateChoising />} />
          <Route path="*" element={<NotFound />} />
          <Route>
            <Route path="/faq" element={<FaqMain />} />
            <Route path="/faq/:id" element={<UpdateFaq />} />
            <Route path="/faq/create" element={<CreateFaq />} />
          </Route>
          <Route>
            <Route path="/plugins" element={<PluginMain />} />
            <Route path="/plugins/create" element={<CreatePlugin />} />
            <Route path="/plugins/:id" element={<UpdatePlugin />} />
            <Route path="/plugins/:id/:id" element={<UpdateInnerPlugin />} />
            <Route path="/plugins/:id/create" element={<CreateInnerPlugin />} />
          </Route>
          <Route>
            <Route path="clients" element={<ClientMain />} />
            <Route path="clients/create" element={<CreateClient />} />
            <Route path="clients/:id" element={<UpdateClient />} />
          </Route>
          <Route>
            <Route path="cardOfChoising" element={<CardOfChoisingMain />} />
            <Route
              path="cardOfChoising/create"
              element={<CreateCardOfChoising />}
            />
            <Route
              path="cardOfChoising/:id"
              element={<UpdateCardOfChoising />}
            />
          </Route>
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
