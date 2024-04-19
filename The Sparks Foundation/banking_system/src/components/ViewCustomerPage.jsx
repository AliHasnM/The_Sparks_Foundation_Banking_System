import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ViewCustomerPage() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/customers/${id}`)
      .then((res) => setCustomer(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      <div className="flex items-center justify-center py-2">
        <h2 className="text-2xl font-semibold mb-4">Customer Detail</h2>
      </div>
      <div className="flex flex-col gap-3 py-4">
        <h2 className="text-2xl font-semibold mb-4">{customer.name}</h2>
        <p className="text-gray-600">Email: {customer.email}</p>
        <p className="text-gray-600">Balance: {customer.balance}</p>
      </div>
      <div className="flex justify-between">
        <Link
          to="/customers"
          className="bg-zinc-600 rounded-md py-2 px-4 text-xl text-white hover:text-blue-200"
        >
          Back
        </Link>
        <Link
          to="/transfer"
          className="bg-zinc-600 rounded-md py-2 px-4 text-xl text-white hover:text-blue-200"
        >
          Transfer Money
        </Link>
      </div>
    </div>
  );
}

export default ViewCustomerPage;
