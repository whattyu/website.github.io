import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hey there 🙋, I'm Ata Tolga (you know me as Whattyu). I currently working with Next.js and building JavaScript Discord bots.
          </h1>
        </div>
        <div>
          <h2>
            Some of my Projects ⬎
          </h2>
          <p>
            <ul>
              <li>My First Bot -> <a href="https://cariyebot.github.io/">Cariye Bot</a> </li>
              <li>My Second (and best) Bot -> <a href="https://top.gg/bot/849663572308918343/">Cariye+ Bot</a> </li>
              <li>My Basic Calculator <a href="https://calculate.whattyu.repl.co/">Site</a> </li>
              <li>My Basic <a href="https://tetris-game.whattyu.repl.co/">Tetris Game</a> </li>
              <li>My Basic Python <a href="https://tetris-game.whattyu.repl.co/">Projects</a> </li>
            </ul>
          </p>
    </div>
  </Container>
</>
  )
}

export default HomePage
