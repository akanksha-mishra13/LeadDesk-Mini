import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  const navigate = useNavigate();

  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const API_URL = "http://localhost:5001/api/leads";

  const fetchLeads = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${API_URL}?search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLeads(res.data);
    } catch (err) {
      console.log(err);

      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetchLeads();
  }, [search]);

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `${API_URL}/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchLeads();
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <h1>Admin Dashboard</h1>

        <button
          onClick={logout}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "320px",
          padding: "10px",
          marginBottom: "25px",
        }}
      />

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
          color: "black",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Budget</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {leads.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No leads found
              </td>
            </tr>
          ) : (
            leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.budget}</td>
                <td>{lead.message}</td>

                <td>
                  <select
                    value={lead.status}
                    onChange={(e) =>
                      updateStatus(lead.id, e.target.value)
                    }
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Closed">Closed</option>
                  </select>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#94a3b8",
        }}
      >
        Built for Digital Heroes Training Task ·{" "}
        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#60a5fa",
            textDecoration: "none",
          }}
        >
          digitalheroesco.com
        </a>
      </footer>
    </div>
  );
}

export default Admin;