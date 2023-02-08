const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

 const routeruser = require('./routes/user');
 const routerpost = require('./routes/post');
 const routercomment = require('./routes/comment');
 const routerget = require('./routes/get');
 const routergetuser = require('./routes/getuser');
 const routerresetpassword = require('./routes/resetPassword');
 const routerconversation = require('./routes/conversation');
 const routermessage = require('./routes/message');

// middleware

app.use(express.json());

// routes

app.use('/user', routeruser);
 app.use('/post', routerpost);
 app.use('/', routercomment);
 app.use('/get', routerget);
 app.use('/getuser', routergetuser);
 app.use('/', routerresetpassword);
 app.use('/conversation', routerconversation);
 app.use('/', routermessage);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
