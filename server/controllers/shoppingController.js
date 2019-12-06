const pool = require('../model/ShoppingCartModel')

const shoppingController = {};


// add banana to database ====================================================
shoppingController.addBanana = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const queryString = 'INSERT INTO fruits (type) VALUES ($1)'
    const values = [
        req.body.fruit
    ];
    pool.query(queryString, values, (err, data) => {
        if (err) {
            console.warn(err, 'is the error')
        } else {
            res.status(200)
        }
    })
    next();
}

// banana Calculation ========================================================
shoppingController.calculateBanana = (req, res, next) => {
    const queryString = 'SELECT type FROM fruits'
    pool.query(queryString, (err, data) => {
        if (err) {
            console.warn(err, 'is the error from the fetch')
        } else {
            const filtered = data.rows.filter(function(el){
                return el.type === 'banana'
            })
            res.send(filtered)
        }
    })
}

// add durian to database ====================================================
shoppingController.addDurian = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const queryString = 'INSERT INTO fruits (type) VALUES ($1)'
    const values = [
        req.body.fruit
    ];
    pool.query(queryString, values, (err, data) => {
        if (err) {
            console.warn(err, 'is the error')
        } else {
            res.status(200);  
        }
    })
    next()
}

// calculate durian =========================================================
shoppingController.calculateDurian = (req, res, next) => {
    const queryString = 'SELECT type FROM fruits'
    pool.query(queryString, (err, data) => {
        if (err) {
            console.warn(err, 'is the error from the fetch')
        } else {
            const filtered = data.rows.filter(function(el){
                return el.type === 'durian'
            })
            res.send(filtered)
        }
    })
}

// add apple to database ====================================================
shoppingController.addApple = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const queryString = 'INSERT INTO fruits (type) VALUES ($1)'
    const values = [
        req.body.fruit
    ];
    pool.query(queryString, values, (err, data) => {
        if (err) {
            console.warn(err, 'is the error')
        } else {
            res.status(200);  
        }
    })
    next()
}

// calculate Apple =========================================================
shoppingController.calculateApple = (req, res, next) => {
    const queryString = 'SELECT type FROM fruits'
    pool.query(queryString, (err, data) => {
        if (err) {
            console.warn(err, 'is the error from the fetch')
        } else {
            const filtered = data.rows.filter(function(el){
                return el.type === 'apple'
            })
            res.send(filtered)
        }
    })

}

// add cranberry to database =============================================
shoppingController.addCranberry = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const queryString = 'INSERT INTO fruits (type) VALUES ($1)'
    const values = [
        req.body.fruit
    ];
    pool.query(queryString, values, (err, data) => {
        if (err) {
            console.warn(err, 'is the error')
        } else {
            res.status(200);  
        }
    })
    next()
}

shoppingController.calculateCranberry = (req, res, next) => {
    const queryString = 'SELECT type FROM fruits'
    pool.query(queryString, (err, data) => {
        if (err) {
            console.warn(err, 'is the error from the fetch')
        } else {
            const filtered = data.rows.filter(function(el){
                return el.type === 'cranberry'
            })
            res.send(filtered)
        }
    })
}

// delete all data =======================================================
shoppingController.deleteData = (req, res, next) => {
    const queryString = 'DELETE FROM fruits'
    pool.query(queryString, (err, data) => {
        if (err) {
            console.warn(err, 'error deleting from database')
        } else {
            res.status(200).end()
        }
    })
}


// ================= read all data from database
shoppingController.getAllData = (req, res, next) => {
    const queryString = 'SELECT type FROM fruits'
    pool.query(queryString, (err, data) => {
        if (err) {
            console.warn(err, 'is the error from the fetch')
        } else {
            res.send(data.rows)
        }
    })
}




module.exports = shoppingController;