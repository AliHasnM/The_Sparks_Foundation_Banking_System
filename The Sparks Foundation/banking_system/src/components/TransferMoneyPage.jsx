import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TransferMoneyPage() {
  const [fromCustomerName, setFromCustomerName] = useState("");
  const [toCustomerName, setToCustomerName] = useState("");
  const [amount, setAmount] = useState("");
  const [customers, setCustomers] = useState([]);
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState(null);

  useEffect(() => {
    // Fetch list of customers for mapping names to IDs
    axios
      .get("http://localhost:5000/api/customers")
      .then((response) => setCustomers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const getCustomerIdFromName = (name) => {
    const customer = customers.find((customer) => customer.name === name);
    return customer ? customer._id : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fromCustomerId = getCustomerIdFromName(fromCustomerName);
    const toCustomerId = getCustomerIdFromName(toCustomerName);
    if (!fromCustomerId || !toCustomerId) {
      console.error("Customer not found");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/transfers", {
        from: fromCustomerId,
        to: toCustomerId,
        amount,
      });
      setTransactionDetails({
        from: fromCustomerName,
        to: toCustomerName,
        amount,
        message: "Money transfer successful",
      });
      setShowTransactionForm(true);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  if (showTransactionForm && transactionDetails) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 text-xl py-4">
        <h1 className="font-semibold text-2xl py-3">Transaction Details</h1>
        <p>From: {transactionDetails.from}</p>
        <p>To: {transactionDetails.to}</p>
        <p>Amount: {transactionDetails.amount}</p>
        <p>{transactionDetails.message}</p>
        <Link
          to="/"
          className="bg-zinc-600 rounded-md py-2 px-4 text-xl text-white hover:text-blue-200"
        >
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center py-6">
        <h1 className="text-2xl font-semibold">Transfer Money</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 pb-3 text-xl"
      >
        <div className="flex items-center justify-center gap-4">
          <label>From Customer Name:</label>
          <select
            className="border rounded-md px-4"
            value={fromCustomerName}
            onChange={(e) => setFromCustomerName(e.target.value)}
          >
            <option value="">Select Customer</option>
            {customers.map((customer) => (
              <option key={customer._id} value={customer.name}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-center gap-4">
          <label>To Customer Name:</label>
          <select
            className="border rounded-md px-4"
            value={toCustomerName}
            onChange={(e) => setToCustomerName(e.target.value)}
          >
            <option value="">Select Customer</option>
            {customers.map((customer) => (
              <option key={customer._id} value={customer.name}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-center gap-4">
          <label>Amount:</label>
          <input
            className="border rounded-md px-4"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            className="bg-zinc-600 rounded-md py-2 px-4 text-xl text-white hover:text-blue-200"
            type="submit"
          >
            Transfer Money
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransferMoneyPage;
