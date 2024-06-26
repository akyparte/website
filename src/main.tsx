import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MyProvider } from './context/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <MyProvider>
        <App />
    </MyProvider>,
)
