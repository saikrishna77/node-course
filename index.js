const fs = require('fs');
var addNote=(title,body)=>{
    var notes=[];
    var note={
        title,
        body
    };
   var notes=fetchNotes();
  var duplicate = notes.filter((note)=>note.title===title);
  if(duplicate.length===0){
    notes.push(note);
    saveNotes(notes);
     return note;
  }
};
const fetchNotes=()=>{

    try{var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
    return notes;
}catch(err){ return [];
    }
};
const saveNotes=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
const removeNode=(title)=>{
    var notess = fetchNotes();
    var filterNotes  = notess.filter((notes) => notes.title !== title);
     saveNotes(filterNotes);
     return notess.length !== filterNotes.length; 
}
const getNote=(title)=>{
    var notess = fetchNotes();
    var filterNotes  = notess.filter((notes) => notes.title === title);
    return filterNotes[0];
};
const log=(note)=>{
    debugger;
    
    console.log('user'+note.title);

};
var allNotes = ()=>{
return fetchNotes();
}
module.exports={addNote,saveNotes,allNotes,fetchNotes,removeNode,getNote,log};