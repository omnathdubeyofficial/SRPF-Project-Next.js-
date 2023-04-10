

import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import type { AppProps } from 'next/app'
import "../styles/globals.css"
import "../styles/style.css"
import Layout from '../components/layout'

export default function App({ Component, pageProps }: AppProps) {

  return (
    
  <Layout>
<Component {...pageProps} 
/>
</Layout>
  )
}




   
