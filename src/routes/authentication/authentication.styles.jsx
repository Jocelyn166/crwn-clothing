import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 900px;
    margin: 30px auto;
    justify-content: space-between;

    @media screen and (max-width: 800px){
     width: 380px;
     display: grid;
     grid-template-columns: 1fr;
     row-gap: 50px;
 }
`;

