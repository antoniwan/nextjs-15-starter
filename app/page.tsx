import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import { Github } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-border bg-background pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4">
          Raiz - Next.js 15.2.1 Template
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-background via-background lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ModeToggle />
        </div>
      </div>

      <Card className="mt-16 w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Raiz</CardTitle>
          <CardDescription>A minimal, best-in-class foundation with shadcn/ui and Tailwind CSS</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Raiz (Spanish for "root") is a starting point for your Next.js projects. It includes shadcn/ui components,
            Radix UI primitives, and Tailwind CSS for styling.
          </p>
          <p className="mt-4 text-sm">
            Current theme:{" "}
            <span className="font-bold dark:text-white text-black">
              {"{ "}dark: <span className="dark:inline hidden">✓</span>
              <span className="dark:hidden inline">✗</span>, light: <span className="dark:inline hidden">✗</span>
              <span className="dark:hidden inline">✓</span>
              {"}"}
            </span>
          </p>
          <p className="mt-2 text-sm">
            Background color:{" "}
            <span className="font-bold bg-background text-foreground px-2 py-1 rounded">bg-background</span>
          </p>
          <p className="mt-2 text-sm">
            Text color:{" "}
            <span className="font-bold text-foreground px-2 py-1 rounded border border-border">text-foreground</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="https://github.com/shadcn-ui/ui" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              shadcn/ui
            </Link>
          </Button>
          <Button asChild>
            <Link href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
              Documentation
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}

