const App = () => {
  const handleClickMinusStep = () =>
    console.log('Clicou no menos do Intervalo');
  const handleClickMinusCount = () =>
    console.log('Clicou no menos da Contagem');
  const handleClickPlusStep = () => console.log('Clicou no mais do Intervalo');
  const handleClickPlusCount = () => console.log('Clicou no mais da Contagem');

  return (
    <div className="container">
      <div className="count">
        <button onClick={handleClickMinusStep}>-</button>
        <h2>Intervalo: 1</h2>
        <button onClick={handleClickPlusStep}>+</button>
      </div>

      <div className="count">
        <button onClick={handleClickMinusCount}>-</button>
        <h2>Contagem: 0</h2>
        <button onClick={handleClickPlusCount}>+</button>
      </div>

      <h2>Hoje é Domingo, 22 de out. de 2023</h2>
    </div>
  );
};

export { App };
