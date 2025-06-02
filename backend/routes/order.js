//order.js
import Express from "express"
import { Orders, Users } from '../models/index.js';
const router = Express.Router()

router.post('/api/orders', async (req, res) => {
  const { email, saladCount, baconCount, cheeseCount, meatCount, price } = req.body;

  try {
    const user = await Users.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await Orders.create({
      userId: user.id,
      saladCount,
      baconCount,
      cheeseCount,
      meatCount,
      price
    });

    res.status(200).json({ message: "Order Success!" });

  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Database error", error });
  }
});

router.get('/api/orders/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const allOrders = await Orders.findAll({
      where: { userId: userId }
    });

    res.json(allOrders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

router.delete('/api/orders/:id', async (req, res) => {
  const orderId = req.params.id;
  try {
    const deleted = await Orders.destroy({
      where: { id: orderId }
    });
    if (deleted) {
      res.status(200).json({ message: 'Order deleted successfully' });
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  }
  catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

export default router;