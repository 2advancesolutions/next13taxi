"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <ChakraProvider>
        <Navbar/>
        {children}
        <Footer/>
        </ChakraProvider>
        </body>
    </html>
  )
}
