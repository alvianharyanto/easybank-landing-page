import { StyledMain, Section } from './styles/Main.styled.js'
import Container from './styles/Container.styled.js';
import {FeatureCard, ArticleCard} from './Cards.js';

export default function Main() {
    return (
        <StyledMain>
            <Section itemID="feature" bg='hsl(220, 16%, 96%)'>
                <Container>
                    <h2>Why choose Easybank?</h2>
                    <p>We leverage Open Banking to turn your bank account into your financial hub.
                        Control your finances like never before.</p>
                    <FeatureCard/>
                </Container>
            </Section>
            <Section itemID="article">
                <Container>
                    <h2>Latest Articles</h2>
                    <ArticleCard/>
                </Container>
            </Section>
        </StyledMain>
    )
}