db.trainig.find({})


//1. Get total money spent by TCS company as salary
db.trainig.aggregate([
    {$match:{"company.name":"TCS"}},
    {$group:{_id:{CompanyName:"$company.name"},"TotalSalary":{$sum:"$salary"}}}
])



//2. Get total money spent by TCS & CTS as salary.
db.trainig.aggregate([
    {$match: {"company.name": {$in:['TCS','CTS']}}},
    {$group:{_id:{CompanyName:"$company.name"},"TotalSalary":{$sum:"$salary"}}}
])



//.3 Get total money spent by individual company as salary
db.trainig.aggregate([
//   {$group:{_id:{CompanyName:"$company.name"}}},
    {$group:{_id:{CompanyName:"$company.name"},"TotalSalary":{$sum:"$salary"}}}
])



//4. Get total money spent by companies for software developers

db.trainig.aggregate([
    {$match:{"role":{$in:[/developer/]}}},
  {$group:{_id:{Role:"$role"},"TotalSalary":{$sum:"$salary"}}}
])



//5. Average salary for "Lead software developer" in industry

db.trainig.aggregate([
    {$match:{"role":"Lead software developer"}},
    {$group:{_id:{Role:"$role"},"TotalSalary":{$avg:"$salary"}}}
])


//6. Minimum salary for "Lead software developer" in industry
db.trainig.aggregate([
    {$match:{"role":"Lead software developer"}},
    {$group:{_id:{Role:"$role"},"Minimum Salary":{$min:"$salary"}}}
])


//7. Max salary for "Lead software developer" in industry
db.trainig.aggregate([
    {$match:{"role":"Lead software developer"}},
    {$group:{_id:{Role:"$role"},"Max Salary":{$max:"$salary"}}}
])



//8. List all the companies which have "Lead software developer"s?

db.trainig.aggregate([
    {$match:{"role":"Lead software developer"}},
    {$group:{_id:{Company :"$company.name"}}}
])



//9. List all the companies which have "Senior software developer"s?

db.trainig.aggregate([
    {$match:{"role":"Senior software developer"}},
    {$group:{_id:{Company :"$company.name"}}}
])



//10. Get average salary based on each role
db.trainig.aggregate([
    
    {$group:{_id:{Role:"$role"},"Average Salary":{$avg:"$salary"}}}
])

//11. Get all highest paid role in each company

db.trainig.aggregate([
    
    {$group:{_id:{Role:"$role"},"Average Salary":{$max:"$salary"}}}
])


//12. Get all the roles in companies


db.trainig.aggregate([
    
    {$group:{_id:{Role:"$role"}}}
])



//13. Get all the roles in companies and show in order
db.trainig.aggregate([
    
    {$group:{_id:{Role:"$role"}}},{$sort:{role:-1}},
])



//14. Split out individual skills with name
db.trainig.aggregate([
//{$project: {"Skills":"$skills","Name":"$name",_id:0}},

{$group:{_id:{Skills:"$skills",Name:"$name"}}}
])



//15 How many people are online in each company?

db.trainig.aggregate([
    {$match:{"status.online":true}},
    {$count:"count"}
  
])


//16. Count of companies in the collection?

db.trainig.aggregate([
  {$group:{_id:{CompanyName:"$company.name"}}},
    {$count:"count"}
  
])
