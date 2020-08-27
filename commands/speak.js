const Discord = require("discord.js");
const translate = require('google-translate-open-api').default;

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
    "Eu ganhei meus primeiros U$25,00 com 30 anos de idade... E ainda não gastei tudo.",
    "Achou que eu tava brincando?",
    "Eu vou estar lá",
    "Você vai descobrir o que eu vou fazer. Acha que eu to brincando é? Quando estiver no chuveiro, eu vou estar lá.",
    "Quando estiver vendo TV, eu vou estar lá.",
    "Até mesmo nos seus sonhos, eu vou estar lá.",
    "Vai ficar tudo bem.",
    "Achei uma moeda! Eu te amo moeda. Vou ficar com você e vai se chamar Bernardo.",
    "Eu achei 1 dólar!",
    "2 dólares e 89 centavos em alimentos? O que você quer? Alimentar os famintos ou ficar faminto?",
    "Eu não vou dar dinheiro para você, pra você ficar por ai a toa.",
    "Você quer mesada? Você já dorme aqui o mês inteiro, você já come as suas batatas, você usa a minha eletricidade, você toma o suco que eu pago, você come a vagem que eu como, você pode assistir a minha televisão, você pode estourar a minha conta de gás, eu deixo você subir as minhas escadas, você pode me fazer essas perguntas ridículas. Por que que eu tenho que te dar uma mesada quando já pago tudo o que você precisa!",
    "Quem você acha que ganha mesada, hein?",
    "Parece que o Greg ganha mais do que... pede mesada pra ele.",
    "Então você é um filhinho da mamãe!",
    "Presta atenção filhinho da mamãe, fique longe da minha filha, você ta me ouvindo?",
    "Quanto custa?",
    "Não precisamos comer em lanchonete. Eu guardei mortadela na mala do carro, vou encostar.",
    "Eu sei que você não vai jogar o mingau fora, come aí, a veia custou 30 centavos.",
    "Eu quero uma ligação a cobrar. Papai bem Nebrasca milharal Chris lixo desliga."
]

module.exports.run = async (client, message, args) => {
    const somethingToSay = phrases[Math.floor(Math.random() * phrases.length)];

    if(message.guild.region!=='brazil'){
      const result = await translate(somethingToSay, {
        tld: "pt",
        to: "en",
      });
      const translatedData = result.data[0];
      await message.channel.send("> "+translatedData);
      return;
    }
    await message.channel.send("> "+somethingToSay);
};