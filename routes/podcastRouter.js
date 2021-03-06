import express from 'express';
import controller from '../controller/podcastController.js';

const app = express();

app.post('/podcast', controller.create);
app.get('/podcast', controller.findAll);
app.get('/podcast/:id', controller.findOne);
app.put('/podcast', controller.update);
app.delete('/podcast', controller.remove);

export { app as podcastRouter };