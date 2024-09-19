import React from 'react'
import logo from '../../assets/logo3.png'
import {Button} from '../Button'

import {BuscarInputContainer, Container, Input,
        Menu, MenuRight, Row, Brapper, UserPicture} from './styles'



const Header = ({autenticado}) => {
  return (
    <Brapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo da dio'/>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
                
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/54649031?v=4"/>
                ) : (
                    <>
                        <MenuRight href='/'>Home</MenuRight>
                        <Button title="Entrar"/>
                        <Button title="Cadastrar"/>
                    </>
                )}
                
            </Row>
        </Container>
    </Brapper>
  )
}

export {Header};