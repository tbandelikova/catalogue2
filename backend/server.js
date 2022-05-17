const express = require('express');
const app = express();
const port = 5000;
const mysql = require('mysql2');
const DB_CONNECTION = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'BandBandsql1712',
    database: 'catalogue'
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get('/list', (req, res) => {
    connection.query('SELECT * FROM coins;', (err, data) => {
        if (err) {
            console.error("Error: ", err);
        } else {
            res.status(200).json(data);
        }
    });
});

app.get('/search', (req, res) => {
    const { inputValue, country, composition, quality, fromPrice, toPrice, fromYear, toYear} = req.query;

    let dbSearch = `SELECT * FROM coins WHERE TRUE`

    if (inputValue) {
        dbSearch += ` AND about_info LIKE '%${inputValue}%'`
    }
    if (country, composition, quality) {
        dbSearch += ` AND country='${country}' AND composition='${composition}' AND quality='${quality}'`
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

app.get('/category/:id', (req, res) => {
    connection.query(`SELECT * FROM coins WHERE category_id=${+req.params.id};`, (err, data) => {
      if (err) {
          console.error("Error: ", err);
      } else {
        res.status(200).json(data);
      }
    });
});

app.get('/list/:id', (req, res) => {
  connection.query(`SELECT * FROM coins WHERE id=${+req.params.id};`, (err, data) => {
    if (err) {
        console.error("Error: ", err);
    } else {
        res.status(200).json(data);
    }
  });
});

app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});