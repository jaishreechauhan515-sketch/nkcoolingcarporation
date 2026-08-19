import React, { useState } from 'react';
import { INITIAL_IMAGE_MANIFEST } from '../data/mockData';
import { ImageManifestItem } from '../types';
import { X, Image as ImageIcon, Copy, Check, RefreshCw, Upload } from 'lucide-react';

interface ClientImageManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientImageManagerModal: React.FC<ClientImageManagerModalProps> = ({ isOpen, onClose }) => {
  const [manifestItems] = useState<ImageManifestItem[]>(INITIAL_IMAGE_MANIFEST);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyPath = (path: string, id: string) => {
    navigator.clipboard.writeText(path);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="relative max-w-4xl w-full bg-white border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        
        {/* Modal Header */}
        <div className="p-6 bg-zinc-50 border-b border-zinc-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-zinc-900">
                Client Image Asset Manager & Placeholder System
              </h3>
              <p className="text-xs text-zinc-500 font-medium">
                Easy asset mapping paths for client-provided photos & replaceability
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-white hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 border border-zinc-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs text-zinc-600 space-y-1 font-medium">
            <span className="font-extrabold text-indigo-900 block">How to swap with client real photos:</span>
            <p>
              When replacing default images with client photos, drop the client image file into the project build folder or update the mapped asset URL in <code className="text-indigo-600 font-mono bg-white px-1.5 py-0.5 rounded border border-indigo-100">src/data/mockData.ts</code>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {manifestItems.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-zinc-900 uppercase">{item.name}</span>
                  <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <img
                    src={item.currentUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl border border-zinc-200"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-1 text-xs text-zinc-600 flex-1">
                    <p className="text-[11px] text-zinc-500 font-medium">{item.description}</p>
                    <div className="flex items-center justify-between bg-white p-2 rounded-xl font-mono text-[10px] text-indigo-600 border border-zinc-200">
                      <span className="truncate">{item.placeholderPath}</span>
                      <button
                        onClick={() => handleCopyPath(item.placeholderPath, item.id)}
                        className="text-zinc-400 hover:text-zinc-900 ml-2 p-0.5"
                        title="Copy placeholder path"
                      >
                        {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-50 border-t border-zinc-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold text-xs transition"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
