import Precos from './components/Precos';
import Contato from './components/Contato';
import Rodape from './components/Rodape';

export default function App() {
  return (
    <div className="bg-zinc-900 min-h-screen text-zinc-100 font-sans scroll-smooth">
      <Precos />
      <Contato />
      <Rodape />
    </div>
  );
}