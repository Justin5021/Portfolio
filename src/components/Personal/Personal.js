import React from 'react';

import {
    Section,
    SectionDivider,
    SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './PersonalStyles';
import { PersonalData } from '../../constants/constants';

const Personal = () => (
    <Section id='personal'>
        <SectionDivider /> <br />
        <SectionTitle>Personal</SectionTitle>
        <Boxes>
            {PersonalData.map((card, index) => (
                <Box key={index}>
                    <BoxNum> {card.number} </BoxNum>
                    <BoxText> {card.text} </BoxText>
                </Box>
            ))}
        </Boxes>
    </Section>
);

export default Personal;
