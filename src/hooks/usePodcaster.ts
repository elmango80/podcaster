import { useContext } from 'react'
import PodcasterContext from 'src/context/PodcasterContext'

export const usePodcasterContext = () => {
  const context = useContext(PodcasterContext)
  if (!context) {
    throw new Error(
      'usePodcasterContext should be used inside a PodcasterContextProvider'
    )
  }
  return context
}
