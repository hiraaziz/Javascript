const readline=require('readline')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("What is your name?", function(name){
    let name_split = name.split(' ')
    let titlecases = name_split.map((word)=>{
        let words=word.slice(1)
        let letter = word.charAt(0).toUpperCase()
        letter=letter.concat(words)
        return letter
    })
    titlecases= titlecases.join(' ')
    console.log(` lower case ${name.toLowerCase()} upper case ${name.toUpperCase()} title case ${titlecases}`)
    rl.close()
})