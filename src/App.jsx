import Home from './components/Home';
import { NextUpLogo } from './components/Logo';

function App() {
  
  return (
    <div className="w-full max-w-md md:w-95 h-[480px] bg-zinc-900 text-zinc-100 py-3 px-4 shadow-xl border-2 border-cyan-400 box-border mx-auto md:my-4 flex flex-col">
      <NextUpLogo />
      <Home />
    </div>
  )
}

export default App


//min-h-45 max-h-137.5