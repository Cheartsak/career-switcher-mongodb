<h2>Module 2: Find Document - Example 6</h2>

<h4>Prerequisite</h4>
<li>MongoDB Compass</li>
<li>MongoDB Atlas</li>
<li>Connect Compass to MongoDB</li>
<li>sample_mflix (sample data)</li>

<h4>Database & Collection</h4>
<li>Database: sample_mflix</li>
<li>Collection: movies</li>

<h4>Instruction</h4>

- Please filter only Drama movie.
- Only English language and USA country.

<h4>Answer</h4>

- `db.movies.find({ genres: { $in: ["Drama"] } })`
- `db.movies.find({ languages: { $in: ["English"] } })`
