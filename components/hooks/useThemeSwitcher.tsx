import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
    const [mode, setMode] = useState("")

    useEffect(() => {
        const userPref = window.localStorage.getItem("theme");
        if (userPref) {
            let check = userPref === "dark" ? "dark" : "light";
            setMode(check);
            if (check === "dark") {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        } else {
            // System preference
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
            let check = mediaQuery.matches ? "dark" : "light";
            setMode(check);
            if (check === "dark") {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }
    }, [])

    useEffect(() => {
        if (mode === "dark") {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark")
        }
        if (mode === "light") {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark")
        }
    }, [mode])

    return [mode, setMode] as const
}

export default useThemeSwitcher
