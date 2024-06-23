import axios from "axios";

/*
  USUARIO:
     ID: INTEGER, PK
     Nome: STRING
     Email: STRING
     Senha: STRING
     Role: ENUM (Administrador, Ouvinte)
  MUSICA:
     ID: INTEGER, PK
     Foto: STRING
     Titulo: STRING
     ArtistaID: INTEGER, FK
     Categoria: STRING
  ARTISTA:
     ID: INTEGER, PK
     Nome: STRING
     Nacionalidade: STRING
     Foto: STRING
*/

const api = axios.create({
  baseURL : 'http://localhost:3030/api',
  withCredentials : true
});

export default api