const Announcement = require('../models/announcement');
const router = require('express').Router();


//CRUD//

//CREATE//
router.post('/', async (req, res) =>{
  try{
    const createdAnnouncement = await Announcement.create(req.body)
    res.status(200).json(createdAnnouncement)
  }catch(error){
    console.error(error);
    res.status(400).json({message:error.message})

  }
})

//READ//
router.get('/', async (req, res) =>{
  try{
    const foundAnnouncement = await Announcement.find({})
    res.status(200).json(foundAnnouncement)
  }catch(error){
    console.error(error);
    res.status(400).json({ message: error.message});
  }
})

/* Show */
      router.get('/:id', async (req, res) => {
        try{
          const foundAnnouncement = await Announcement.findById(req.params.id)
          res.status(200).json(foundAnnouncement)
        }catch(error){
          console.error(error);
          res.status(400).json({ message: error.message });
        }
      })

//UPDATE//
router.put('/:id', async (req, res) => {
          try {
            const updatedAnnouncement = await Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json(updatedAnnouncement)
          }catch(error){
            console.error(error);
            res.status(400).json({ message: error.message })
          }
        })

//DELETE//

router.delete('/:id', async (req, res) => {
        try{
          const deletedAnnouncement = await Announcement.findByIdAndDelete(req.params.id);
          res.status(200).json(deletedAnnouncement);
        } catch(error){
          console.error(error);
          res.status(400).json({ message: error.message})
        }
      })

module.exports = router;
