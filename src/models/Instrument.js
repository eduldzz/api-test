const toNumber = require('lodash/toNumber');
const {PAGE_SIZE} = process.env;
const createModel = include('helpers/modelCreate');

const name = 'Instrument';
const tableName = 'instrument';

const selectableProps = [
    'instrument',
    'hexcode',
    'family',
    'createdAt',
    'updatedAt',
    'deletedAt',
    '__v'
];

class InstrumentModel extends createModel {
    constructor(props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }

    find({
        skip, filter = {}
    }) {
        const results = this.knex.select()
            .from(this.tableName)
            .where(filter)
            .limit(PAGE_SIZE).offset(toNumber(PAGE_SIZE) * toNumber(skip));

        return results;
    }
}

module.exports = knex => new InstrumentModel({knex});
