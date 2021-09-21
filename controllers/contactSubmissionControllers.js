const ContactSubmission = require('../models/contactSubmission');
const router = require('express').Router();

//CRUD//

//CREATE//
router.post('/', async (req, res) =>{
  try{
    const createdContactSubmission = await ContactSubmission.create(req.body)
    res.status(200).json(createdContactSubmission)
  }catch(error){
    console.error(error);
    res.status(400).json({message:error.message})

  }
})

//READ//
router.get('/', async (req, res) =>{
  try{
    const foundContactSubmission = await ContactSubmission.find({})
    res.status(200).json(foundContactSubmission)
  }catch(error){
    console.error(error);
    res.status(400).json({ message: error.message});
  }
})

/* Show */
      router.get('/:id', async (req, res) => {
        try{
          const foundContactSubmission = await ContactSubmission.findById(req.params.id)
          res.status(200).json(foundContactSubmission)
        }catch(error){
          console.error(error);
          res.status(400).json({ message: error.message });
        }
      })

//UPDATE//
router.put('/:id', async (req, res) => {
          try {
            const updatedContactSubmission = await ContactSubmission.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json(updatedContactSubmission)
          }catch(error){
            console.error(error);
            res.status(400).json({ message: error.message })
          }
        })

//DELETE//

router.delete('/:id', async (req, res) => {
        try{
          const deletedContactSubmission= await ContactSubmission.findByIdAndDelete(req.params.id);
          res.status(200).json(deletedContactSubmission);
        } catch(error){
          console.error(error);
          res.status(400).json({ message: error.message})
        }
      })

module.exports = router;
