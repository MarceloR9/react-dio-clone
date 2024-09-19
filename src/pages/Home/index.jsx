import {useNavigate} from 'react-router-dom';

import banner from '../../assets/banner1.png'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { Container, TextContent, Title, TitleHighLight } from './styles'

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return(<>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente
                        <br/>
                    </TitleHighLight>
                    o seu futuro agora!
                </Title>
                <TextContent>
                    Domine as tecnologias usadas pelo mercado!
                </TextContent>
                <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={banner} alt="Imagem principal"/>
            </div>
        </Container>
    </>)
}

export {Home};