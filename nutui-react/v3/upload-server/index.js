const express = require('express')
const multer = require('multer')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 3000

app.use(
  cors({
    origin: '*', 
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

// 设置文件存储路径和文件名
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file)
    cb(null, path.join(__dirname, 'uploads/')) // 存储文件的文件夹
  },
  filename: function (req, file, cb) {
    const buffer = Buffer.from(file.originalname, 'latin1');
    const utf8Name = buffer.toString('utf8');
    cb(null, utf8Name) 
  },
})

const upload = multer({ storage: storage })

// 设置路由来处理文件上传
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    console.log(req.file)
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
    res.status(200).send({ msg: 'File uploaded successfully', url: fileUrl })
  } catch (error) {
    res.status(400).send('Error uploading file')
  }
})
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
