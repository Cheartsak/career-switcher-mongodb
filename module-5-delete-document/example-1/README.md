<h2>Module 5: Delete Document - Example 1</h2>

<h4>Prerequisite</h4>
<li>MongoDB Compass</li>
<li>MongoDB Atlas</li>
<li>Connect Compass to MongoDB</li>
<li>jsd6_mongo data</li>

<h4>Database & Collection</h4>
<li>Database: jsd6_mongo</li>
<li>Collection: health</li>

<h4>Instruction</h4>

- Delete Mr.Christ out from collection.

```
db.collection.deleteOne(
    {
        _id: ObjectId(“65a624d10e732803cec9f96e”) // id of Mr.Christ
    }
)
```

- Delete everyone who is under 50 in weight.

```
db.collection.deleteMany(
    {
        weight: { $lt: 50 }
    }
)
```
