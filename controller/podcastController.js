import { db } from '../models/index.js';

const Podcast = db.podcast;

const create = async (req, res) => {
    const podcast = new Podcast({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        rss: req.body.rss,
        itunes: req.body.itunes,
        soundcloud: req.body.soundcloud,
        source: req.body.source,
    });

    try {
        const data = await podcast.save(Podcast);
        res.send(data);
    } catch (error) {
        res.status(500).send('Erro!!');
    }
};

const findAll = async (_req, res) => {
    try {
        const data = await Podcast.find({});
        res.send(data)
    } catch (error) {
        res.status(500).send('Erro ao salver');
    }
}

const findOne = async (req, res) => {
    const id = req.body.params.id;
    try {
        const data = await Podcast.findByID(id);
    } catch (error) {
        res.status(500).send('Erro ao salver');
    }
}

const update = async (req, res) => {
    const id = req.body.params.id;
    try {
        const data = await Podcast.findByIDAndUpdate(id, req.body);
        res.send(data);
    } catch (error) {
        res.status(500).send('Erro ao salver');

    }
}

const remove = async (req, res) => {
    const id = req.body.params.id;
    try {
        await Podcast.findByIDAndRemove(id);
        res.send('Escluido com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao salver');

    }
}

export default { create, findAll, findOne, update, remove }