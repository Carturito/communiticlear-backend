import Server from "./models/server";
import dontenv from 'dotenv';

//Configuración de varibles de ambiente
dontenv.config();

const server = new Server();