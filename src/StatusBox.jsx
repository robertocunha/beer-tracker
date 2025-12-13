import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';

// StatusBox
// Exibe o status do consumo atual: total, limite, ícone de sucesso ou alerta e tempo restante para reset.
// Pontos de atenção: apresentação do total, destaque visual ao ultrapassar limite, uso de props para manter o componente genérico.

const StatusBox = ({ total, isOverLimit, percentage, oldestEntry, formatTimeRemaining }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-sm text-gray-600">Total (36h)</p>
        <p className={`text-3xl font-bold ${isOverLimit ? 'text-red-600' : 'text-gray-800'}`}>
          {total.toFixed(0)} ml
        </p>
      </div>
      {!isOverLimit && total < 700 ? (
        <CheckCircle className="w-12 h-12 text-green-500" />
      ) : isOverLimit ? (
        <span className="text-4xl">⚠️</span>
      ) : null}
    </div>
    {/* Tempo restante */}
    {oldestEntry && (
      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
        <Clock className="w-4 h-4" />
        <span>
          Janela reseta em: <strong>{formatTimeRemaining(oldestEntry.timestamp)}</strong>
        </span>
      </div>
    )}
  </div>
);

export default StatusBox;
