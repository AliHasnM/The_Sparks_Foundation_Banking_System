import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewCustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/customers")
      .then((res) => {
        setCustomers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Ensure that customers is always initialized as an array
  if (!Array.isArray(customers)) {
    console.error("Customers data is not an array:", customers);
    setCustomers([]);
    return <div>Error: Customers data is not an array</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-center py-2">
        <h2 className="text-2xl font-semibold mb-4">Customers</h2>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Account Balance
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {customer.balance}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  to={`/customer/${customer._id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="py-4 flex items-center justify-center">
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

export default ViewCustomersPage;
