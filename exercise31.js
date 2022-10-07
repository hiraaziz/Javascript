let current_users=['admin','hiraaziz','Aiman sabir','arooj tariq','maheen raza']
let new_users=['sana kamal','rida hanif','aiman sabir','maheen raza']
let available=1
new_users.map((user)=>{

   current_users.map((current_user)=>{
       if(current_user.toLowerCase()==user.toLowerCase()){
           console.log(`${user} will need to enter  new username`)
           available=0
       }
   })

   if(available){
       console.log(`${user} is available`)
       available=1
   }

})
