import { useContext } from 'react'
import { AppContext}  from '@/app/_components/providers/AppProvider'

export const useApp  = () => useContext(AppContext);