
db.trainig.insertMany([
{
"name": "Leanne Graham",
"username": "Bret",
"email": "sincere@april.biz",
"company": {
"name": "TCS",
"catchPhrase": "Multi-layered client-server neural-net",
"bs": "harness real-time e-markets"
},
"role": "Lead software developer",
"skills": ["ruby", "aws", "mysql"],
"salary": 50000,
"status": {
"online": true,
"message": "Hello there!"
}
},
{
"name": "Ervin Howell",
"username": "Antonette",
"email": "Shanna@melissa.tv",
"company": {
"name": "TCS",
"catchPhrase": "Proactive didactic contingency",
"bs": "synergize scalable supply-chains"
},
"role": "Junior software developer",
"skills": ["ruby", "aws", "mysql"],
"salary": 25000,
"status": {
"online": true,
"message": "Working on a critical bug!"
}
},
{
"name": "Clementine Bauch",
"username": "Samantha",
"email": "Nathan@yesenia.net",
"company": {
"name": "PWC",
"catchPhrase": "Face to face bifurcated interface",
"bs": "e-enable strategic applications"
},
"role": "Intern",
"skills": ["html", "css", "react"],
"salary": 10000,
"status": {
"online": true,
"message": "Learning React!"
}
},
{
"name": "Patricia Lebsack",
"username": "Karianne",
"email": "Julianne.OConner@kory.org",
"company": {
"name": "PWC",
"catchPhrase": "Multi-tiered zero tolerance productivity",
"bs": "transition cutting-edge web services"
},
"role": "Intern",
"skills": ["html", "css", "angular"],
"salary": 10000,
"status": {
"online": true,
"message": "Working..."
}
},
{
"name": "Chelsey Dietrich",
"username": "Kamren",
"email": "Lucio_Hettinger@annie.ca",
"company": {
"name": "TCS",
"catchPhrase": "User-centric fault-tolerant solution",
"bs": "revolutionize end-to-end systems"
},
"role": "Senior software developer",
"skills": ["python", "angular", "mysql", "html", "css", "react"],
"salary": 45000,
"status": {
"online": true,
"message": "Hello there!"
}
},
{
"name": "Mrs. Dennis Schulist",
"username": "Leopoldo_Corkery",
"email": "Karley_Dach@jasper.info",
"company": {
"name": "IBM",
"catchPhrase": "Synchronised bottom-line interface",
"bs": "e-enable innovative applications"
},
"role": "Junior software developer",
"skills": ["node", "mongo", "html", "css", "react"],
"salary": 17000,
"status": {
"online": true,
"message": "busy"
}
},
{
"name": "Kurtis Weissnat",
"username": "Elwyn.Skiles",
"email": "Telly.Hoeger@billy.biz",
"company": {
"name": "CTS",
"catchPhrase": "Configurable multimedia task-force",
"bs": "generate enterprise e-tailers"
},
"role": "Lead software developer",
"skills": ["node", "mongo", "html", "css", "react", "aws"],
"salary": 55000,
"status": {
"online": true,
"message": "busy"
}
},
{
"name": "Nicholas Runolfsdottir V",
"username": "Maxime_Nienow",
"email": "Sherwood@rosamond.me",
"company": {
"name": "IBM",
"catchPhrase": "Implemented secondary concept",
"bs": "e-enable extensible e-tailers"
},
"role": "Junior software developer",
"skills": ["node", "mongo", "html", "css", "angular"],
"salary": 18000,
"status": {
"online": false,
"message": "OOO"
}
},
{
"name": "Glenna Reichert",
"username": "Delphine",
"email": "Chaim_McDermott@dana.io",
"company": {
"name": "CTS",
"catchPhrase": "Switchable contextually-based project",
"bs": "aggregate real-time technologies"
},
"role": "Senior software developer",
"skills": ["java", "oracle db", "angular"],
"salary": 40000,
"status": {
"online": false,
"message": "PTO"
}
},
{
"name": "Clementina DuBuque",
"username": "Moriah.Stanton",
"email": "Rey.Padberg@karina.biz",
"company": {
"name": "PWC",
"catchPhrase": "Centralized empowering task-force",
"bs": "target end-to-end models"
},
"role": "Senior software developer",
"skills": ["java", "postgres", "angular"],
"salary": 42000,
"status": {
"online": true,
"message": "busy"
}
}
])



show collections
//get all the data
db.trainig.find({})



//1. Get a user by _id
db.trainig.find({_id:ObjectId("62f4821cab94dbcab4ddc02a")})


//2. Get user by company's name
db.trainig.find({name:"Glenna Reichert"})


//3. Get all users who are online
db.trainig.find({"status.online":true})



//3a. Get all users who are offline
db.trainig.find({"status.online":false})



//4. Get all users salary more than 30k

db.trainig.find({salary:{$gt:30000}})


//5. Update "Glenna Reichert" salary to 45000

db.trainig.updateOne({name:"Glenna Reichert"},{$set:{salary:"45000"}})

//6. Get all users name & their status.message
db.trainig.find({},{"name":1,"status.message":1})


//7. Update "Clementina DuBuque" skills with "mysql"
//
//8. Remove "oracle db" skill from "Glenna Reichert"
db.trainig.update( { name:"Glenna Reichert" },{ $pull: {"skills": "oracle db"}})


//9. search for user's name contains "en" - $regex
db.trainig.findOne({"username" : {$regex : "en"}});


//10. Get who's salary is less than or equal to 20k

db.trainig.find({salary:{$lte:20000}})


//11. Get user's whose status is "busy"
db.trainig.find({"status.message":"busy"})


//12. Get user's whose status is "PTO" or "OOO"
db.trainig.find({
$or:[{"status.message":"PTO"},{"status.message":"OOO"}]
})


//13. Get all interns with "react" and "angular" skills
db.trainig.find({
    $and: [{ "role": "Intern" },
    {
        $or: [{ "skills": "react" },
        { "skills": "angular" }]
    }]
})



//14. Get all devs & interns with "react" or "angular" skills
db.trainig.find({
        $or: [{ "skills": "react" },
        { "skills": "angular" }]
})



//15. Get all 'senior devs' from "PWC" & "TCS" company
db.trainig.find({
    $and: [{ "role": "Senior software developer" },
    {
        $or: [{ "company.name": "TCS" },
        { "company.name": "PWC" }]
    }]
})


    




//16. find first user who appears as "online". (First person while searching for online:true)
db.trainig.findOne({"status.online":true})




//17. find all users whose role is "Senior software developer" or "Lead software developer" and company should be "IBM" or "TCS"
db.trainig.find({
    $and:
        [
            {
                $or: [{ "role": "Senior software developer" },
                { "role": "Lead software developer" }]
            },
            {
                $or: [{ "company.name": "IBM" },
                { "company.name": "TCS" }]
            }]
})

