import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hey, I'm Ata Tolga (you know me as Whattyu). I enjoy working with Next.js and JavaScript Discord bots.
          </h1>
          <p>
          Some of my Projects ⬎
            <a href="https://cariyebot.github.io/">Cariye Bot</a>

          </p>
        </div>
      </Container>
    </>
  )
}

export default HomePage
