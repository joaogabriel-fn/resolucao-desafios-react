import { useState } from 'react';

const steps = [
  {
    id: crypto.randomUUID(),
    description: 'Entender o problema do cliente',
  },
  {
    id: crypto.randomUUID(),
    description: 'Desenvolver a solução do problema',
  },
  {
    id: crypto.randomUUID(),
    description:
      'Repetir até o cliente ficar feliz e encher seu 🍑 de dinheiro',
  },
];

const Toggle = ({ shouldBeOpen, onClickToggle }) => (
  <div className="container-toggle">
    <button onClick={onClickToggle} className="toggle">
      <span>{shouldBeOpen ? 'Fechar' : 'Abrir'}</span>
    </button>
  </div>
);

const Steps = ({ shouldBeOpen, step, onClickPrevious, onClickNext }) =>
  shouldBeOpen && (
    <div className="steps">
      <ul className="numbers">
        {steps.map((item, i) => (
          <li key={item.id} className={i + 1 === step ? 'active' : ''}>
            {i + 1}
          </li>
        ))}
      </ul>

      <p className="message">
        Passo {step}: {steps[step - 1].description}
      </p>

      <div className="buttons">
        <button onClick={onClickPrevious}>
          <span>Anterior</span>
        </button>
        <button onClick={onClickNext}>
          <span>Próximo</span>
        </button>
      </div>
    </div>
  );

const App = () => {
  const [shouldBeOpen, setShouldBeOpen] = useState(true);
  const [step, setStep] = useState(1);

  const handleClickToggle = () => setShouldBeOpen((s) => !s);
  const handleClickPrevious = () => setStep((s) => (s - 1 === 0 ? s : s - 1));
  const handleClickNext = () =>
    setStep((s) => (s === steps.length ? s : s + 1));

  return (
    <>
      <Toggle shouldBeOpen={shouldBeOpen} onClickToggle={handleClickToggle} />

      <Steps
        shouldBeOpen={shouldBeOpen}
        step={step}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </>
  );
};

export { App };
