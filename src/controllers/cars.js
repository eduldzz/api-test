const {Car} = include('models');

class CarsController {
    static async fetch(req, res, next) {
        try {
            const cars = await Car.find(req.query);
            const total = await Car.countDocuments();
            console.log(total);
            res.send({
                cars,
                total: 20,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }
}

module.exports = CarsController;
