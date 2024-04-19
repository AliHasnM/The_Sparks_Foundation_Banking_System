const Customer = require('../models/customer');
const Transfer = require('../models/transfer');

exports.transferMoney = async (req, res) => {
  const { from, to, amount } = req.body;
  try {
    const fromCustomer = await Customer.findById(from);
    const toCustomer = await Customer.findById(to);

    if (!fromCustomer || !toCustomer) {
      return res.status(404).json({ message: 'Customers not found' });
    }

    if (fromCustomer.balance < amount) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    fromCustomer.balance -= amount;
    toCustomer.balance += amount;

    await fromCustomer.save();
    await toCustomer.save();

    const transfer = new Transfer({ from, to, amount });
    await transfer.save();

    res.status(201).json({ message: 'Transfer successful' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
