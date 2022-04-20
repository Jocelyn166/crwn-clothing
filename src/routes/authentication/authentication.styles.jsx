import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 900px;
    margin: 30px auto;
    justify-content: space-between;

    @media screen and (max-width: 800px){
     width: 50%;
     display: grid;
     justify-content: center;
     row-gap: 50px;
 }
`;

