import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/App.tsx'
import 'src/index.css'
import { PodcasterProvider } from './context/context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <PodcasterProvider>
      <App />
    </PodcasterProvider>
  </StrictMode>
)
