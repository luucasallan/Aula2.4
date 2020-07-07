// imports
import express from 'express';
import { podcastRouter } from './routes/podcastRouter.js';
import { db } from './models/index.js';

//Conexão ao MongoDB pelo Mongoose
(async () => {
    try {
        await db.mongoose.connect(db.url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log('Conectado ao MongoDB.');
    } catch (error) {
        console.log(`Erro ao conectar ao Mongoose: ${error}`);
    }
})();

const app = express();
const port = 3000;

app.use(express.json());
app.use(podcastRouter);

app.get('/', (req, res) => {
    res.send("API em execução")
});
// para levantar o servidor
app.listen(port, () => {
    try {
        console.log(`Start API! Acesse na url: http://localhost:${port}`);
    } catch (error) {
        console.log(`Falha ao inicar o servido ${error}`);

    }
});