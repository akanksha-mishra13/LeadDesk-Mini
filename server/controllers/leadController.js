const db = require("../config/db");

// Create Lead
const createLead = (req, res) => {
  const { name, email, budget, message } = req.body;

  if (!name || !email || !budget || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const sql =
    "INSERT INTO leads(name, email, budget, message) VALUES(?, ?, ?, ?)";

  db.run(sql, [name, email, budget, message], function (err) {
    if (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }

    res.status(201).json({
      success: true,
      message: "Lead submitted successfully",
      id: this.lastID,
    });
  });
};

// Get Leads (with search)
const getLeads = (req, res) => {
  const search = req.query.search || "";

  db.all(
    `SELECT * FROM leads
     WHERE name LIKE ?
     OR email LIKE ?
     ORDER BY createdAt DESC`,
    [`%${search}%`, `%${search}%`],
    (err, rows) => {
      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      res.json(rows);
    }
  );
};

// Update Lead Status
const updateLeadStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  db.run(
    "UPDATE leads SET status = ? WHERE id = ?",
    [status, id],
    function (err) {
      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      res.json({
        success: true,
        message: "Status updated successfully",
      });
    }
  );
};

module.exports = {
  createLead,
  getLeads,
  updateLeadStatus,
};