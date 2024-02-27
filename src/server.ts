import app from './app';
import config from './config';
import { Server } from 'http';

let server: Server

const bootstrap = () => {
    try {
        server = app.listen(config.port, () => {
            console.log(`App running on port ${config.port}`);
        });
    } catch (error) {

    }
}

bootstrap();