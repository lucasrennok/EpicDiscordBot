const Discord = require("discord.js");

const phrases = [
    "Se eu não comprar nada, o desconto é maior.",
    "E quanto isso vai me custar??",
    "Quer saber o que é mágica? Eu tenho dois empregos, trabalho sete dias por semana e todo dia meu dinheiro desaparece.",
    "Aceita vale-refeição?",
    "Desliga esse relógio da tomada, garoto, você não vê as horas enquanto dorme. São 2 centavos por hora!",
    "Porque eu deveria comprar algo? É Dia das Mães, e não das Esposas!",
    "Sabe quantas vezes eu estava certo e tive que pedir perdão? 4.351 vezes!",
    "Por que eu vou sair pra relaxar se eu posso relaxar em casa que é grátis?",
    "Dirigir? Claro que pode. Depois que fizer 16, for pra autoescola, tirar sua carteira, se formar no colégio, arranjar um emprego, sair da minha casa, comprar um carro, pagar o seguro, aí vai poder dirigir quando quiser.",
    "Uma coisa que aprendi em relação às mulheres é que mesmo quando você tá certo, você tá errado.",
    "Uma corrente de ouro só serve para prender seu portão de ouro da sua casa de ouro.",
    "Seja como for, faça o que você gosta. Quando tiver uma família já vai ter o que fazer pro resto da vida.",
    "Como você se esquece de um dinheiro que veio de graça? Eu me lembro dos primeiros 35 dólares que eu achei. Era 17 horas, em frente ao banco, fazia 27 graus, eu achei duas notas de 10, duas de 5, três moedas de 1 dólar, quatro moedas de 25 e cem moedas de 1, e uma delas era canadense...",
    "São 49 centavos de leite derramado em toda a mesa. Alguém vai ter que beber esse leite!",
    "Coma isso. São 30 centavos de aveia.",
    "Quando se tem medo, não se tem respeito; quando se tem respeito, não se tem medo.",
    "Se você encostar um dedo no meu filho, você não vai pra cadeia, eu vou para a cadeia.",
    "Como assim largou o emprego? Largar é para bebida e cigarro!",
    "Metade do serviço de casa eu faço melhor do que você. E não é muito difícil...",
    "Quando eu era garoto não precisava de roupa especial, ter roupa já era especial.",
    "Eu ganhei meus primeiros U$25,00 com 30 anos de idade... E ainda não gastei tudo."
]

module.exports.run = async (client, message, args) => {
    const somethingToSay = phrases[Math.floor(Math.random() * phrases.length)];
    await message.channel.send("> "+somethingToSay);
};