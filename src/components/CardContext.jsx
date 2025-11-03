import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CardContext = createContext();

export function CardProvider({ children }) {
  const [cardholder, setCardholder] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <CardContext.Provider
      value={{
        cardholder,
        setCardholder,
        cardnumber,
        setCardnumber,
        exp,
        setExp,
        cvv,
        setCvv,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
