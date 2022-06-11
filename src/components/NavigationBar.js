import menu from '../images/menu.png';
import ProfilePicture from '../images/ProfilePicture.png'
import styled from "styled-components";

const NavDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 6px;
    margin-top: 4px;
`;

const NavLink = styled.a`
    font-family: Arial, Helvetica, sans-serif;
    color: #bdc1c6;
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    padding: 5px;
    margin: 0px 5px;

    &:hover {
        text-decoration: underline;
    }
`;

const MoreButton = styled.button`
    background: none;
    border: none;
    padding: 0px 10px;
`;
const ButtonImage = styled.img``;

const LeftDiv = styled.div``;
const RightDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

const AvatarImage = styled.img`
    border-radius: 50%;
    height: 30px;
    padding: 0px 5px;
`;

const NavigationBar = ({ page_author }) => {
    return (
        <NavDiv>
            <LeftDiv>
                <NavLink href="#" target={"_blank"}>About</NavLink>
                <NavLink href="#" target={"_blank"}>Store</NavLink>
            </LeftDiv>
            <RightDiv>
                <NavLink href="#" target={"_blank"}>Gmail</NavLink>
                <NavLink href="#" target={"_blank"}>Images</NavLink>
                <MoreButton>
                    <ButtonImage src={menu} height="20px" />
                </MoreButton>
                <AvatarImage src={ProfilePicture} />
            </RightDiv>
        </NavDiv>
    )
}

export { NavigationBar };