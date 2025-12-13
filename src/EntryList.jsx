import React from 'react';

// props: entries (array), currentTime (timestamp), onDelete (function), onClearOld (function), formatDate (function)
const EntryList = ({ entries, currentTime, onDelete, onClearOld, formatDate }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Histórico</h2>
        {entries.length > 0 && (
          <button
            onClick={onClearOld}
            className="text-xs text-amber-600 hover:text-amber-700"
          >
            Limpar expirados
          </button>
        )}
      </div>

      {entries.length === 0 ? (
        <p className="text-center text-gray-500 py-8">Nenhuma entrada ainda</p>
      ) : (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {entries.map((entry) => {
            const now = currentTime;
            const isExpired = now - entry.timestamp >= 36 * 60 * 60 * 1000;
            return (
              <div
                key={entry.id}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  isExpired ? 'bg-gray-100 opacity-50' : 'bg-amber-50'
                }`}
              >
                <div>
                  <p className="font-semibold text-gray-800">{entry.amount} ml</p>
                  <p className="text-xs text-gray-600">{formatDate(entry.timestamp)}</p>
                </div>
                <button
                  onClick={() => onDelete(entry.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remover
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EntryList;
