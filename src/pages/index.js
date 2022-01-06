import Personal from '../components/Personal/Personal';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Misc from '../components/Misc/Misc';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
    return (
        <Layout>
            <Section grid>
                <Hero />
                <BgAnimation />
            </Section>
            <Timeline />
            <Technologies />
            <Projects />
            <Personal />
            <Misc />
        </Layout>
    );
};

export default Home;
