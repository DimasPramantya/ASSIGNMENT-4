const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const rootPath = require('./util/path');
const {router: adminRoutes} = require('./routes/admin');
const userRoutes = require('./routes/user');
const notFound = require('./middleware/404');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',express.static(path.join(rootPath, 'public')));
app.use('/',express.static(path.join(rootPath, 'public')));

app.set('view engine','pug');

app.use('/admin',adminRoutes)
app.use(userRoutes)
app.use('/404', (req,res,next)=>{
    res.status(404).render(path.join(rootPath,'views','404.pug'));
})
app.use(notFound);

app.listen(3000,()=>{
    console.log('server is listening on port 3000');
})