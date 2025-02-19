import { useEffect, useState } from "react";
import './AdminMessages.css'

// import { useNavigate } from "react-router-dom"; // Uncomment if navigation is needed

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const navigate = useNavigate(); // Uncomment if navigation is needed

  useEffect(() => {
    console.log("AdminMessages useEffect triggered");


    const fetchMessages = async () => {
      console.log("Fetching messages...");

      try {
        // Use the relative URL so the Vite proxy handles the request
        const response = await fetch("/api/admin/messages", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch messages. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Messages:", data);
        // Since the response is an array of messages, set it directly.
        setMessages(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p>Loading messages...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="admin-messages-wrapper">
      <div className="admin-messages-container">
        <h2>Contact Messages</h2>
        {messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          <div className="messages-table-wrapper">
            <table className="messages-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr key={msg.id}>
                    <td>{msg.id}</td>
                    <td>{msg.name}</td>
                    <td>{msg.email}</td>
                    <td>{msg.phone || "N/A"}</td>
                    <td>{msg.message}</td>
                    <td>{msg.submitted_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};


export default AdminMessages;
