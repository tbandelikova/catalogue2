const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const mysql = require('mysql2');
const DB_CONNECTION = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'BandBandsql1712',
    database: 'catalogue'
}

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));

const connection = mysql.createConnection({
    host: DB_CONNECTION.host,
    port: DB_CONNECTION.port,
    user: DB_CONNECTION.user,
    password: DB_CONNECTION.password,
    database: DB_CONNECTION.database
});

connection.connect((err) => {
    if(!err) {
      console.log('SUCCESS')
    } else {
      console.error('error',err)
    }
});

app.get('/list', cors(corsOptions), (req, res) => {
    connection.query('SELECT * FROM coins;', (err, data) => {
        if (err) {
            console.error("Error: ", err);
        } else {
            res.status(200).json(data);
        }
    });
});

app.get('/search', cors(corsOptions), (req, res) => {
    const { inputValue, country, composition, quality, fromPrice, toPrice, fromYear, toYear} = req.query;

    let dbSearch = `SELECT * FROM coins WHERE TRUE`

    if (inputValue) {
        dbSearch += ` AND about_info LIKE '%${inputValue}%'`
    }
    if (country) {
        dbSearch += ` AND country='${country}'`
    }
    if (composition) {
        dbSearch += ` AND composition='${composition}'`
    }
    if (quality) {
        dbSearch += ` AND quality='${quality}'`
    }
    if (fromPrice) {
        dbSearch += ` AND price >= ${+fromPrice}`
    }
    if (toPrice) {
        dbSearch += ` AND price <= ${+toPrice}`
    }
    if (fromYear) {
        dbSearch += ` AND year_of_issue >= ${+fromYear}`
    }
    if (toYear) {
        dbSearch += ` AND year_of_issue <= ${+toYear}`
    }

        connection.query(
            `${dbSearch};`, (err, data) => {
            if (err) {
                console.error("Error: ", err);
            } else {
                res.status(200).json(data);
            }
        });
});

app.get('/category/:id', cors(corsOptions), (req, res) => {
    connection.query(`SELECT * FROM coins WHERE category_id=${+req.params.id};`, (err, data) => {
      if (err) {
          console.error("Error: ", err);
      } else {
        res.status(200).json(data);
      }
    });
});

app.get('/list/:id', cors(corsOptions), (req, res) => {
  connection.query(`SELECT * FROM coins WHERE id=${+req.params.id};`, (err, data) => {
    if (err) {
        console.error("Error: ", err);
    } else {
        res.status(200).json(data);
    }
  });
});

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});