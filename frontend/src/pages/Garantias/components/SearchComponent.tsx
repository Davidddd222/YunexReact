import React, { useState, useEffect } from 'react';

interface SearchProps<T extends { archivo: string }> {
  data: T[];
  setFilteredData: React.Dispatch<React.SetStateAction<T[]>>;
}

const SearchComponent = <T extends { archivo: string }>({
  data,
  setFilteredData
}: SearchProps<T>) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item =>
        item.archivo.toLowerCase().includes(query.toLowerCase())
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
        placeholder="Buscar por nombre de archivo..."
        className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md w-80 transition-all ease-in-out duration-300 transform focus:outline-none focus:ring-1"
      />
    </div>
  );
};

export default SearchComponent;
// Compare this snippet from frontend/src/pages/Garantias/components/SearchComponent.tsx: