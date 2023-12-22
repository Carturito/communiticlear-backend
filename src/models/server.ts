import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routsClient from '../routes/client';
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midelwares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicación corriendo en el puerto ${this.port}`)
        });
    }

    routes() {
        this.app.get('/',(req: Request, res: Response) => {
            res.json({
                msg: 'API Working'
            })
        })
        this.app.use('/api/clients', routsClient)
    }

    midelwares() {
        //parseo del body
        this.app.use(express.json())

        //cors
        this.app.use(cors())
    }

    async dbConnect() {

        try {
            await db.authenticate();
            console.log('Base de datos conectada');
        } catch (error) {
            console.log(error);
            console.log('Error al conectar a la base de datos');
        }
    }
}
export default Server;