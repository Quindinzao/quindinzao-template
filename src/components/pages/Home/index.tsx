// External libraries
import React from 'react'
import theme from '../../../styles/theme'

// Components
import Card from '../../common/Card'

// Styled
import {
  Avatar,
  AvatarContent,
  Column,
  Container,
  Content,
  Grid,
  Row
} from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Row>
          <AvatarContent>
            <Avatar />
          </AvatarContent>
          <Column>
            <h5>Hello, traveller 🖖</h5>
            <h5>My name is João, I’m 20 and I'm a React developer.</h5>
          </Column>
        </Row>
        <Grid>
          <Card
            height='100%'
            minHeight='240px'
            width='100%'
            background={theme.colors.gray_600}
            borderRadius='24px'
          ></Card>
          <Card
            height='100%'
            minHeight='240px'
            width='100%'
            background={`linear-gradient(${theme.colors.salmon}, ${theme.colors.pink})`}
            borderRadius='24px'
          ></Card>
        </Grid>
      </Content>
    </Container>
  )
}

export default Home
