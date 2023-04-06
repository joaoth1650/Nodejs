const Perguntas = [
  "O que aprendi hoje?",
  "O que me deixou puto da vida? E como posso melhorar?",
  "O que me alegrou?",
  "Consegui fazer algo que ajudasse alguem?"
]

const ask = (index = 0 ) => {
  process.stdout.write("\n\n" + Perguntas[index] + " > ")
}

ask()

const answers = []
process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if (answers.length < Perguntas.length) {
    ask (answers.length)
  }else {
    console.log(answers)
    process.exit()
  }
})