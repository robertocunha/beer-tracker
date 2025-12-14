import React from 'react';

/**
 * SideDrawer
 *
 * Menu lateral (drawer) que aparece ao clicar no botão hambúrguer.
 * Recebe as props open (bool), onClose (callback) e children (conteúdo do menu).
 */

const SideDrawer = ({ open, onClose, children, wide = false }) => {
  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 z-40 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} ${wide ? 'w-[90vw] max-w-xl' : 'w-64'}`}
        aria-label="Menu lateral"
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Fechar menu"
        >
          ×
        </button>
        <nav className="mt-16 px-6 overflow-y-auto max-h-[90vh]">
          {children}
        </nav>
      </aside>
    </div>
  );
};

export default SideDrawer;
