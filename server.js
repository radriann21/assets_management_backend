import app from "./app.js";
import db from "./models/index.js";

const PORT = process.env.SERVER_PORT || 3001;

db.sequelize.authenticate()
  .then(() => {
    console.log("Database connection established successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
  });



