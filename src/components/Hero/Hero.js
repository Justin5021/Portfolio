import React from 'react';
import ReactTyped from 'react-typed';
import {
    Section,
    SectionText,
    SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Learn to Improve. <br />
                Improve to Learn.
            </SectionTitle>
            <SectionText>
                <ReactTyped
                    className='typed-effect'
                    strings={[
                        "Hey I'm Justin!",
                        'Nice to meet you!',
                        '3rd Year Software Engineering Student at UTS',
                        'Aspiring Software Developer',
                    ]}
                    typeSpeed={45}
                    backSpeed={20}
                    loop
                />
            </SectionText>
            <Button
                onClick={() =>
                    window.open(
                        'https://drive.google.com/file/d/1tGpyTclvQSUKspJDEaCK8t80yO_Oc6xN/view?usp=sharing',
                        '_blank'
                    )
                }
            >
                View CV
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
