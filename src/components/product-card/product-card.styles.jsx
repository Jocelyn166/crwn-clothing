import styled from 'styled-components';

export const ProductCardContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;

@media screen and (max-width: 800px){
  height: 200px;
}

img{
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
}
button{
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  padding-left: 0;

  @media screen and (max-width: 800px){
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0;
    font-size: 8px;
    height: 30px;
    line-height: 30px;
    font-weight: normal;
    letter-spacing: 0.1px;
    top: 130px;
    display: none;
  }

}

&:hover {
  img{
    opacity: 0.8;
  }
  button{
    opacity: 0.85;
    display: flex;
    padding: 3px;
  }
}

@media screen and(max-width: 800px){
  height: 170px;

  &:hover {
    img{
      opacity: unset;
    }
    button{
      opacity: unset;
    }
  }
}
`;


export const Footer = styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;

@media screen and (max-width: 800px){
  width: 70%;
}


`;


export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
  @media screen and (max-width: 800px){
    font-size: 10px;
  }
`;


export const Price = styled.span`
width: 10%;
@media screen and (max-width: 800px){
  font-size: 12px;
}
`;


