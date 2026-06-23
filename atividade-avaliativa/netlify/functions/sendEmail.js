/* global require, exports, process */
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Metodo nao permitido' };
  }

  const { email, mensagem } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'ferreiranathalia321@gmail.com', 
      subject: `Contato da Landing Page - ${email}`,
      text: `Remetente: ${email}\n\nMensagem enviada:\n${mensagem}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Enviado com sucesso' }),
    };
  } catch (erro) {
    console.error(erro);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro no servidor' }),
    };
  }
};