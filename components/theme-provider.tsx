"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    console.log("ThemeProvider mounted") // Debugging log
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

