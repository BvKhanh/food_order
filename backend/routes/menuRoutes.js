// backend/routes/menuRoutes.js
const express = require('express');
const router = express.Router();
const menuController = require('../controller/menuController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

router.get('/menu/:restaurantId', menuController.getMenuByRestaurant);
router.post('/menu', upload.single('image'), menuController.addMenuItem);
router.put('/menu/:id', upload.single('image'), menuController.updateMenuItem);
router.delete('/menu/:id', menuController.deleteMenuItem);

module.exports = router;