import React, { createContext, useReducer } from 'react'

type State = {
  isLoading: boolean
}

type PodcasterAction = {
  type: 'START_LOADING_PAGE' | 'END_LOADING_PAGE'
  payload?: any
}

const PodcasterContext = createContext<{
  state: State
  dispatch: React.Dispatch<PodcasterAction>
} | null>(null)

interface Props {
  children: JSX.Element
}

export const PodcasterProvider = ({ children }: Props) => {
  const initialState: State = {
    isLoading: false,
  }

  const [state, dispatch] = useReducer(
    (prevState: State, action: PodcasterAction) => {
      switch (action.type) {
        case 'START_LOADING_PAGE':
          return { ...prevState, isLoading: true }
        case 'END_LOADING_PAGE':
          return { ...prevState, isLoading: false }
        default:
          return prevState
      }
    },
    initialState
  )

  return (
    <PodcasterContext.Provider value={{ state, dispatch }}>
      {children}
    </PodcasterContext.Provider>
  )
}

export default PodcasterContext
