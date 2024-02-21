<h2>Module 2: Find Document - Example 5</h2>

<h4>Prerequisite</h4>
<li>MongoDB Compass</li>
<li>MongoDB Atlas</li>
<li>Connect Compass to MongoDB</li>
<li>sample_mflix (sample data)</li>

<h4>Database & Collection</h4>
<li>Database: sample_mflix</li>
<li>Collection: movies</li>

<h4>Instruction</h4>

- What are bottom 5 runtime movies?
- What are top 5 runtime movies that less than or equal 15 minutes?
- I was born at 2000, which 3 movies should I watch in next 3 years?
- How many were movies released during 2000 - present?
- How many were movies released during 2000 - present and won over 100 awards?

<h4>Answer</h4>

- `db.movies.find({}, { title: 1, runtime: 1 }).sort({ runtime: -1 }).limit(5)`
- `db.movies.find({ runtime: { $lte: 60} }, { title: 1, runtime: 1 }).sort({ runtime: -1 }).limit(5)`
- `db.movies.find({ year: { $gt: 1955, $lte: 1965 }}, { title: 1, year: 1 }).limit(3)`
- `db.movies.find({ year: { $gte: 1990, $lte: 2000 }}).count()`
