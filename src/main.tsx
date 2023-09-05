import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/App.tsx'
import 'src/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
