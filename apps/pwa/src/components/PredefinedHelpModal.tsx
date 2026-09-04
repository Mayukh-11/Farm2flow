import React from 'react';

interface PredefinedHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (actionKey: string) => void;
}

export const PredefinedHelpModal: React.FC<PredefinedHelpModalProps> = ({
  isOpen,
  onClose,
  onSelectAction
}) => {
  if (!isOpen) return null;

  const quickActions = [
    { key: 'prices', icon: 'payments', label: "Show today's market prices", desc: "View real-time mandi rates & AI demand alerts" },
    { key: 'sell', icon: 'add_circle', label: "Sell my produce", desc: "List crop in 3 simple steps" },
    { key: 'track', icon: 'local_shipping', label: "Track my order", desc: "View live dispatch & logistics status" },
    { key: 'buyers', icon: 'handshake', label: "Find buyers", desc: "Run smart matching algorithm" }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-[430px] bg-surface rounded-t-2xl sm:rounded-2xl p-5 border border-outline-variant shadow-xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-outline-variant pb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">mic</span>
            </div>
            <div>
              <h3 className="text-headline-sm font-bold text-on-surface">Farm2Flow Voice Assistant</h3>
              <p className="text-body-sm text-on-surface-variant text-[12px]">Trigger instant agricultural actions</p>
            </div>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-2.5">
          {quickActions.map(action => (
            <button
              key={action.key}
              onClick={() => {
                onSelectAction(action.key);
                onClose();
              }}
              className="p-3 bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant rounded-xl flex items-center gap-3 text-left transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">{action.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-label-md font-bold text-on-surface">{action.label}</p>
                <p className="text-body-sm text-[12px] text-on-surface-variant truncate">{action.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
