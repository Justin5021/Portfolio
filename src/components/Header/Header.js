import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { DiCssdeck } from 'react-icons/di';

import {
    Container,
    Div1,
    Div2,
    Div3,
    NavLink,
    SocialIcons,
    Span,
} from './HeaderStyles';

const Header = () => (
    <Container>
        <Div1>
            <Link href='/'>
                <a
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        marginBottom: '20px',
                    }}
                >
                    <DiCssdeck size='3rem' /> <Span>Justin Chin</Span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href='#about'>
                    <NavLink>About</NavLink>
                </Link>
            </li>
            <li>
                <Link href='#tech'>
                    <NavLink>Tech</NavLink>
                </Link>
            </li>
            <li>
                <Link href='#projects'>
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href='#personal'>
                    <NavLink>Personal</NavLink>
                </Link>
            </li>
            <li>
                <Link href='#misc'>
                    <NavLink>Misc</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href='https://github.com/Justin5021' target='_blank'>
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
        </Div3>
    </Container>
);

export default Header;
