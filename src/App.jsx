import { useEffect, useState } from 'react';

// https://currencylayer.com/

const apiKey = 'b6a376e2eded2305abfc372f35de4dcd';

const getUrl = (apiKey, sourceCurrency) =>
  `http://apilayer.net/api/live?access_key=${apiKey}&currencies=BRL,USD,EUR&source=${sourceCurrency}&format=1`;

const App = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState('BRL');
  const [convertCurrency, setConvertCurrency] = useState('USD');
  const [exchange, setExchange] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch(getUrl(apiKey, sourceCurrency))
      .then((r) => r.json())
      .then((data) => setData(data));
  }, [sourceCurrency]);

  useEffect(() => {
    setExchange(
      sourceCurrency === convertCurrency
        ? 1
        : (1 / data?.quotes[sourceCurrency + convertCurrency]).toFixed(2),
    );
    setValue(inputValue * exchange);
  }, [inputValue, exchange, sourceCurrency, convertCurrency, data]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input
        onChange={(e) => {
          handleInputChange(e);
        }}
        placeholder={sourceCurrency}
        type="number"
        autoFocus
      />

      <div className="selects">
        <select
          value={sourceCurrency}
          onChange={(e) => setSourceCurrency(e.target.value)}
        >
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <select
          value={convertCurrency}
          onChange={(e) => setConvertCurrency(e.target.value)}
        >
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      {inputValue && (
        <h2>
          {convertCurrency} {value}
        </h2>
      )}
    </>
  );
};

export { App };
