import React from 'react';

/**
 * HamburgerButton
 *
 * Botão de menu hambúrguer para abrir/fechar o menu lateral (drawer).
 * Recebe como prop o callback onClick.
 */
const HamburgerButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
    aria-label="Abrir menu"
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-700">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  </button>
);

export default HamburgerButton;
