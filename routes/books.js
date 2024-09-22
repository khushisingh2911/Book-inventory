const express = require('express');
const router = express.Router();
const pool = require('../db/db'); 
const { Parser } = require('json2csv');

let lastSearchQuery = '';


router.get('/', (req, res) => {
  res.render('index', { books: [], showBooks: false }); 
});


router.post('/search', async (req, res) => {
  const { query } = req.body;
  lastSearchQuery = query; 

  try {
    const result = await pool.query('SELECT * FROM books WHERE title ILIKE $1', [`%${query}%`]);
    res.render('index', { books: result.rows, showBooks: true }); 
  } catch (err) {
    console.error(err.message);
    res.render('index', { books: [], showBooks: false }); 
  }
});



router.get('/signin', (req, res) => {
  res.render('signin'); });


router.get('/register', (req, res) => {
  res.render('register'); 
});

router.get('/add', (req, res) => {
  res.render('add'); 
});

router.post('/add', async (req, res) => {
  const { title, author, genre, publication_date, isbn } = req.body;
  try {
    await pool.query(
      'INSERT INTO books (title, author, genre, publication_date, isbn) VALUES ($1, $2, $3, $4, $5)',
      [title, author, genre, publication_date, isbn]
    );
    return res.json({ success: true, message: 'Book added successfully!' });
  } catch (err) {
    console.error(err.message);
    return res.json({ success: false, message: 'Failed to add book.' });
  }
});

router.get('/export/csv', async (req, res) => {
  if (!lastSearchQuery) {
    return res.status(400).send('No search query available for export.');
  }

  try {
    const searchQuery = 'SELECT * FROM books WHERE title ILIKE $1';
    const result = await pool.query(searchQuery, [`%${lastSearchQuery}%`]);
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(result.rows);

    res.header('Content-Type', 'text/csv');
    res.attachment('book.csv');
    res.send(csv);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error exporting data');
  }
});


router.get('/filter', (req, res) => {
  const genres = ['Romance', 'Non-Fiction', 'Mystery', 'Fantasy', 'Science Fiction'];
  res.render('filter', { genres });
});


router.get('/filter/:genre', async (req, res) => {
  const { genre } = req.params;
  const query = 'SELECT * FROM books WHERE genre = $1';

  try {
    const result = await pool.query(query, [genre]);
    res.render('index', { books: result.rows, showBooks: true }); 
  } catch (err) {
    console.error(err.message);
    res.render('index', { books: [], showBooks: false }); 
  }
});


module.exports = router;
