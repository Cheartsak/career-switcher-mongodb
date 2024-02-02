<h2>Module 2: Find Document - Exercise 1</h2>

<h4>Prerequisite</h4>
<li>MongoDB Compass</li>
<li>MongoDB Atlas</li>
<li>Connect Compass to MongoDB</li>
<li>sample_mflix (sample data)</li>

<h4>Database & Collection</h4>
<li>Database: sample_mflix</li>
<li>Collection: comments</li>

<h4>Instruction</h4>
<li>Fetching all documents from <b>comments</b> collection.</li>
<li>Fetching only one user from <b>comments</b> collection by _id = “5a9427648b0beebeb69579f5”.</li>
<li>Fetching only one user from <b>comments</b> collection by email = “john_bishop@fakegmail.com”.</li>
<li>Fetching only one user from <b>comments</b> collection by name = “John Bishop”.</li>

<h5>BONUS</h5>
<li>Fetching only one user from <b>comments</b> collection by date = “1970-11-15T05:54:02.000+00:00”</li>

<h4>Hint</h4>

- `db.collection.find( <query>, <projection>, <options> ).count()`
- mongodb has `Date()` function, it receive text and convert to date/time. Please note that `Date()` is constructor
