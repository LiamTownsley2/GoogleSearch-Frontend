import SearchImg from '../images/search.png';
import styled from "styled-components";

const SearchInput = styled.input`
    background: none;
    border: 1px solid #5f6368;
    border-radius: 50px;
    padding: 13px 150px;
`;

// const ImageDiv = styled.div`
//     color: white;
// `;
// const SearchImage = styled.img`
//     color: white;
//     height: 25px;
// `;
// const MicrophoneImage = styled.img`
//     color: white;
//     height: 25px;
// `;

const SearchBar = () => {
    return (
        <form>
            <SearchInput type={'text'} />
            {/* <ImageDiv>
                <SearchImage src={SearchImg} />
                <MicrophoneImage src={SearchImg} />
            </ImageDiv> */}
        </form>
    )
}

export { SearchBar };