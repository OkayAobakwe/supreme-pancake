import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Categories } from "../components/Categories"

const Index = () => (
  <Container height="100vh">
    <Categories />
    <DarkModeSwitch />
  </Container>
)

export default Index
