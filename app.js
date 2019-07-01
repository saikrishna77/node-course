
// const offer = require('./index.js')
// const fs = require('fs');
// const os = require('os');
// const _ = require('lodash');
// const yargs = require('yargs');

// const argv =yargs
// .command('add','adding a new note',{
//     title:{
//         describe:'titile of note',
//         demand:true,
//         alias:'t'
//     }
// })
// .command('list','listing notes',{})
// .command('get','getting note',{
//     title:{
//         describe:'titile of note',
//         demand:true,
//         alias:'t'
//     }
// })
// .command('remove','removing  note',{
//     title:{
//         describe:'titile of note',
//         demand:true,
//         alias:'t'
//     }
// })
// .help()
// .argv;
// const command=argv._[0];



// if(command === 'add'){
//     var note = offer.addNote(argv.title);
//     if(note){console.log("crerated");}
// }
// if(command === 'remove'){
//     console.log("entered remove");
//     var remove = offer.removeNode(argv.title);
//     var message = remove? console.log('note was removed'):console.log('note not removed');
// }
// if(command === 'get'){
//     console.log("get");
//     var remove = offer.getNote(argv.title);
//     if(remove){
//         offer.log(remove);
//     }else {console.log("coudnt");}
//     }

//     if(command === 'list'){
//         let note = offer.allNotes();
//         console.log(`prinitng ${note.length} notes`);
//         note.forEach((not)=>{
//             offer.log(not);
//         })
        
//     }
const fs =require('fs');
const express =require('express');
const http =require('http');
const app = express();
const hbs =require('hbs');
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();  
});
hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase();
})
app.use((req,res,next)=>{
var now= new Date().toSgittring();
var log=`${now} : ${req.method} : ${req.url}`;
console.log(log);
fs.appendFile('logger.log',log+'\n',(err)=>{
    if(err){
    console.log(err);}
})
next();
});
// app.use((req,res,next)=>{
//     res.render('maintanence.hbs');
// })
hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static(__dirname +'/public')); 
app.get('/',(req,res)=>{
    res.render('home.hbs',{
        pageTitle:'About page',
        
        message:'welcome to Home'
    });
})
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'home page',
        currentYear:new Date().getFullYear()
    });
});
app.get('/bad',(req,res)=>{
    //res.send({error:'unable to handle'});
});
app.listen(8010,(error)=>{
    console.log('');
});