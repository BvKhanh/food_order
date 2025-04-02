// backend/models/menu.js
const db = require('../config/db');

const Menu = {
  findAllByRestaurant: async (restaurantId) => {
    const [rows] = await db.query(
      'SELECT * FROM Menu WHERE restaurant_id = ? AND is_available = TRUE',
      [restaurantId]
    );
    return rows;
  },
  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM Menu WHERE menu_id = ?', [id]);
    return rows[0];
  },
};

module.exports = Menu;