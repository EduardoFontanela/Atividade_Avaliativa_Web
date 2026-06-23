import minhaLogo from '../assets/logo.png';

export default function Rodape() {
  return (
    <footer className="bg-zinc-900 pt-16 pb-8 px-4 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        
        <div className="flex flex-col items-start">
          <img src={minhaLogo} alt="Logo" className="h-25 w-auto mb-6" />
          <div className="flex gap-5 text-[#3b82f6]">
            
            {/* Ícone do Instagram */}
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* Ícone do Facebook */}
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            {/* Ícone do YouTube */}
            <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>

          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-4 text-lg">Empresa</h4>
          <ul className="flex flex-col gap-3 text-zinc-400 text-sm font-medium">
            <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Sobre nós</a></li>
            <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Faça parte do time</a></li>
            <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4 text-lg">Funcionalidades</h4>
          <ul className="flex flex-col gap-3 text-zinc-400 text-sm font-medium">
            <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Marketing</a></li>
            <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Análise de dados</a></li>
            <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Boot discord</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4 text-lg">Recursos</h4>
          <ul className="flex flex-col gap-3 text-zinc-400 text-sm font-medium">
            <li><a href="#" className="hover:text-[#3b82f6] transition-colors">IOS & Android</a></li>
            <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Teste a Demo</a></li>
            <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Clientes</a></li>
            <li><a href="#" className="hover:text-[#3b82f6] transition-colors">API</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto text-center border-t border-zinc-800 pt-8 text-xs font-medium text-zinc-500">
        <p>Todos os direitos reservados.   ©2026 Eduardo Fontanela</p>
      </div>
    </footer>
  );
}