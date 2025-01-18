const { exec } = require('child_process');

const runMigrations = () => {
  console.log('Running migrations...');
  exec('npx sequelize-cli db:migrate', (error, stdout, stderr) => {
    if (error) {
      console.error('Error running migrations:', error.message);
      return;
    }
    if (stderr) {
      console.error('stderr:', stderr);
    }
    console.log(stdout);
    console.log('Migrations completed successfully!');
  });
};

const rollbackLastMigration = () => {
  console.log('Rolling back the last migration...');
  exec('npx sequelize-cli db:migrate:undo', (error, stdout, stderr) => {
    if (error) {
      console.error('Error rolling back migration:', error.message);
      return;
    }
    if (stderr) {
      console.error('stderr:', stderr);
    }
    console.log(stdout);
    console.log('Rollback completed successfully!');
  });
};

const command = process.argv[2];

if (command === 'migrate') {
  runMigrations();
} else if (command === 'rollback') {
  rollbackLastMigration();
} else {
  console.log('Usage: node run-migrations.js [migrate|rollback]');
}
