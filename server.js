const express = require('express');
const cors = require('cors');

require('./src/database');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', require('./src/routes/routes'));

app.listen(3000);