const faqs = [
  {
    id: crypto.randomUUID(),
    title: 'Quem é a maior celebridade do mundo dos games no BR?',
    answer: 'A apresentadora Ana Maria Braga. Joga 3h pra desocupar a cabeça.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Onde fica a europa da américa do sul?',
    answer: 'Argentina. BR vive como rei em Buenos Aires.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Qual é a grande oportunidade para desenvolvedores BR?',
    answer: 'Aproveitar a alta demanda pra ganhar em dólar ou euro.',
  },
];

const Item = ({ title, answer, i }) => (
  <li className="item">
    <p className="number">{i + 1}</p>
    <h2 className="title">{title}</h2>
    <p className="icon">-</p>
    <div className="content-box">{answer}</div>
  </li>
);

const App = () => (
  <ul className="accordion">
    {faqs.map((faq, i) => (
      <Item key={faq.id} title={faq.title} answer={faq.answer} i={i} />
    ))}
  </ul>
);

export { App };
