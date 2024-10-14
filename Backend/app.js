const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const app=new express()
app.use(morgan('dev'));
app.use(cors())
const courseRoutes=require('./routes/basicroutes');
app.use('/course',courseRoutes);
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');






app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

