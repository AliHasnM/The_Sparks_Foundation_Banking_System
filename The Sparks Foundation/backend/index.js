// createCustomers.js

const mongoose = require('mongoose');
const Customer = require('./models/customer'); // Assuming your model is in a file named customer.js

mongoose.connect("mongodb://127.0.0.1:27017/basic-banking-system");

const createCustomers = async () => {
  try {
    const customersData = [
      { name: "Alice", email: "alice@example.com", balance: 1000 },
      { name: "Bob", email: "bob@example.com", balance: 1500 },
      // Add more customers here
    ];

    for (let customerData of customersData) {
      const customer = new Customer(customerData);
      await customer.save();
      console.log(`Customer ${customer.name} added successfully`);
    }
  } catch (error) {
    console.error("Error creating customers:", error);
  } finally {
    mongoose.disconnect();
  }
};

createCustomers();
