import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Choising from './Choising/Choising';
import Faq from './Faq/Faq';
import Plugin from './PluginsTriton/Plugin';
import './Styles/index.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
          Административный панель для сайта Тритона
        </h1>
      </div>
    </div>
  );
}

export default App;
