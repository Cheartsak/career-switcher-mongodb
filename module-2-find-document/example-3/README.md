<h2>Module 2: Find Document - Example 3</h2>

<h4>Prerequisite</h4>
<li>MongoDB Compass</li>
<li>MongoDB Atlas</li>
<li>Connect Compass to MongoDB</li>
<li>sample_mflix (sample data)</li>

<h4>Database & Collection</h4>
<li>Database: sample_mflix</li>
<li>Collection: theaters</li>

<h4>Instruction</h4>

- How many theaters does `MN` state has?
- How many theaters does `California` city has?
- What is an example of each documents of above like?

<h4>Answer</h4>

- `db.collection.find({ “location.address.state”: “MN” })`

- `db.collection.find({ “location.address.city”: “California” })`
