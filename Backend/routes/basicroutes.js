const express=require('express');
const router=express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));
const courseModel=require('../model/courseData');
//GET operation
router.get('/',async (req,res)=>{
    try {
        const data=await courseModel.find();
        res.status(200).send(data);  
    } catch (error) {
        res.status(404) .send('data not found')
    }

})
router.post('/addcourse',async (req,res)=>{
    try {
        var item=req.body;
        const data1=new courseModel(item);
        const saveddata=await data1.save();
        res.status(200).send('post successful')
    } catch (error) {
        res.status(404) .send('post unsuccessful')
    }
})
router.put('/edit/:id',async (req,res)=>{
    try {
      const id=req.params.id;
      const data=await courseModel.findByIdAndUpdate(id,req.body)
      res.status(200).send('upadate successful')
    } catch (error) {
      res.status(404).send('upadate unsuccessful')
    }
})
//delete
router.delete('/delete/:id',async (req,res)=>{
  try {
    const id=req.params.id;
    const data=await courseModel.findByIdAndDelete(id)
    res.status(200).send('delete successful')
  } catch (error) {
    res.status(404).send('delete unsuccessful')
  }
})
      
module.exports = router;
      
    