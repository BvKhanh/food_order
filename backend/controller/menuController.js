// backend/controllers/menuController.js
const MenuItem = require('../models/menuItem');

const menuController = {
  getMenuItems: async (req, res) => {
    try {
      const items = await MenuItem.findAll();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getMenuByRestaurant: async (req, res) => {
    const { restaurantId } = req.params;
    try {
      const items = await Menu.findAllByRestaurant(restaurantId);
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  addMenuItem: async (req, res) => {
    const { name, price, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    try {
      const item = await MenuItem.create(name, price, category, image);
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateMenuItem: async (req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;
    try {
      const item = await MenuItem.update(id, name, price, category, image);
      res.json(item);
    } catch (error) {
      res.status(error.message === 'Không tìm thấy món ăn' ? 404 : 500).json({ message: error.message });
    }
  },

  deleteMenuItem: async (req, res) => {
    const { id } = req.params;
    try {
      await MenuItem.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(error.message === 'Không tìm thấy món ăn' ? 404 : 500).json({ message: error.message });
    }
  },
};

module.exports = menuController;