const App = () => {
  const handleClickToggle = (e) => console.log(e.target.textContent);
  const handleClickPrevious = (e) => console.log(e.target.textContent);
  const handleClickNext = (e) => console.log(e.target.textContent);

  return (
    <>
      <div className="container-close">
        <button onClick={handleClickToggle} className="close">
          <span>Fechar</span>
        </button>
      </div>

      <div className="steps">
        <div className="numbers">
          <div className="active">1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <p className="message">Passo 1: Entender o problema do cliente</p>

        <div className="buttons">
          <button onClick={handleClickPrevious}>
            <span>Anterior</span>
          </button>
          <button onClick={handleClickNext}>
            <span>Próximo</span>
          </button>
        </div>
      </div>
    </>
  );
};

export { App };
