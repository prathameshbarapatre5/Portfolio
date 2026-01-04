"use client";

import React from 'react'

const BackgroundEffects = () => {
    return (
        <>
            {/* Grid Pattern - Telemetry Blue */}
            <div className="fixed inset-0 bg-grid-pattern z-0 pointer-events-none opacity-40" />
            
            {/* Telemetry Blue Glow - Top Left */}
            <div 
                className="fixed top-0 left-0 w-[700px] h-[700px] rounded-full blur-[130px] animate-glow-pulse pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" 
                style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25), transparent 70%)' }} 
            />
            
            {/* Hologram Cyan Glow - Bottom Right */}
            <div 
                className="fixed bottom-0 right-0 w-[900px] h-[900px] rounded-full blur-[160px] animate-glow-pulse pointer-events-none translate-x-1/2 translate-y-1/2 z-0" 
                style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2), transparent 70%)', animationDelay: '2s' }} 
            />
            
            {/* Telemetry Blue Glow - Center Floating */}
            <div 
                className="fixed top-1/2 left-1/2 w-[500px] h-[500px] rounded-full blur-[110px] animate-float pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" 
                style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15), transparent 70%)' }} 
            />
        </>
    )
}

export default BackgroundEffects
