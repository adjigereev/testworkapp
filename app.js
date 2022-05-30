let express = require('express');

let cookieParser = require('cookie-parser');
let logger = require('morgan');
const dbConnect = require('./db/config')
let indexRouter = require('./routes/index');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    dbConnect()
    console.log(`Сервер запущен на ${port}`)
});