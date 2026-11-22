import Home from './components/Home';
import { NextUpLogo } from './components/Logo';

function App() {
  
  return (
    <div className="md:w-95 max-w-full h-fit bg-zinc-900 text-zinc-100 py-2 px-3 shadow-xl overflow-hidden border-2 border-cyan-400 box-border">
      <NextUpLogo />
      <Home />
    </div>
  )
}

export default App


//min-h-45 max-h-137.5