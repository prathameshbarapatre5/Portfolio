import React from 'react'

export const CircularText = ({ className, ...rest }: any) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} {...rest}>
        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
        <text>
            <textPath href="#circlePath" fill="currentColor">
                Robotics Engineer • Space Enthusiast •
            </textPath>
        </text>
    </svg>
)

export const LinkArrow = ({ className, ...rest }: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}>
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
)
