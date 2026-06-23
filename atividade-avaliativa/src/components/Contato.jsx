import  { useState } from 'react';

export default function Contato() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState('');

  const enviarFormulario = async (e) => {
    e.preventDefault();
    setStatus('carregando');

    try {
      const resposta = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        body: JSON.stringify({ email, mensagem }),
      });

      if (resposta.ok) {
        setStatus('sucesso');
        setEmail('');
        setMensagem('');
      } else {
        setStatus('erro');
      }
    } catch (erro) {
      console.error(erro);
      setStatus('erro');
    }
  };

  return (
    <section className="py-16 px-4 bg-zinc-950" id="contato">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-blue-500 text-sm font-bold uppercase tracking-wide">Mande sua dúvida</span>
        <h2 className="text-3xl font-bold mt-2 mb-4">Entre em contato</h2>
        <p className="text-zinc-400 mb-8">
          Estamos dispostos a tirar qualquer dúvida sobre nossos serviços de desenvolvimento. Mande sua mensagem e responderei assim que possível.
        </p>
        
        <form onSubmit={enviarFormulario} className="flex flex-col gap-4 text-left">
          <input
            type="email"
            placeholder="Seu melhor E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 bg-zinc-800 border border-zinc-700 rounded text-zinc-100 focus:outline-none focus:border-blue-500"
          />
          
          <textarea
            placeholder="Motivo do contato. Ex: Gostaria de saber mais sobre a criação do sistema..."
            required
            rows="4"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="p-3 bg-zinc-800 border border-zinc-700 rounded text-zinc-100 focus:outline-none focus:border-blue-500"
          ></textarea>
          
          <button 
            type="submit" 
            disabled={status === 'carregando'}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded transition-colors disabled:opacity-50"
          >
            {status === 'carregando' ? 'Enviando...' : 'Enviar'}
          </button>

          {status === 'sucesso' && <p className="text-green-500 text-center mt-2">Mensagem enviada com sucesso!</p>}
          {status === 'erro' && <p className="text-red-500 text-center mt-2">Falha ao enviar. Tente novamente.</p>}
        </form>
      </div>
    </section>
  );
}