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
				db.run(`CREATE TABLE lakes (
					id INTEGER PRIMARY KEY AUTOINCREMENT,
					name TEXT NOT NULL
				);`);

				db.run(`CREATE TABLE bottles (
					id INTEGER PRIMARY KEY AUTOINCREMENT,
					message TEXT NOT NULL,
					lake_id INT NOT NULL,
					FOREIGN KEY (lake_id) REFERENCES lakes(id)
				);`);

		db.run('INSERT INTO lakes (name) VALUES ("Baikal"), ("Superior"), ("Victoria")');
		db.run(`
			INSERT INTO bottles (message, lake_id)
			VALUES
				("Defining yourself is like biting your own teeth", 3),
				("Every never is now", 3),
				("Muchos Nachos Supreme", 2),
				("Challenge yourself, or stagnate")
			`, () => resolve());
	  });
	})
  }
};
