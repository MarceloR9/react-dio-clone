import React from 'react';
import {FiThumbsUp} from 'react-icons/fi';

import { CardContainer, ImageBackground, Content, UserInfo, UserPicture, PostInfo, HasInfo, } from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://media.licdn.com/dms/image/v2/D4D16AQHJAq3Aw0Zq4g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1724261842707?e=1732147200&v=beta&t=NF8NDJ1RozWIOzIaZClzPk3gm5QBFwKmOOSf1hjxy1I" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/54649031?v=4"/>
                <div>
                    <h4>Marcelo Rodrigues</h4>
                    <p>Há 3 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no bootcamp... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp/> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card };