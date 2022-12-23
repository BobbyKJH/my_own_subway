import React, { useCallback, useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;

      setSearch(value);
    },
    [search]
  );

  return { search, onChangeSearch };
};

export default useSearch;
