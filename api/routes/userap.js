const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');




router.post('/addu',async (req,res) => {
   
   try{
       var emailExist =await User.findOne({email:req.body.email});
       if(emailExist) {
           return res.status(400).json("Email already exist");
       }
       var hash =await bcrypt.hash(req.body.password,10);
       
        const user =  new User({

             firstname : req.body.firstname,
             lastname :req.body.lastname,
             email : req.body.email,
             password : hash

   });


         var data =await user.save();

         res.json(data);
   } catch(err) {
       res.status(400).json(err);

   }

   res.json(user);



});


router.post('/',async (req,res) => {
    try{
        var userData =await User.findOne({email:req.body.email});
       if(!userData) {
           return res.status(400).json("Email not exist");
       }

       var validPsw = await bcrypt.compare(req.body.password,userData.password);

       if(!validPsw) {
        return res.status(400).json("password not valid");
       }
       var userToken = jwt.sign({email:userData.email},'shamanth');

       res.header('auth',userToken).json(userToken);
       
        

    }catch(err) {
        res.status(400).json(err);


    }
})

const validUser = (req,res,next) => {
    var token = req.header('auth');
    req.token = token;

    next();

}

router.get('/getAll',validUser,async(req,res) => {
    jwt.verify(req.token,'shamanth',async (err,data) => {
        if(err) {
            res.sendStatus(403)
        } else {
            const data = await User.find().select(['-password']);

            res.json(data);
        }

    })

 })


module.exports = router;

