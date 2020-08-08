const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        // the value for 'required' is an array. the second val in the array is an error message
        required: [true, 'Please add a title'],
        unique: true,
        // trim removes whitespace from the beginning and end of the string.
        trim: true,
        // the second val is an error message like above.
        maxlength: [40, 'title length can not be more the 40 characters']
    },
    description: {
       type: String,
       required: true,
       maxlength:[200, 'title length can not be more the 40 characters']
    }
})


// this is saying to export mongoose.model.note if it exist otherwise create it the model.
module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);