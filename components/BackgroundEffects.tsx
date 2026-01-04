"use client";

import React from 'react'

const BackgroundEffects = () => {
    return (
        <>
            {/* Grid Pattern - Subtle White */}
            <div className="fixed inset-0 bg-grid-pattern z-0 pointer-events-none opacity-40" />
            
            {/* Subtle White Glow - Top Left */}
            <div 
                className="fixed top-0 left-0 w-[700px] h-[700px] rounded-full blur-[130px] animate-glow-pulse pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" 
                style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 70%)' }} 
            />
            
            {/* Subtle White Glow - Bottom Right */}
            <div 
                className="fixed bottom-0 right-0 w-[900px] h-[900px] rounded-full blur-[160px] animate-glow-pulse pointer-events-none translate-x-1/2 translate-y-1/2 z-0" 
                style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.06), transparent 70%)', animationDelay: '2s' }} 
            />
            
            {/* Subtle White Glow - Center Floating */}
            <div 
                className="fixed top-1/2 left-1/2 w-[500px] h-[500px] rounded-full blur-[110px] animate-float pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" 
                style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05), transparent 70%)' }} 
            />

            {/* Scattered Star Points */}
            <div className="fixed top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full z-0 animate-glow-pulse"></div>
            <div className="fixed top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full z-0 animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="fixed bottom-1/4 left-2/3 w-1 h-1 bg-white/30 rounded-full z-0 animate-glow-pulse" style={{ animationDelay: '2.5s' }}></div>
            <div className="fixed top-2/3 right-1/4 w-1 h-1 bg-white/30 rounded-full z-0 animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
        </>
    )
}

export default BackgroundEffects
