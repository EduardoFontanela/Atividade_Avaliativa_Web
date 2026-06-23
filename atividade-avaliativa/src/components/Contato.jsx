import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contato() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState('');
  const [captchaValido, setCaptchaValido] = useState(false);
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValido) {
      setStatus('erro_captcha');
      return;
    }

    setStatus('enviando');
    
    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        body: JSON.stringify({ email, mensagem }),
      });
      
      if (response.ok) {
        setStatus('sucesso');
        setEmail('');
        setMensagem('');
        setCaptchaValido(false);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        setStatus('erro');
      }
    } catch {
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl mx-auto items-center">
          <input
            type="email"
            placeholder="Seu melhor Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 rounded bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#3b82f6]"
          />
          <textarea
            placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
            rows="4"
            className="w-full p-4 rounded bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#3b82f6] resize-none"
          ></textarea>

          <div className="my-4">
            <ReCAPTCHA 
              ref={recaptchaRef} 
              sitekey="6LfI6y8tAAAAAA_y8pH2T6jOurDwbarb_OOBlwys" 
              onChange={(token) => setCaptchaValido(!!token)} 
              theme="dark"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'enviando' || !captchaValido}
            className="w-full md:w-1/3 mx-auto px-8 py-3 bg-[#2563eb] hover:bg-blue-500 text-white font-bold rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {status === 'enviando' ? 'Enviando...' : 'Enviar'}
          </button>

          {status === 'sucesso' && <p className="text-green-500 mt-4">Mensagem enviada com sucesso!</p>}
          {status === 'erro' && <p className="text-red-500 mt-4">Falha ao enviar. Tente novamente.</p>}
          {status === 'erro_captcha' && <p className="text-red-500 mt-4">Por favor, marque a caixa "Não sou um robô".</p>}
        </form>
      </div>
    </section>
  );
}