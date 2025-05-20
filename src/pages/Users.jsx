import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch(() => {
        setError('Failed to load users.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">User List</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left border border-gray-200">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-6 py-3 border-b">#</th>
              <th className="px-6 py-3 border-b">Photo</th>
              <th className="px-6 py-3 border-b">Name</th>
              <th className="px-6 py-3 border-b">Email</th>
              <th className="px-6 py-3 border-b">Phone</th>
              <th className="px-6 py-3 border-b">Age</th>
              <th className="px-6 py-3 border-b">City</th> {/* Added City column */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b">{idx + 1}</td>
                <td className="px-6 py-4 border-b">
                  <img src={user.image} alt={user.firstName} className="w-10 h-10 rounded-full object-cover" />
                </td>
                <td className="px-6 py-4 border-b">{user.firstName} {user.lastName}</td>
                <td className="px-6 py-4 border-b">{user.email}</td>
                <td className="px-6 py-4 border-b">{user.phone}</td>
                <td className="px-6 py-4 border-b">{user.age}</td>
                <td className="px-6 py-4 border-b">{user.address ? user.address.city : 'N/A'}</td> {/* Added City from address */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
