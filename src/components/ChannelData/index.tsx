import React, {useRef, useEffect} from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>
    useEffect(() => {
            const div = messagesRef.current;
            if(div) {
                div.scrollTop = div.scrollHeight
            }
    }, [messagesRef]);

    return (
        <Container>
                <Messages ref={messagesRef}>
                    <ChannelMessage
                            author='James Ferreira'
                            date='05/07/2020'
                            content='Gosto de Pão'/>

                     <ChannelMessage 
                            author='Marcio José'
                            date = '05/07/2020'
                            content = {
                                <>
                                        <Mention>@James Ferreira</Mention>, Eu também.
                                </>
                            }
                            hasMention
                            isBot/>       
                </Messages>

                <InputWrapper>
                    <Input type='text' placeholder='Conversar em #chat-livre'/>
                    <InputIcon />
                </InputWrapper>
        </Container>
    )
}


export default ChannelData;