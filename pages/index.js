import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hey there 🙋, I'm Whattyu. I currently working with Next.js and building JavaScript Discord bots.
          </h1>
          <h2>
            Some of my Projects ⬎
          </h2>
          <p>
            <ul>
              <li><a href="https://cariyebot.github.io/" target="_blank">My First Bot -> Cariye Bot</a> </li>
              <li><a href="https://top.gg/bot/849663572308918343/" target="_blank">My Second (and best) Bot -> Cariye+ Bot</a> </li>
              <li><a href="https://calculate.whattyu.repl.co/" target="_blank">My Basic Calculator Site</a> </li>
              <li><a href="https://tetris-game.whattyu.repl.co/" target="_blank">My Basic Tetris Game</a> </li>
              <li><a href="https://tetris-game.whattyu.repl.co/" target="_blank">My Basic Python Projects</a> </li>
            </ul>
          </p>
    </div>
  </Container>
</>
  )
}

export default HomePage;
