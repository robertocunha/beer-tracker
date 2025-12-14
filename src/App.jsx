import AboutSection from './AboutSection';
import React, { useState, useEffect } from 'react';
import { Beer, Clock, CheckCircle } from 'lucide-react';
import EntryList from './EntryList';
import ProgressBar from './ProgressBar';
import StatusBox from './StatusBox';
import HamburgerButton from './HamburgerButton';
import SideDrawer from './SideDrawer';

const BeerTracker = () => {
  const [entries, setEntries] = useState([]);
  const [amount, setAmount] = useState('');
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState('menu'); // 'menu' ou 'about'

  // Carrega entradas do localStorage ao iniciar
  useEffect(() => {
    loadEntries();
  }, []);

  // Atualiza o relógio a cada minuto
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const loadEntries = () => {
    try {
      const stored = localStorage.getItem('beer-entries');
      if (stored) {
        setEntries(JSON.parse(stored));
      }
    } catch (error) {
      console.log('Nenhuma entrada anterior encontrada');
    }
  };

  const saveEntries = (newEntries) => {
    try {
      localStorage.setItem('beer-entries', JSON.stringify(newEntries));
    } catch (error) {
      console.error('Erro ao salvar:', error);
    }
  };

  const addEntry = () => {
    const ml = parseFloat(amount);
    if (isNaN(ml) || ml <= 0) {
      alert('Por favor, insira uma quantidade válida');
      return;
    }

    const newEntry = {
      id: Date.now(),
      amount: ml,
      timestamp: Date.now()
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    saveEntries(updatedEntries);
    setAmount('');
  };

  const deleteEntry = (id) => {
    const updatedEntries = entries.filter(e => e.id !== id);
    setEntries(updatedEntries);
    saveEntries(updatedEntries);
  };

  const clearOldEntries = () => {
    const now = Date.now();
    const updatedEntries = entries.filter(e => now - e.timestamp < 36 * 60 * 60 * 1000);
    setEntries(updatedEntries);
    saveEntries(updatedEntries);
  };

  // Calcula total nas últimas 36 horas
  const getActiveTotal = () => {
    const now = currentTime;
    const windowMs = 36 * 60 * 60 * 1000;
    return entries
      .filter(e => now - e.timestamp < windowMs)
      .reduce((sum, e) => sum + e.amount, 0);
  };

  // Encontra a entrada mais antiga ainda ativa
  const getOldestActiveEntry = () => {
    const now = currentTime;
    const windowMs = 36 * 60 * 60 * 1000;
    const activeEntries = entries.filter(e => now - e.timestamp < windowMs);
    if (activeEntries.length === 0) return null;
    return activeEntries[activeEntries.length - 1];
  };

  const formatTimeRemaining = (timestamp) => {
    const now = currentTime;
    const elapsed = now - timestamp;
    const windowMs = 36 * 60 * 60 * 1000;
    const remaining = windowMs - elapsed;

    if (remaining <= 0) return 'Expirado';

    const hours = Math.floor(remaining / (60 * 60 * 1000));
    const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));

    return `${hours}h ${minutes}m`;
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const total = getActiveTotal();
  const oldestEntry = getOldestActiveEntry();
  const percentage = Math.min((total / 700) * 100, 100);
  const isOverLimit = total > 700;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4 overflow-x-hidden">
      <div className="w-full md:max-w-md md:mx-auto relative">
        {/* Botão hambúrguer */}
        <div className="absolute left-0 top-4">
          <HamburgerButton onClick={() => setDrawerOpen(true)} />
        </div>

        {/* Drawer lateral */}
        <SideDrawer
          open={drawerOpen}
          onClose={() => { setDrawerOpen(false); setDrawerContent('menu'); }}
          wide={drawerContent === 'about'}
        >
          {drawerContent === 'menu' ? (
            <ul className="space-y-4">
              <li>
                <button
                  className="block text-lg text-amber-700 hover:underline w-full text-left"
                  onClick={() => setDrawerContent('about')}
                >
                  Sobre
                </button>
              </li>
            </ul>
          ) : (
            <div>
              <button
                className="mb-4 text-sm text-amber-700 hover:underline"
                onClick={() => setDrawerContent('menu')}
              >
                ← Voltar
              </button>
              <AboutSection />
            </div>
          )}
        </SideDrawer>
        {/* Header */}
        <div className="text-center mb-6 pt-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Beer className="w-8 h-8 text-amber-600" />
            <h1 className="text-3xl font-bold text-gray-800">Rastreador</h1>
          </div>
          <p className="text-sm text-gray-600">Limite: 700ml / 36 horas</p>
        </div>

        {/* Entrada */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantidade (ml)
          </label>
          <div className="flex gap-2 overflow-x-hidden">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addEntry()}
              placeholder="350"
              className="w-0 flex-1 min-w-0 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button
              onClick={addEntry}
              className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium whitespace-nowrap"
            >
              Adicionar
            </button>
          </div>
        </div>

        {/* Status */}
        <StatusBox
          total={total}
          isOverLimit={isOverLimit}
          percentage={percentage}
          oldestEntry={oldestEntry}
          formatTimeRemaining={formatTimeRemaining}
        />
        <ProgressBar percentage={percentage} isOverLimit={isOverLimit} />

        {/* Histórico */}
        <EntryList
          entries={entries}
          currentTime={currentTime}
          onDelete={deleteEntry}
          onClearOld={clearOldEntries}
          formatDate={formatDate}
        />

        {/* Footer - Explicação PWA */}
        <div className="mt-6 text-center text-xs text-gray-600 bg-white/50 rounded-lg p-4">
          <p className="mb-1">💡 <strong>Dica:</strong> Adicione à tela inicial do seu celular</p>
          <p>iOS: Safari → Compartilhar → "Adicionar à Tela Inicial"</p>
          <p>Android: Chrome → Menu (⋮) → "Instalar app"</p>
        </div>
      </div>
    </div>
  );
};

export default BeerTracker;