import { useContext } from 'react'
import { FilterContext } from '../context'

export function useFilter() {
  const filterContextValue = useContext(FilterContext)

  if (!filterContextValue) {
    throw new Error('Filter context not found');
  }

  const { filter, setFilter } = filterContextValue;

  return { filter, setFilter }
}