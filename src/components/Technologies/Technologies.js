import React from 'react';
import { DiFirebase, DiReact, DiCode } from 'react-icons/di';
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from '../../styles/GlobalComponents';
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
    <Section id='tech'>
        <SectionDivider />
        <br />
        <SectionTitle> Technologies </SectionTitle>
        <SectionText>
            Over the course of my University I have learnt and used various
            programming languages in inidivudal and group projects. In 2021 I
            began picking up a keener interest in Web Development and started
            using Node JS. At present, I am mainly learning React, Next and
            Express JS, however, I never shy away from an opportunity to learn
            new things.
        </SectionText>
        <List>
            <ListItem>
                <DiReact size='5rem' />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experience with React.js and Next.js
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size='5rem' />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experience with Express.JS, PostgreSQL, MySQL & NoSQL
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiCode size='5rem' />
                <ListContainer>
                    <ListTitle>Others</ListTitle>
                    <ListParagraph>
                        {' '}
                        Learnt Java and C with Data Structures knowledge in C++
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
