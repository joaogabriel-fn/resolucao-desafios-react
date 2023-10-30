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

const App = () => {
  const [shouldBeOpen, setShouldBeOpen] = useState(true);
  const [step, setStep] = useState(1);

  const handleClickToggle = () => setShouldBeOpen((s) => !s);
  const handleClickPrevious = () => setStep((s) => (s - 1 === 0 ? s : s - 1));
  const handleClickNext = () =>
    setStep((s) => (s === steps.length ? s : s + 1));

  return (
    <>
      <div className="container-close">
        <button onClick={handleClickToggle} className="close">
          <span>{shouldBeOpen ? 'Fechar' : 'Abrir'}</span>
        </button>
      </div>

      {shouldBeOpen && (
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
            <button onClick={handleClickPrevious}>
              <span>Anterior</span>
            </button>
            <button onClick={handleClickNext}>
              <span>Próximo</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export { App };
