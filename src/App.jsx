import Home from './components/Home';
import { NextUpLogo } from './components/Logo';

function App() {
  
  return (
    <div className="w-100 h-fit bg-zinc-900 text-zinc-100 p-2 shadow-xl overflow-hidden border-4 border-cyan-400">
      <NextUpLogo />
      <Home />
    </div>
  )
}

export default App


//min-h-45 max-h-137.5