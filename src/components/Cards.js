import { featureContents, articleContents } from "../contents";
import { StyledCards, Card, Article, ArticleImg, ArticleBody, CardLink} from "./styles/Cards.styled";
import { BrowserRouter as Router } from "react-router-dom";

export function FeatureCard() {
    return (
        <StyledCards>
            {featureContents.map ((featureContent, index) => (
                <Card key={index}>
                    <img src={`./images/${featureContent.icon}`} alt="content icon" />
                    <h3>{featureContent.title}</h3>
                    <p>{featureContent.body}</p>
                </Card>
            ))}
        </StyledCards>
    )
}

export function ArticleCard() {
    return (
        <StyledCards>
            <Router>
            {articleContents.map ((articleContent, index) => (
                <Article key={index}>
                    <ArticleImg>
                        <img src={`./images/${articleContent.image}`} alt="content icon" />
                    </ArticleImg>
                    <ArticleBody>
                        <p>By {articleContent.author}</p>
                        <h3>
                            <CardLink to="/">
                                {articleContent.title}
                            </CardLink>
                        </h3>
                        <p>{articleContent.body}</p>
                    </ArticleBody>
                </Article>
            ))}
            </Router>
        </StyledCards>
    )
}