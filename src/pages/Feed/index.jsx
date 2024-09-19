import React from 'react';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles'

const Feed = () => {
    return(<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># Ranking 5 TOP da Semana</TitleHighlight>
                <UserInfo percentual={35} name="Marcelo Rodrigues" image="https://avatars.githubusercontent.com/u/54649031?v=4"/>
                <UserInfo percentual={35} name="Marcelo Rodrigues" image="https://avatars.githubusercontent.com/u/54649031?v=4"/>
                <UserInfo percentual={35} name="Marcelo Rodrigues" image="https://avatars.githubusercontent.com/u/54649031?v=4"/>
                <UserInfo percentual={35} name="Marcelo Rodrigues" image="https://avatars.githubusercontent.com/u/54649031?v=4"/>
                <UserInfo percentual={35} name="Marcelo Rodrigues" image="https://avatars.githubusercontent.com/u/54649031?v=4"/>            
            </Column>
        </Container>
    </>)
}

export { Feed };