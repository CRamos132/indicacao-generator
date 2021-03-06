interface IParams {
  nome: string;
  projeto?: string;
}

const intros = ["Queria indicar", "Vou indicar", "Indicando"];
const comProjeto = [
  "seu trampo foda em",
  "arregaçar em",
  "DETONAR",
  "estar toda semana amassando",
  "engolir task em",
];
const semProjeto = [
  "amassar os gringo",
  "ser foda",
  "sempre estar ajudando a galera",
  "ser essa pessoa incrível",
  "sempre tirar um tempo pra galera",
  "ter me dado um help monstro",
];

const getFromArray = (array: string[]) => {
  const selected = Math.floor(Math.random() * array.length);
  return array[selected];
};

function createIndicacao({ nome, projeto }: IParams) {
  let indicacao = "";
  const hasIntro = Math.floor(Math.random() * 10) % 2 === 0;
  const rareIndicacao = Math.floor(Math.random() * 100) === 73;
  if (rareIndicacao) {
    // eslint-disable-next-line nonblock-statement-body-position
    return `:fast_parrot: :fast_parrot: :fast_parrot: :fast_parrot: @${nome} :fast_parrot: :fast_parrot: :fast_parrot: :fast_parrot:`;
  }
  if (hasIntro) {
    const intro = getFromArray(intros);
    indicacao += intro;
  }
  indicacao += ` @${nome}`;
  if (projeto) {
    const motivo = getFromArray(comProjeto);
    indicacao += ` por ${motivo} ${projeto}`;
  } else {
    const motivo = getFromArray(semProjeto);
    indicacao += ` por ${motivo} ${projeto}`;
  }

  return indicacao;
}

export default function generator({ nome, projeto }: IParams) {
  const empty = ["", "", "", "", "", "", "", "", ""];
  const indicacoes = empty.map(() => createIndicacao({ nome, projeto }));
  return indicacoes;
}
