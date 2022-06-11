import styled from "styled-components";

const FooterDiv = styled.div`
    position: fixed;
    left: 0;
    margin-left: -20px;
    bottom: 0;
    width: 100%;
    background-color: #171717;
    color: #9aa086;
    padding: 20px;
`;

const FooterSubDiv = styled.div`
    margin-left: 20px;
    padding-bottom: 10px;
`;

const Line = styled.hr`
    border-color: #212327;
`;

const FooterParent = styled.div`
    display: flex;
    justify-content: space-between;
`;



const FooterSubRow = styled.div`
    margin-left: 10px;
`;

const CenterSubRow = styled(FooterSubRow)`
    margin-left: -100px;
`;

const FooterNavLink = styled.a`
    font-family: Arial, Helvetica, sans-serif;
    color: #bdc1c6;
    text-decoration: none;
    font-size: 14px;
    padding: 5px;
    margin: 0px 5px;

    &:hover {
        text-decoration: underline;
    }
`;

const FooterText = styled.p`
    font-size: 14px;
`;

const Footer = () => {
    return (
        <FooterDiv>
            <FooterSubDiv>
                <FooterText>United Kingdom</FooterText>
            </FooterSubDiv>
            <Line />
            <FooterParent>
                <FooterSubRow>
                    <FooterNavLink>Advertising</FooterNavLink>
                    <FooterNavLink>Business</FooterNavLink>
                    <FooterNavLink>How Search works</FooterNavLink>
                </FooterSubRow>
                <CenterSubRow>
                    <FooterText>Carbon neutral since 2007</FooterText>
                </CenterSubRow>
                <FooterSubRow>
                    <FooterNavLink>Privacy</FooterNavLink>
                    <FooterNavLink>Terms</FooterNavLink>
                    <FooterNavLink>Settings</FooterNavLink>
                </FooterSubRow>
            </FooterParent>
        </FooterDiv>
    )
}

export { Footer };