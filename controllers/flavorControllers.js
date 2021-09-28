const Flavor = require('../models/flavor');
const router = require('express').Router();


//CRUD//

//CREATE//
router.post('/', async (req, res) =>{
  try{
    const createdFlavor = await Flavor.create(req.body)
    res.status(200).json(createdFlavor)
  }catch(error){
    console.error(error);
    res.status(400).json({message:error.message})

  }
})

//READ//
router.get('/', async (req, res) =>{
  try{
    const foundFlavor = await Flavor.find({})
    res.status(200).json(foundFlavor)
  }catch(error){
    console.error(error);
    res.status(400).json({ message: error.message});
  }
})

/* Show */
      router.get('/:id', async (req, res) => {
        try{
          const foundFlavor = await Flavor.findById(req.params.id)
          res.status(200).json(foundFlavor)
        }catch(error){
          console.error(error);
          res.status(400).json({ message: error.message });
        }
      })

//UPDATE//
router.put('/:id', async (req, res) => {
          try {
            const updatedFlavor = await Flavor.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json(updatedFlavor)
          }catch(error){
            console.error(error);
            res.status(400).json({ message: error.message })
          }
        })

//DELETE//

router.delete('/:id', async (req, res) => {
        try{
          const deletedFlavor = await Flavor.findByIdAndDelete(req.params.id);
          res.status(200).json(deletedFlavor);
        } catch(error){
          console.error(error);
          res.status(400).json({ message: error.message})
        }
      })

module.exports = router;
