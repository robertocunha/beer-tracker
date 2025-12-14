import React from 'react';

/**
 * AboutSection
 *
 * Exibe informações sobre o propósito e o setup do app.
 */
const AboutSection = () => (
  <div className="prose max-w-none text-gray-800">
    <h2 className="text-2xl font-bold mb-4">Sobre</h2>
    <p>
      Este app foi construído para testar o tão falado "vibe coding", isto é, a construção de componentes completos sem escrever código diretamente, apenas "pilotando" um assistente de IA.
    </p>
    <p>
      O setup utilizado foi: Github Copilot (plano Pro - US$10 por mês) acessado via plugin no VS Code, o que me permite ter um chat embutido na IDE, escolher entre vários modelos (usei Claude e GPT). O modelo obtém contexto automaticamente, uma vez que ele tem acesso a toda a base de código.
    </p>
    <p>
      Em breve escreverei um relato sobre a experiência e deixarei o link aqui.
    </p>
  </div>
);

export default AboutSection;
