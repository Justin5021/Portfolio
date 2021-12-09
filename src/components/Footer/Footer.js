import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { SocialIcons } from '../Header/HeaderStyles';
import {
    SloganContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Active Phone</LinkTitle>
                    <LinkItem href='tel:+601116395167'>
                        +60-11-1639-5167
                    </LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href='mailto:jc.wk01@gmail.com'>
                        jc.wk01@gmail.com
                    </LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Inactive Number</LinkTitle>
                    <LinkItem href='tel:+61427093395'>+61-427-093-395</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Chat with me on Discord</LinkTitle>
                    <LinkItem>Justin#8429</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <SloganContainer>
                    <Slogan>"Sharing is caring" ~ Programmers</Slogan>
                </SloganContainer>
                <SocialContainer>
                    <SocialIcons
                        href='https://github.com/Justin5021'
                        target='_blank'
                    >
                        <AiFillGithub size='3rem' />
                    </SocialIcons>
                    <SocialIcons
                        href='https://www.linkedin.com/in/justin-chin-wk/'
                        target='_blank'
                    >
                        <AiFillLinkedin size='3rem' />
                    </SocialIcons>
                    <SocialIcons>
                        <BsDiscord size='3rem' />
                        Justin#8429
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
