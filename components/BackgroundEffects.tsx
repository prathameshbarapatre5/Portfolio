"use client";

import React from 'react'

const BackgroundEffects = () => {
    return (
        <>
            {/* Grid Pattern */}
            <div className="fixed inset-0 bg-grid-pattern z-0 pointer-events-none opacity-40" />
            
            {/* Nebula Purple Glow - Top Left */}
            <div className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] animate-glow-pulse pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" 
                 style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.25), transparent 70%)' }} />
            
            {/* Horizon Blue Glow - Bottom Right */}
            <div className="fixed bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] animate-glow-pulse pointer-events-none translate-x-1/2 translate-y-1/2 z-0" 
                 style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent 70%)', animationDelay: '2s' }} />
            
            {/* Nebula Purple Glow - Center */}
            <div className="fixed top-1/2 left-1/2 w-[500px] h-[500px] rounded-full blur-[100px] animate-float pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" 
                 style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15), transparent 70%)' }} />
        </>
    )
}

export default BackgroundEffects
