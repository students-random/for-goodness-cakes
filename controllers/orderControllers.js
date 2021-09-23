const Order = require('../models/order');
const router = require('express').Router();


//CRUD//

//CREATE//
router.post('/', async (req, res) =>{
  try{
    const createdOrder = await Order.create(req.body)
    res.status(200).json(createdOrder)
  }catch(error){
    console.error(error);
    res.status(400).json({message:error.message})

  }
})

//READ//
router.get('/', async (req, res) =>{
  try{
    const foundOrder = await Order.find({})
    res.status(200).json(foundOrder)
  }catch(error){
    console.error(error);
    res.status(400).json({ message: error.message});
  }
})

/* Show */
      router.get('/:id', async (req, res) => {
        try{
          const foundOrder = await Order.findById(req.params.id)
          res.status(200).json(foundOrder)
        }catch(error){
          console.error(error);
          res.status(400).json({ message: error.message });
        }
      })

//UPDATE//
router.put('/:id', async (req, res) => {
          try {
            const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json(updatedOrder)
          }catch(error){
            console.error(error);
            res.status(400).json({ message: error.message })
          }
        })

//DELETE//

router.delete('/:id', async (req, res) => {
        try{
          const deletedOrder = await Order.findByIdAndDelete(req.params.id);
          res.status(200).json(deletedOrder);
        } catch(error){
          console.error(error);
          res.status(400).json({ message: error.message})
        }
      })

module.exports = router;
