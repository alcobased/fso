const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://alcoholbasednontoxic:${password}@cluster0.qkb7vti.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// // create new note
// const note = new Note({
//   content: 'C is the Best',
//   important: true,
// })

// note.save().then(result => {
//   console.log(result)
//   console.log('note saved!')
//   mongoose.connection.close()
// })

// fetch notes
Note.find({}).then(results => {
  results.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})