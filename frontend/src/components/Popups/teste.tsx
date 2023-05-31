import { useState } from "react";
import "./teste.css";
import LT from "../img/little_tech.png"
import logo from "../img/visiona_logo.png"
import eyeIconOpen from '../img/open.png';
import eyeIconClose from '../img/close.png';
import Axios from "axios"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function EdicaoAdmin() {
  const [nome, setNome] = useState("" as any)
  const [email, setEmail] = useState("" as any)
  const [nomeUsuario, setNomeUsuario] = useState("" as any)
  // const [password, setPassword] = useState("" as any)
  // const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  //Validar
  const validaCampos = () => {
    let vazio = false
    if (nome === '' || email === '' || nomeUsuario === '') {
      vazio = true
      return vazio
    }
  }

  function msgValidaCampos() {
    Swal.fire({
      title: 'Alerta',
      html: 'Preencha todos os campos.',
      icon: 'warning',
      confirmButtonColor: '#de940a'
    })
  }


  return (
    <div className="container-teste">
      <div className="container-teste">
        <div className="wrap-teste">
          <form className="teste-form">
            <div className="wrap-input-teste">
              <input
                className={nome !== "" ? "has-val input-teste" : "input-teste"}
                type="text"
                name="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
              <span className="focus-input-teste" data-placeholder="Nome"></span>

            </div>
            <div className="wrap-input-teste">
              <input
                className={email !== "" ? "has-val input-teste" : "input-teste"}
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <span className="focus-input-teste" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input-teste">
              <input
                className={nomeUsuario !== "" ? "has-val input" : "input-teste"}
                type="text"
                name="nomeUsuario"
                value={nomeUsuario}
                onChange={(event) => setNomeUsuario(event.target.value)}
              />
              <span className="focus-input-teste" data-placeholder="Nome de usuário"></span>
            </div>
            {/* PARTE DOS SELECT */}
            <div className="wrap-select-teste-geral">
              {/* SELECT TIPO DE USUÁRIO */}
              <div className="wrap-select-teste-hierarquia">
                <a className="txt3">Tipo de usuário</a>
                <select>
                  <option value="todasOpcoes">Tipo de usuário</option>
                  <option value="Comum">Comum</option>
                  <option value="Administrador">Administrador</option>
                </select>
              </div>
              {/* SELECT STATUS DO USUÁRIO */}
              <div className="wrap-select-teste-status">
                <a className="txt3">Status</a>
                <select>
                  <option value="todasOpcoes">Status</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </select>
              </div>
            </div>

            {/* PARTE DOS SELECT */}
            <div className="container-form-btn-teste">
              <button className="teste-form-btn">Salvar</button>
            </div>

            <div className="text-center-teste">
              <span className="txt1">Voltar para a página de</span>
              <a className="txt2" href="/user-admin">
                Admin
              </a>
            </div>
          </form>
        </div>
        <div className='logo'>
          <img src={LT} alt="little_tech"></img>
        </div>
      </div>
    </div>

  );
}

export default EdicaoAdmin;