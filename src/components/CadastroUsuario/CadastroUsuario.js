import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CadastroUsuario.css';

const CadastroUsuario = () => {
   const [usuario, setUsuario] = useState({
     nome: '',
     email: '',
     senha: '',
   });
 
   const [mensagem, setMensagem] = useState('');
 
   const handleChange = (event) => {
     const { name, value } = event.target;
     setUsuario((prevUsuario) => ({
       ...prevUsuario,
       [name]: value,
     }));
 
     // Limpar a mensagem de erro ao alterar qualquer campo
     setMensagem('');
   };
 
   const handleSubmit = async (event) => {
     event.preventDefault();
 
     // Verificar se os campos estão preenchidos
     if (!usuario.nome || !usuario.email || !usuario.senha) {
       setMensagem('Por favor, preencha todos os campos.');
       return;
     }
 
     try {
       // Verificar se o usuário já existe
       const verificaUsuario = await fetch(
         `http://localhost:8000/api/usuarios/verifica?email=${usuario.email}`
       );
 
       const usuarioExistente = await verificaUsuario.json();
 
       if (usuarioExistente.existe) {
         setMensagem('Usuário já cadastrado. Utilize outro email.');
         return;
       }
 
       // Se o usuário não existe, cadastrar
       const response = await fetch('http://localhost:8000/api/usuarios', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(usuario),
       });
 
       if (response.ok) {
         // Usuário cadastrado com sucesso
         toast.success('Usuário cadastrado com sucesso!', {
           position: 'top-center',
           autoClose: 3000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
         });
 
         // Limpar o formulário após o sucesso, se desejar
         setUsuario({
           nome: '',
           email: '',
           senha: '',
         });
         setMensagem('');
       } else {
         // Trate erros aqui, se necessário
         toast.error('Erro ao cadastrar usuário. Tente novamente.');
       }
     } catch (error) {
       console.error('Erro ao processar a solicitação:', error);
     }
   };
 
   return (
     <div className="cadastro-container">
       <form className="cadastro-form" onSubmit={handleSubmit}>
         <h2>Cadastro de Usuário</h2>
         {mensagem && <p className="mensagemErro">{mensagem}</p>}
         <label>
           Nome:
           <input
             type="text"
             name="nome"
             value={usuario.nome}
             onChange={handleChange}
           />
         </label>
         <br />
         <label>
           Email:
           <input
             type="email"
             name="email"
             value={usuario.email}
             onChange={handleChange}
           />
         </label>
         <br />
         <label>
           Senha:
           <input
             type="password"
             name="senha"
             value={usuario.senha}
             onChange={handleChange}
           />
         </label>
         <br />
         <button type="submit">Cadastrar</button>
       </form>
       <ToastContainer />
     </div>
   );
 };
 
 export default CadastroUsuario;
 