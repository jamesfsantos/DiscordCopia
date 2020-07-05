import React from 'react'

import ChannelButton from '../ChannelButton'

import { Container, Category, AddCategoryIcon } from './styles';


const   ChannelList:   React.FC = () => {
    return(
       <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>
            
            <ChannelButton channelName='chat-livre'/>
            <ChannelButton channelName='perguntas'/>
            <ChannelButton channelName='fortnite'/>
            <ChannelButton channelName='call of duty'/>
            <ChannelButton channelName='outros jogos'/>
       </Container>
    )
}


export default ChannelList;