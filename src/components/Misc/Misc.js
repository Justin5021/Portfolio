import React from 'react';

import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes } from './MiscStyles';
import Button from '../../styles/GlobalComponents/Button';

const Misc = () => (
    <Section id='misc'>
        <SectionDivider /> <br />
        <SectionTitle>Miscellaneous</SectionTitle>
        <Boxes>
            <Box>
                <Button
                    onClick={() =>
                        window.open(
                            'https://drive.google.com/file/d/1oNAqxXlxHuVyjGD82mUH8aoQzZR05aZH/view?usp=sharing',
                            '_blank'
                        )
                    }
                >
                    Reflections
                </Button>
            </Box>
            <Box>
                <Button
                    onClick={() =>
                        window.open(
                            'https://drive.google.com/file/d/1s07LZG7PK5mJuP9DG3mkK9fcAb4y-RK5/view?usp=sharing',
                            '_blank'
                        )
                    }
                >
                    Cover Letter
                </Button>
            </Box>
        </Boxes>
    </Section>
);

export default Misc;
