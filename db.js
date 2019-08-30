const sqlite = require('sqlite3');

const db = new sqlite.Database(':memory:', (err) => {
  if (err) {
    console.error('database error', err);
    process.exit();
  }
});

module.exports = {
  db,

  async createSchema() {
    return new Promise(resolve => {
      db.serialize(() => {
        db.run('CREATE TABLE lakes (id INT PRIMARY KEY, name TEXT NOT NULL );');
        db.run(
          `
            CREATE TABLE bottles (
                                     id INT PRIMARY KEY,
                                     message TEXT NOT NULL,
                                     lake_id INT NOT NULL,
                                     FOREIGN KEY (lake_id) REFERENCES lakes(id)
            );
        `,
        );

        db.run('INSERT INTO lakes (id, name) VALUES (1, "Baikal"), (2, "Superior"), (3, "Victoria")');
        db.run(`
          INSERT INTO bottles (id, message, lake_id)
          VALUES
              (1, "Defining yourself is like biting your own teeth", 3),
              (2, "Every never is now", 3)
        `, () => resolve());
      });
    })
  }
};
