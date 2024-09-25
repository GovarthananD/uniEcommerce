import express from "express";
import { productModule } from "./productModel.js";

const router = express.Router();


router.post("/addCloths", (req, res) => {
    try{
        let newCloths = new productModule(req.body);
        newCloths.save().then((data) => {
            res.status(200).send({message:"Product Added Successfully", data});
        })
    }catch(error){
        res.status(500).send({message:"Internal Server Error", error});
    }
});

router.get("/getData", (req, res) => {
    try{
        productModule.find()
        .then((data) => res.status(201).send({message: "Data has been retrieved", data}))
    }catch(error){
        res.status(500).send({message:"Internal Server Error", error});
    }
});

router.get("/:type", async (req, res) => {
    try{
     
    }catch(error){
        res.status(500).send({message:"Internal Server Error", error});
    }
})

router.get("/getData/:_id", (req, res) => {
   const {id} = req.params;
   const result = productModule.find({id:_id})
   result ? res.status(201).send(result) : res.status(404).send({message:"Movie Not Found"})
})


export const productRouter = router;