const DisabledDate = require('../models/disabledDate');
const router = require('express').Router();


//CRUD//

//CREATE//
router.post('/', async (req, res) =>{
  try{
    const createdDisabledDate = await DisabledDate.create(req.body)
    res.status(200).json(createdDisabledDate)
  }catch(error){
    console.error(error);
    res.status(400).json({message:error.message})

  }
})

//READ//
router.get('/', async (req, res) =>{
  try{
    const foundDisabledDate = await DisabledDate.find({})
    res.status(200).json(foundDisabledDate)
  }catch(error){
    console.error(error);
    res.status(400).json({ message: error.message});
  }
})

/* Show */
      router.get('/:id', async (req, res) => {
        try{
          const foundDisabledDate = await DisabledDate.findById(req.params.id)
          res.status(200).json(foundDisabledDate)
        }catch(error){
          console.error(error);
          res.status(400).json({ message: error.message });
        }
      })

//UPDATE//
router.put('/:id', async (req, res) => {
          try {
            const updatedDisabledDate = await DisabledDate.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json(updatedDisabledDate)
          }catch(error){
            console.error(error);
            res.status(400).json({ message: error.message })
          }
        })

//DELETE//

router.delete('/:id', async (req, res) => {
        try{
          const deletedDisabledDate = await DisabledDate.findByIdAndDelete(req.params.id);
          res.status(200).json(deletedDisabledDate);
        } catch(error){
          console.error(error);
          res.status(400).json({ message: error.message})
        }
      })

module.exports = router;
