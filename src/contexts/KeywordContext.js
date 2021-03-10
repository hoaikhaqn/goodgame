
import React, { useState, createContext } from "react";

export const KeywordContext = createContext();

export const KeywordProvider = (props) => {
  const [keyword, setKeyword] = useState(null);

  return (
    <KeywordContext.Provider value={{ keyword, setKeyword }}>
      {props.children}
    </KeywordContext.Provider>
  );
}