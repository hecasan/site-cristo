// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadastroUsuario from './components/CadastroUsuario/CadastroUsuario';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/cadastro-usuario">Cadastro de Usuário</Link>
            </li>
            {/* Adicione mais itens de menu conforme necessário */}
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
