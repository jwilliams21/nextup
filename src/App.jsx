import Home from './components/Home';
import { NextUpLogo } from './components/Logo';

function App() {
  
  return (
    <div className="w-95 min-h-45 max-h-137.5 bg-zinc-900 text-zinc-100 py-2 px-4 shadow-xl overflow-hidden rounded-md border-4 border-cyan-400">
      <NextUpLogo />
      <Home />
    </div>
  )
}

export default App
