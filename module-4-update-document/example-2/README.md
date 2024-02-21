<h2>Module 3: Update Document - Example 2</h2>

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

- `duration` >= 50 then `status = strong`

```
db.health.updateMany(
    {
    duration: { $lte: 50 }
    },
    {
        $set: { status: “strong” }
    }
)
```

- 30 > `duration` < 50 then `status = general`

```
db.health.updateMany(
    {
    duration: { $lt: 50, $gt: 30 }
    },
    {
        $set: { status: “general” }
    }
)
```

- `duration` < 30 then `status = poor`

```
db.health.updateMany(
    {
    duration: { $lte: 30 }
    },
    {
        $set: { status: “poor” }
    }
)
```
