import express from 'express';
import devBundle from './devBundle';//commented out when in production mode
import path from 'path';
import template from './../template';

const CURRENT_WORKING_DIR = process.cwd;
const app = express();
const PORT = process.env.PORT || 3000;

devBundle.compile(app)//commented out when in production mode only meant for development mode

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.get('/', (req, res) => {
    res.status(200).send(template())
})

app.listen(PORT, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info(`Server started on port %s. ${PORT}`)
})