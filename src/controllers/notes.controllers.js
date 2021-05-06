import Note from "../models/notes.models";

export const getNotes = async (req, res) => {
    const userId = req.user.id
    const notes = await Note.find({userId});
    res.json(notes)
}

export const createNote = async (req, res) => {
    req.body.userId = req.user.id
    const{title, description, userId} = req.body
    const note = new Note({title, description, userId})
    const save = await note.save()
    res.status(201).json(save)
}

export const getNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    if(!req.user.id==note.userId){
        return res.status(401).json({message: 'Unauthorize'})
    }
    res.status(200).json(note)
}


export const updateNote = async (req, res) => {
    const note_id = await Note.findById(req.params.id)
    if(!req.user.id==note_id.userId){
        return res.status(401).json({message: 'Unauthorize'})
    }
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(note)
}

export const deleteNote = async (req, res) => {
    const note_id = await Note.findById(req.params.id)
    if(!req.user.id==note_id.userId){
        return res.status(401).json({message: 'Unauthorize'})
    }
    const note = await Note.findByIdAndDelete(req.params.id)
    res.status(200).json(note)
}