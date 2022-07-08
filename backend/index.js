const express = require('express');

// const bodyParser = require("body-parser");

const router = express.Router();


const mongoose = require('mongoose');

const multer = require("multer")

const db = mongoose.connect('mongodb://localhost:27017/data', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("dB connected");
})

const path = require('path')

const app = express();

const PORT = 5000;

const cors = require("cors");



// app.use("/", router);

// //code starts here
// // app.use(express.json())

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());
// // app.use(require('./router/auth'));

// // static forlder
// // app.use(express.static(path.join(__dirname,'public')));
// //get req 
// router.get('/home', (req, res) => {
//   res.send("THIS IS IT CHIKU YOU CAN DO IT ");
// })

// //get end 
// // post request handling

// router.post('/register', (req, res) => {
//   //code to perform particular action.
//   //To access POST variable use req.body()methods.
//   res.json(req.body);
//   console.log(req.body);
// });


// //post code ends 
// // app.get('/start', (req, res) => {
// //   res.send("<h1>Hello World</h1>")
// // })


// app.listen(PORT, () => console.log(`hello you are connected to the ${PORT}`))

//multer storage 
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/images/");
  },

  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
})


const upload = multer({ storage: storage })

//multer storage ends




//my schema


const userSchema = new mongoose.Schema({
  name: String,
  fatherName: String,
  eId: String,
  sDate: String,
  eDate: String,
  studImage: String,
  degree: String,
  marksheet1: String,
  marksheet2: String,
  marksheet3: String
})
const Student = new mongoose.model("student", userSchema)

//chema and model ends







app.get('/', (req, res) => {
  res.send("HELLO WORLD")
}
)

// app.get('/data/users',(req,res)=>{

// })
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

var cpUpload = upload.fields([
  { name: 'studImage' },
  { name: 'degree' },
  { name: 'marksheet1' },
  { name: 'marksheet2' },
  { name: 'marksheet3' },
])

//request students

app.get('/students', (req, res) => {
  Student.find()
    .then(student => res.json(student))
})


//add students

app.post("/students/addstudent", cpUpload, (req, res) => {

  console.log(req.files);


  console.log(req.body)

  const addStudent = new Student(


    {


      name: req.body.name,
      fatherName: req.body.fatherName,
      eId: req.body.eId,
      sDate: req.body.sDate,
      eDate: req.body.eDate,
      // studImage: req.files.studImage[0]["path"],
      // degree: req.files.degree[0]["path"],
      // marksheet1: req.files.marksheet1[0]["path"],
      // marksheet2: req.files.marksheet2[0]["path"],
      // marksheet3: req.files.marksheet3[0]["path"],
    }


  );

  addStudent.save(err => {
    if (err) {
      res.send(err)
    }
    else {
      res.send({ message: "user registered", value: req.body })
      console.log({ message: "user registered" })
    }
  })

})
// get student by id 
app.get('/details/:id', (req, res) => {
  Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(400).json(`ERROR :${err}`))
})

app.put('/update/:id', cpUpload, (req, res) => {
  Student.findById(req.params.id)
    .then(student => {

      student.name = req.body.name;
      student.fatherName = req.body.fatherName;
      student.eId = req.body.eId;
      student.sDate = req.body.sDate;
      student.eDate = req.body.eDate;
      student.studImage = req.files.studImage[0]["path"],
        student.degree = req.files.degree[0]["path"],
        student.marksheet1 = req.files.marksheet1[0]["path"],
        student.marksheet2 = req.files.marksheet2[0]["path"],
        student.marksheet3 = req.files.marksheet3[0]["path"],

        student.save()
          .then(() => { console.log(res.json()) })
          .catch(err => res.status(400).json(`ERROR :${err}`));
    })
    .catch(err => res.status(400).json(`ERROR :${err}`))
})
// delete a student
app.delete('/students/:id', (req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => { res.json("Student deleted") })
    .catch(err => res.status(400).json(`ERROR :${err}`));

})
//props.value.matches.studentId
//get student by id and update


//get student by id and delete

const getDoc = async () => {
  const result = await Student.find({ eId: "1" });
  console.log(result)
}

// getDoc();
app.listen(PORT, () => {
  console.log("you are connected to " + PORT)
})

