import '../App.css';
import styled from 'styled-components';

export const Titles = styled.h1`
    line-height: 3rem;
    color: white;
    font-size: 3rem;
    margin-bottom: 2rem;
`;

export const MainSection = styled.section`
    margin-top: 10rem;
`;

export const SubSection = styled.div`
    max-width: 1100px;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
`;

export const Button = styled.a`
    background: white;
    color: black;
    padding: 0.8rem 1.5rem;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    border-radius: 20px;
    transition: 0.2s ease-in;
    &:hover {
        transform: scale(0.9);
    }
`;

export const Paragraph = styled.p`
    color: white;
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: start;
`;

export const PhoneImage = styled.img`
    width: 35rem;
`;

function Home() {
    return (
        <div className="App">
            <MainSection>
                <SubSection>
                <PhoneImage src="https://res.cloudinary.com/getapet/image/upload/v1620583059/The_Phone_Cave/phones_b2sg6d.png" alt="" />
                    <div className="d-flex flex-column align-items-start">
                        <Titles>The Phone Cave</Titles>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                            repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
                            commodi placeat ea itaque modi corrupti corporis nam voluptas aut
                            reprehenderit eaque culpa.
                        </Paragraph>
                        <Button href="/phones" className="btn">Explore</Button>
                    </div>
                    
                </SubSection>
            </MainSection>
        </div>
    );
}

export default Home;