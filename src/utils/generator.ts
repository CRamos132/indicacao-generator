interface IParams {
  nome: string;
  projeto?: string;
}

const intros = ["Queria indicar", "Vou indicar", "Indicando"];
const comProjeto = ["seu trampo foda em", "arregaçar em", "DETONAR"];
const semProjeto = [
  "amassar os gringo",
  "ser foda",
  "sempre estar ajudando a galera",
];

const getFromArray = (array: string[]) => {
  const selected = Math.floor(Math.random() * array.length);
  return array[selected];
};

function createIndicacao({ nome, projeto }: IParams) {
  let indicacao = "";
  const hasIntro = Math.floor(Math.random() * 10) % 2 === 0;
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
