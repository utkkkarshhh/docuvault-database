const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const generateMigration = (name) => {
  const migrationsDir = path.join(__dirname, "./migrations");

  if (!fs.existsSync(migrationsDir)) {
    fs.mkdirSync(migrationsDir, { recursive: true });
  }

  const now = new Date();
  const timestamp = now.toISOString().split("T")[0];
  const filename = `${name}_${(timestamp)}.js`;

  const migrationPath = path.join(migrationsDir, filename);
  exec(
    `npx sequelize-cli migration:generate --name ${name}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error("Error generating migration:", error);
        return;
      }

      const generatedFile = fs
        .readdirSync(migrationsDir)
        .filter((file) => file.includes(name) && !file.startsWith(timestamp))
        .pop();

      if (generatedFile) {
        fs.renameSync(path.join(migrationsDir, generatedFile), migrationPath);
        console.log(`Migration file created: ${migrationPath}`);
      } else {
        console.log("Generated file not found, check your setup.");
      }
    }
  );
};
const migrationName = process.argv[2];

if (!migrationName) {
  console.error("Please provide a migration name.");
  process.exit(1);
}

generateMigration(migrationName);
