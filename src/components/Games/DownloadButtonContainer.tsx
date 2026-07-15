// src/components/Games/DownloadButtonContainer.tsx
"use client";

import React, { useState } from 'react';
import { FiDownload, FiCreditCard, FiCheckCircle, FiX, FiShield } from 'react-icons/fi';

interface DownloadButtonContainerProps {
  gameId: string;
  price: number;
  gameTitle: string;
  variant?: 'card' | 'details';
}

export default function DownloadButtonContainer({ gameId, price, gameTitle, variant = 'details' }: DownloadButtonContainerProps) {
  const [activeModal, setActiveModal] = useState<'none' | 'checkout' | 'success'>('none');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const isFree = price === 0;

  // Handles direct binary download operations
  const triggerDownloadAction = () => {
    window.open(`/api/games/${gameId}/download`, '_blank');
  };

  const handleInitialClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents grid layout cards from triggering parent navigation links
    e.stopPropagation();

    if (isFree) {
      triggerDownloadAction();
    } else {
      setActiveModal('checkout');
    }
  };

  const simulatePaymentProcess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setActiveModal('success');
    }, 1500);
  };

  const isCard = variant === 'card';
  
  // DYNAMIC BLUE-PURPLE GRADIENT STYLING RULES
  const buttonStyle = isCard
    ? "h-9 px-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-lg shadow-indigo-600/20 text-[10px] font-bold uppercase tracking-wider"
    : "h-12 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 active:scale-95 transition-all rounded-xl flex items-center gap-2 font-black text-white shadow-lg shadow-indigo-600/30 text-xs uppercase tracking-widest";

  return (
    <>
      {/* TRIGGER INTERACTION CONTROL INTERFACE NODE */}
      <button onClick={handleInitialClick} className={buttonStyle} type="button">
        <FiDownload className="w-3.5 h-3.5" />
        {isCard ? (
          <span>Get Now</span>
        ) : (
          <span>{isFree ? "Get Now: Free Fetch" : "Get Now: Buy Access"}</span>
        )}
      </button>

      {/* OVERLAY SYSTEM BLOCK: STACK ENGINE MODALS */}
      {activeModal !== 'none' && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm font-mono"
          onClick={() => activeModal !== 'checkout' && setActiveModal('none')}
        >
          {/* MODAL PHASE A: CHECKOUT DISPATCH HUB */}
          {activeModal === 'checkout' && (
            <div 
              className="w-full max-w-md border border-white/10 bg-[#0d0f1a] p-6 rounded-2xl shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                onClick={() => setActiveModal('none')}
              >
                <FiX className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <p className="text-[10px] uppercase text-indigo-400 font-bold tracking-widest">Secure Terminal Transaction</p>
                <h3 className="text-lg font-black text-white uppercase truncate">{gameTitle}</h3>
              </div>

              <div className="p-4 bg-[#06070c] border border-white/5 rounded-xl flex items-center justify-between text-xs">
                <span className="text-gray-500">Access Key Value:</span>
                <span className="text-white font-black text-sm">${price.toFixed(2)}</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-[11px] text-gray-500 leading-normal">
                  <FiShield className="text-cyan-400 w-4 h-4 shrink-0 mt-0.5" />
                  <span>Sandbox Environment Enabled. Mock operations placeholder sequence will skip external ledger routing logic tracking matrices.</span>
                </div>

                <button
                  disabled={isProcessing}
                  onClick={simulatePaymentProcess}
                  className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-indigo-950 disabled:to-indigo-900 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-indigo-600/10"
                >
                  <FiCreditCard className="w-4 h-4" />
                  <span>{isProcessing ? "Authorizing Ledger Trace..." : "Confirm Mock Payment"}</span>
                </button>
              </div>
            </div>
          )}

          {/* MODAL PHASE B: SUCCESSION MATRIX DOWNLOAD HANDSHAKE */}
          {activeModal === 'success' && (
            <div 
              className="w-full max-w-md border border-emerald-500/20 bg-[#080a0f] p-8 rounded-2xl shadow-2xl text-center space-y-6 relative animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner shadow-emerald-500/10">
                <FiCheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-white uppercase tracking-wide">Validation Authorization Verified</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Mock transfer complete. Package clearance token linked to core client context profile segment.
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex gap-2.5">
                <button
                  onClick={() => setActiveModal('none')}
                  className="flex-1 h-11 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 text-xs font-bold uppercase rounded-xl transition-all"
                >
                  Dismiss
                </button>
                <button
                  onClick={() => {
                    triggerDownloadAction();
                    setActiveModal('none');
                  }}
                  className="flex-1 h-11 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold uppercase rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
                >
                  <FiDownload className="w-4 h-4" />
                  <span>Run Fetch</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}