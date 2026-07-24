const bcrypt = require("bcrypt");
const db = require("./config/db");

const createAdmin = async () => {
  const username = "admin";
  const password = "admin123";

  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(
    "INSERT INTO admins(username, password) VALUES(?, ?)",
    [username, hashedPassword],
    function (err) {
      if (err) {
        console.log(err.message);
      } else {
        console.log("✅ Admin Created Successfully");
      }

      process.exit();
    }
  );
};

createAdmin();