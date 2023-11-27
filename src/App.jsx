import { useState, useEffect } from 'react';

// const App = () => {
//   const [img, setImg] = useState([]);

//   useEffect(() => {
//     fetch('./src/api.json')
//       .then((r) => r.json())
//       .then((apiData) =>
//         setImg(apiData.data),
//       )
//       .catch(console.log);
//   }, []);

//   // useEffect(() => {
//   //   setImg((prev) => [...prev, img[0], img[1], img[2]]);
//   // }, [img]);

//   return (
//     <ul style={{ display: 'flex' }}>
//       {img.map((img) => (
//         <img key={img.id} src={img.thumbs.small} alt="" />
//       ))}
//     </ul>
//   );
// };

// const App = () => {
//   const [img, setImg] = useState([]);

//   useEffect(() => {
//     fetch('./src/api.json')
//       .then((r) => r.json())
//       .then((apiData) =>
//         setImg([
//           apiData.data[Math.floor(Math.random() * 24)],
//           apiData.data[Math.floor(Math.random() * 24)],
//           apiData.data[Math.floor(Math.random() * 24)],
//         ]),
//       )
//       .catch(console.log);
//   }, []);

//   // useEffect(() => {
//   //   setImg((prev) => [...prev, img[0], img[1], img[2]]);
//   // }, [img]);

//   return (
//     <ul style={{ display: 'flex' }}>
//       {img.map((img) => (
//         <img key={img.id} src={img.thumbs.small} alt="" />
//       ))}
//     </ul>
//   );
// };

const Toggle = ({ shouldBeOpen, onClickToggle }) => (
  <div className="container-toggle">
    <button onClick={onClickToggle} className="toggle">
      <span>{shouldBeOpen ? 'Fechar' : 'Abrir'}</span>
    </button>
  </div>
);

const Steps = ({ shouldBeOpen, steps, step, onClickPrevious, onClickNext }) =>
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
        Passo {step}: {steps[step - 1]?.description}
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
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/joaogabriel-fn/fake-data/main/fake-data.json',
    )
      .then((response) => response.json())
      .then((data) => setSteps(data));
  }, []);

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
        steps={steps}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </>
  );
};

export { App };
