import React, { useState, useEffect } from 'react';

interface SearchProps<T extends { placa: string }> {
  data: T[];
  setFilteredData: React.Dispatch<React.SetStateAction<T[]>>;
}

const Search = <T extends { placa: string }>({
  data,
  setFilteredData
}: SearchProps<T>) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item =>
        item.placa.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [query, data, setFilteredData]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Buscar por placa..."
        className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md w-80 transition-all ease-in-out duration-300 transform focus:outline-none focus:ring-1"
      />
    </div>
  );
};

export default Search;