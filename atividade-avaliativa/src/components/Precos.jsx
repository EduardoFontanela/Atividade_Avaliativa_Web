export default function Precos() {
  return (
    <section className="py-20 px-4 bg-zinc-900" id="precos">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#3b82f6] font-bold text-sm uppercase border border-[#3b82f6]/30 px-4 py-1 rounded-full border-dashed">Planos e preços</span>
          <h2 className="text-3xl font-bold text-white mt-6">Nossos planos</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center border border-zinc-800/50 p-8 rounded-2xl border-dashed">
          
          {/* Card Básico */}
          <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-lg">
            <h3 className="font-bold text-white mb-2">Básico</h3>
            <p className="text-zinc-400 text-sm mb-6 h-10">Baixe a ferramenta e comece a utilizar agora mesmo!</p>
            <div className="text-4xl font-bold text-white mb-6">Grátis</div>
            <button className="w-full py-3 mb-8 bg-transparent border border-[#3b82f6] text-[#3b82f6] font-bold rounded hover:bg-[#3b82f6] hover:text-white transition-colors">
              Baixar agora
            </button>
            <ul className="flex flex-col gap-4 text-sm text-zinc-300">
              <li className="flex items-center gap-2"><span className="text-[#3b82f6]">✓</span> Com anúncios</li>
              <li className="flex items-center gap-2"><span className="text-[#3b82f6]">✓</span> Até 10 produtos por dia</li>
              <li className="flex items-center gap-2"><span className="text-[#3b82f6]">✓</span> Utilize sem limitação X</li>
            </ul>
          </div>

          {/* Card Premium */}
          <div className="bg-zinc-800 border-2 border-[#3b82f6] p-8 rounded-xl shadow-2xl relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3b82f6] text-white text-xs font-bold px-4 py-1 rounded-full">
              1º MÊS GRÁTIS
            </div>
            <h3 className="font-bold text-[#3b82f6] mb-2">Premium</h3>
            <p className="text-zinc-300 text-sm mb-6 h-10">Para quem deseja utilizar nossa ferramenta sem limitações!</p>
            <div className="text-4xl font-bold text-white mb-6">R$ 19,90 <span className="text-sm font-normal text-zinc-400">/mês</span></div>
            <button className="w-full py-3 mb-8 bg-[#3b82f6] text-white font-bold rounded hover:bg-blue-500 transition-colors">
              Experimente de graça
            </button>
            <ul className="flex flex-col gap-4 text-sm text-zinc-200">
              <li className="flex items-center gap-2"><span className="text-[#3b82f6]">✓</span> Sem interrupção de anúncios</li>
              <li className="flex items-center gap-2"><span className="text-[#3b82f6]">✓</span> Utilize quantas vezes quiser</li>
              <li className="flex items-center gap-2"><span className="text-[#3b82f6]">✓</span> Utilize todos os produtos disponíveis na plataforma</li>
            </ul>
          </div>

          {/* Card Empresarial */}
          <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-lg">
            <h3 className="font-bold text-white mb-2">Empresarial</h3>
            <p className="text-zinc-400 text-sm mb-6 h-10">Utilize nossa solução na sua empresa. Aprimore seu fluxo.</p>
            <div className="text-4xl font-bold text-white mb-6">R$ 12,90 <span className="text-sm font-normal text-zinc-400">/mês por dev</span></div>
            <button className="w-full py-3 mb-8 bg-transparent border border-[#3b82f6] text-[#3b82f6] font-bold rounded hover:bg-[#3b82f6] hover:text-white transition-colors">
              Baixar agora
            </button>
            <ul className="flex flex-col gap-4 text-sm text-zinc-300">
              <li className="flex items-center gap-2"><span className="text-[#3b82f6]">✓</span> Com anúncios</li>
              <li className="flex items-center gap-2"><span className="text-[#3b82f6]">✓</span> Até 10 produtos por dia</li>
              <li className="flex items-center gap-2"><span className="text-[#3b82f6]">✓</span> Utilize sem limitação X</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}