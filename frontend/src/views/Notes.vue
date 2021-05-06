<template>
    <div class="container">
       <h1>Notes</h1> 

        <form @submit.prevent = "editNote(noteEdit)" v-if = "edit">
           <input type="text" class="form-control my-2" placeholder="Title" v-model="noteEdit.title">
           <input type="text" class="form-control my-2" placeholder="Description" v-model="noteEdit.description">
           <b-button class="btn-warning my-2" type="submit"> edit</b-button>
           <b-button class="my-2" type="submit"  @click = "edit = false"> cancel</b-button>
       </form>

       <form @submit.prevent = "addNote()" v-if = "!edit">
           <input type="text" class="form-control my-2" placeholder="Title" v-model="note.title">
           <input type="text" class="form-control my-2" placeholder="Description" v-model="note.description">
           <b-button class="btn-success my-2" type="submit"> add</b-button>
       </form>

       <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">description</th>
            <th scope="col">action</th>
        </tr>
        </thead>
        <tbody>

        <tr v-for="(item, index) in notes" :key="index">
            <th scope="row">{{item._id}}</th>
            <td>{{item.title}}</td>
            <td>{{item.description}}</td>
            <td>
                <b-button @click="killNote(item._id)" class="btn-danger btn-sm"> delete</b-button>
                <b-button @click="editNoteActivate(item._id)" class="btn-warning btn-sm"> edit</b-button>
            </td>
        </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return{
            notes: [],
            note: {
                title: "",
                description: ""
            },
            edit: false,
            noteEdit:{},
        }
    },

    created(){
        this.showNotes();
    },

    methods: {
        showNotes(){
            this.axios.get('/')
            .then(res =>{
                this.notes = res.data
            })
            .catch(error => {
                console.log(error.response)
            })
        },

        addNote(){
            this.axios.post('/', this.note)
            .then( res =>{
                this.notes.push(res.data)
                this.note.title = ""
                this.note.description = ""
            })
            .catch(error => {
                console.log(error.response)
            })
        },

        killNote(id){
            this.axios.delete(`/${id}`)
            .then( res =>{
                const index = this.notes.findIndex(item  => item._id === res.data.id)
                this.notes.splice(index, 1)
            })
            .catch(error => {
                console.log(error.response)
            })
        },

        editNoteActivate(id){
            this.edit = true
            this.axios.get(`/${id}`)
            .then( res =>{
                this.noteEdit = res.data;
            })
            .catch(error => {
                console.log(error.response)
            })
        },

        editNote(note){
            this.axios.put(`/${note._id}`, note)
            .then( res =>{
                const index = this.notes.findIndex(n => n._id === res.data._id)
                this.notes[index].title = res.data.title
                this.notes[index].description = res.data.description
                this.edit = false
            })
            .catch(error => {
                console.log(error.response)
            })
        }
    }
}
</script>
