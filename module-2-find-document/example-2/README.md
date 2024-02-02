<h2>Module 2: Find Document - Example 2</h2>

<h4>Prerequisite</h4>
<li>MongoDB Compass</li>
<li>MongoDB Atlas</li>
<li>Connect Compass to MongoDB</li>
<li>sample_mflix (sample data)</li>

<h4>Database & Collection</h4>
<li>Database: sample_mflix</li>
<li>Collection: users</li>

<h4>Instruction</h4>

- Fetching all documents from users collection by only `name` = `Viserys Targaryen`
- Fetching all documents from users collection by only `_id` = `59b99db4cfa9a34dcd7885b7`
- Fetching all documents from users collection by only `email` = `lena_headey@gameofthron.es`

<h4>Answer</h4>

- `db.users.find({ name: "Viserys Targaryen" })`

- `db.users.find({ _id: ObjectId("59b99db4cfa9a34dcd7885b7") })`

- `db.users.find({ email: "lena_headey@gameofthron.es" })`
