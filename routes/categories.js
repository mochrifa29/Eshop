const express = require('express')
const router = express.Router()
const {getAllCategories, storeCategory, detailCategories, updateCategories,deleteCategories} = require('../controller/CategoryController')


//Read
router.get('/',getAllCategories )

//Detail
router.get('/:id',detailCategories )

//Create
router.post('/store',storeCategory )

//Update
router.put('/update/:id',updateCategories )

//Destroy
router.delete('/delete/:id',deleteCategories )

module.exports = router
