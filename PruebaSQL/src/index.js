import express from 'express';
import consign from 'consign';
//consign ayuda a dividir los archivos con sus metodos ( include, then, into). 

const app = express();

consign({
        cwd: __dirname})
    .include('libs/config.js')
    .then('db.js')
    .then("libs/middlewares.js")
    .then('routes')
    .then('libs/boot.js')
    .into(app)