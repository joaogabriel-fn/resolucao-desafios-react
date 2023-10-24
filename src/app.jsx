const skills = [
  {
    id: crypto.randomUUID(),
    name: 'Cozinhar',
    bgColor: 'bg-yellow',
    emoji: '😋',
  },
  {
    id: crypto.randomUUID(),
    name: 'Programação',
    bgColor: 'bg-red',
    emoji: '👍',
  },
  { id: crypto.randomUUID(), name: 'Games', bgColor: 'bg-pink', emoji: '🤙' },
  {
    id: crypto.randomUUID(),
    name: 'Inglês',
    bgColor: 'bg-lightblue',
    emoji: '🤟',
  },
];

const Avatar = () => (
  <img
    src="https://avatars.githubusercontent.com/u/119951373?v=4"
    alt="User avatar"
    className="avatar"
  />
);

const Intro = () => (
  <>
    <h1>João Gabriel</h1>
    <p>
      Tenho 22 anos e moro em Curitiba. Comecei a entrar no mundo da programação
      no meu emprego anterior, como trabalhava na área financeira, vi que muitos
      processos e problemas do dia a dia poderiam ser resolvidos com python, e
      desde então, fui conhecendo a área e me encontrei no javascript. No início
      do ano, troquei a faculdade de economia por ADS, comecei a acompanhar os
      vídeos do Roger e tenho me dedicado integralmente à fluência em
      javascript, e como sinto que estou próximo, acho que chegou a hora do
      react!
    </p>
  </>
);

const Skill = ({ name, emoji, bgColor }) => (
  <li className={`${bgColor} skill`}>
    {emoji} {name}
  </li>
);

const ListOfSkills = () => (
  <ul className="list-of-skills">
    {skills.map(({ id, name, emoji, bgColor }) => (
      <Skill key={id} name={name} emoji={emoji} bgColor={bgColor} />
    ))}
  </ul>
);

const App = () => (
  <div className="card">
    <Avatar />

    <div className="info">
      <Intro />
      <ListOfSkills />
    </div>
  </div>
);

export { App };
