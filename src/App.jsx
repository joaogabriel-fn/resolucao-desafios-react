import { useEffect, useState } from 'react';

const apiKey = 'QDy6Go0nUMm975JnpxTJjSD7cHhJ9jRn';

const getUrl = (apiKey, { purity, categories }) =>
  `/api/v1/search?apikey=${apiKey}&purity=${purity}&categories=${categories}&sorting=random`;

const App = () => {
  const [filter, setFilter] = useState({ shouldRender: false });
  const [img, setImg] = useState([]);
  const [purity, setPurity] = useState('100');
  const [categories, setCategories] = useState('100');
  const [displayNumber, setDisplayNumber] = useState('3');

  useEffect(() => {
    if (filter.shouldRender) {
      fetch(getUrl(apiKey, filter))
        .then((r) => r.json())
        .then((data) => setImg(data.data));
    }
  }, [filter]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFilter((prev) => ({
      ...prev,
      purity: purity,
      categories: categories,
      shouldRender: true,
    }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', gap: 20, justifyContent: 'flex-start' }}
      >
        <label>
          purity
          <select onChange={(e) => setPurity(e.target.value)}>
            <option value="100">sfw</option>
            <option value="010">sketchy</option>
            <option value="001">nsfw</option>
          </select>
        </label>
        <label>
          categories
          <select onChange={(e) => setCategories(e.target.value)}>
            <option value="100">general</option>
            <option value="010">anime</option>
            <option value="001">people</option>
          </select>
        </label>
        <label>
          display number
          <select
            value={displayNumber}
            onChange={(e) => setDisplayNumber(e.target.value)}
          >
            {img.map((img, i) => (
              <option key={img.id} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </label>

        <button>Filter</button>
      </form>
      {filter.shouldRender && (
        <ul>
          {img
            .filter((_, i) => i < displayNumber)
            .map((img) => (
              <img key={img.id} src={img.thumbs.small} alt="" />
            ))}
        </ul>
      )}
    </>
  );
};

export { App };
