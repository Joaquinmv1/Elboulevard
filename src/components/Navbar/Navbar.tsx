import { BsFillCartCheckFill } from 'react-icons/bs'
import { Header } from './style'

export const Navbar = () => {
  return (
    <Header>
      <h2>El <span>Boulevard</span></h2>
      <div>
        <i><BsFillCartCheckFill /></i>
      </div>
    </Header>
  )
}

