const express=require('express')
const router=express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

const Task=require('../models/Task')

//@desc Login/Landing Page
//@route GET/
router.get('/', ensureGuest, (req,res)=>{
            //todo
})

//@desc Login/Landing Page
//@route GET/
router.get('/dashboard', ensureAuth, async (req,res)=>{
    try{
        const tasks=await Task.find({ user:req.user.id}).lean()
            //todo
    }catch(err){
        console.error(err)
        //todo

    }
   
})



module.exports=router
