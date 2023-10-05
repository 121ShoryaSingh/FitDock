import Image from 'next/image'
import Main from '../components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
    <Main heading='Fitdock' message='If something stands between you and your success, move it. Never be denied.' />
    <Footer/>
    </div>
  )
}
