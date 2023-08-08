"use client"
import { SessionProvider } from "next-auth/react"
import Todo from "../components/todo"

export default function Home() {
  return (
    <SessionProvider>
      <Todo />
    </SessionProvider>
  )
}
