const express = require("express");
const router = express.Router();
let QuotesFunction = require('../middleware/quotesFunction')

router.get('/',async (req,res)=>{
    let Data = []
    await QuotesFunction.FindinCol1().then(function(items){
        Data = items
    }, function(err) {
        console.log('The promise was rejected',err);
      })  
    res.status(200).json(Data)
})



module.exports = router;

