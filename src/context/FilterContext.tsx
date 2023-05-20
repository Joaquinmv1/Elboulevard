import { createContext, useState } from "react";

interface FilterContextType {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState('jewelery')

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}