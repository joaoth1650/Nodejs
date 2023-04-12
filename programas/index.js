const Perguntas = [
  "Conseguiu acordar e ir para escola?",
  "Fez as duas refeições certinho?",
  "Algo te deixou feliz?",
  "Aprendeu o que hoje?"
]


process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if (answers.length < Perguntas.length) {
    ask (answers.length)
  }else {
    process.exit()
  }
})

process.on('exit', () => {


  console.log(`
   Ok agora vamos rever suas respostas

   Conseguiu ir para escola:
   ${answers[0]}

   Fez as duas refeições? (cafe d'manha e almoço)
   ${answers[1]}

   Algo te deixou supimpa? :P
   ${answers[2]}

   É isso que você acabou aprendendo hoje:
   ${answers[3]}

   Isso foi interessante, volte amanhã para responder mais perguntas
  `)


})
const ask = (index = 0) => {
  process.stdout.write("\n\n" + Perguntas[index] + " > ")
}

ask()

const answers = []