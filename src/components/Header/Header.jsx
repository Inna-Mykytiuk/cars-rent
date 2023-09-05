import Navigation from 'components/Navigation/Navigation'
import { AppBar } from './Header.styled'
import Container from 'components/Container/Container'


const Header = () => {
  return (
    <AppBar>
      <Container>
        <Navigation/>
      </Container>
    </AppBar>
  )
}

export default Header
