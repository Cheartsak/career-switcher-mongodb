<h2>Module 2: Create Document - Example 2</h2>

<h4>Prerequisite</h4>
<li>MongoDB Compass</li>
<li>MongoDB Atlas</li>
<li>Connect Compass to MongoDB</li>
<li>sample_mflix (sample data)</li>

<h4>Database & Collection</h4>
<li>Database: sample_mflix</li>
<li>Collection: comments</li>

<h4>Instruction</h4>

- Create a theater into `theaters` collection.

```
{
    name: "JJJ",
    email: "kk@s.com",
    movie_id: ObjectId("573a1391f29313caabcd6d41"),
    text: 999,
    date: new Date()
}

```

- Create theaters into `theaters` collection.

```
{
    name: "JJJ",
    email: "kk@s.com",
    movie_id: ObjectId("573a1391f29313caabcd6d41"),
    text: 999,
    date: new Date()
}

{
    name: "JJJ",
    email: "kk@s.com",
    movie_id: ObjectId("573a1391f29313caabcd6d41"),
    text: 999,
    date: new Date()
}

```

<h4>hints</h4>

- `db.collection.insert()`
