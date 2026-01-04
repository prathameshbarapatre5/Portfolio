"use client";

import React from 'react'

const BackgroundEffects = () => {
    return (
        <>
            <div className="fixed inset-0 bg-grid-pattern z-0 pointer-events-none opacity-40" />
            <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-glow-pulse pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[150px] animate-glow-pulse pointer-events-none translate-x-1/2 translate-y-1/2 z-0" style={{ animationDelay: '2s' }} />
            <div className="fixed top-1/2 left-1/2 w-[400px] h-[400px] bg-neonPink/10 rounded-full blur-[100px] animate-float pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />
        </>
    )
}

export default BackgroundEffects
