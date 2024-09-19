import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'

const Login = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return(<>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para aprender com experts.
                </Title>
            </Column>
            <Column>
            <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>
                <form>
                    <Input placeholder="E-Mail" leftIcon={<MdEmail/>}/>
                    <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                    <Button title="Entrar" variant='secondary' onClick={handleClickSignIn} type="button"/>
                </form>
            </Wrapper>
            <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar conta</CriarText>    
            </Row>    
            </Column>
        </Container>
    </>)
}

export {Login};