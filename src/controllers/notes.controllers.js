import Note from "../models/notes.models";

export const getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
}

export const createNote = async (req, res) => {
    const{title, description} = req.body
    const note = new Note({title, description})
    const save = await note.save()
    res.status(201).json(save)
}

export const getNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    res.status(200).json(note)
}


export const updateNote = async (req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(note)
}

export const deleteNote = async (req, res) => {
    const note = await Note.findByIdAndDelete(req.params.id)
    res.status(200).json(note)
}