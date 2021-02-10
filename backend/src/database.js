const mongoose = require('mongoose');

mongoose.connect('mongodb://Localhost/mean-employees',{
                  useUnifiedTopology:true,    //variable spara no que nos muestre advertencias en console.
                  useNewUrlParser:true,
                  useFindAndModify:false
                }           
                  )
        .then((db)=> console.log("Db is connected"))
        .catch((err)=>console.log(err));


