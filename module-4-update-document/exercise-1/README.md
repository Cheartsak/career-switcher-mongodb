<h2>Module 3: Update Document - Exercise 1</h2>

<h4>Prerequisite</h4>
<li>MongoDB Compass</li>
<li>MongoDB Atlas</li>
<li>Connect Compass to MongoDB</li>
<li>jsd6_mongo data</li>

<h4>Database & Collection</h4>
<li>Database: jsd6_mongo</li>
<li>Collection: health</li>

<h4>Instruction</h4>
<h6>Please update status of each individual following rule below</h6>

- `Duration` >= 50 then `status = strong`
- 30 > `Duration` < 50 then `status = general`
- `Duration` < 30 then `status = poor`

<h6>Other requirement</h6>

- Everyone who is over 20 years old must be 65 in weight.
- Emily should run 10km in distance with 160 heart rate.
- Everyone who has less than 7.5km in distance and heart rate more than 150 should be considered as `poor`
