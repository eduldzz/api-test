const {Animal} = include('models');

class AnimalsController {
    static async fetch(req, res, next) {
        try {
            const animals = await Animal.find(req.query);
            const total = await Animal.countDocuments();
            console.log(total);
            res.send({
                animals,
                total: 20,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }
}

module.exports = AnimalsController;
