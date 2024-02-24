let express= require('express');
let router=express.Router();
let cors= require('cors');
let multer=require('multer')
let connection= require('../Db/db')


let app=express();
app.use(cors());
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      console.log(file);
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  const upload = multer({ storage: storage });

app.use('/uploads',express.static("uploads"))

router.post("/signup", upload.single('profile'), (req, res)=>{
  // console.log(req.file)
  const filePath=req.file.destination +'/' + req.file.filename 
  console.log(filePath)
let sqlQuery=`insert into employees(firstName, lastName, userName, password, city, state, postalCode, termsAgree, profile) 
values ('${req.body.firstName}', '${req.body.lastName}', '${req.body.userName}', '${req.body.password}','${req.body.city}',
'${req.body.state}', '${req.body.zipcode}', '${req.body.checkbox}', '${filePath}')`;

connection.query(sqlQuery, (err, result)=>{
    if(err){
        res.json(err)
    }
    
    else{
        res.json({status:"success", details: result})
    }
})
})

router.post('/login' , upload.none(), (req, res)=>{
  console.log(req.body)
let sqlQuery=`select * from employees where userName='${req.body.email}' and password='${req.body.password}'`
connection.query(sqlQuery, (err, result)=>{
  if(err){
    res.json({status: "failed", details:err})
  }
  else{
    // console.log(result.length)
    if(result.length > 0){
      let userDetails={
        id:result[0].id,
        firstName:result[0].firstName,
        lastName:result[0].lastName,
        userName:result[0].userName,
        city:result[0].city,
        state:result[0].state,
        postalCode:result[0].postalCode,
        termsAgree:result[0].termsAgree,
        profile:result[0].profile
      }
      res.json({status: "success", details:userDetails})
    }
    else{
      res.json({status:"failed", details:"Invalid email or password"})
    }

  }
})
})
module.exports=router;
