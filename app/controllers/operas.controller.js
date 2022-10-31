import { db } from "../../models/index.js"
const Opera = db.opera;
const operaActions = {}

//POST
operaActions.new = async(req, res, next) => {
    if (!req.body){
        res.status(400).json({message:"Fields cannot be blank"})
    }
    try {
        let opera = await Opera.create({
            name: req.body.name,
            language: req.body.language,
            composer: req.body.composer,
            characters: req.body.characters,
            chorus: req.body.chorus,
            year: req.body.year,
            instrumentation: req.body.instrmentation
        })
        console.log(opera)
        res.status(200).json(opera)
    }catch(err){
        console.log(err)
        res.status(500).json({message: err.message})
    }
}

//GET

//PUT

//DELETE

export default operaActions