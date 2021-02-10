const orm = require('../config/orm');

const burger = {
    selectAll(cb){
        orm.selectAll('burger', (res) => cb(res));
    },
    // val will be two values, the burger_name and if devoured is true/false
    insertOne(vals, cb){
        orm.insertOne('burger', vals, (res) => cb(res))
    },
    updateOne(devourVal, condition, cb){
        orm.updateOne('burger', devourVal, condition, (res) => cb(res))
    }
}

module.exports = burger;