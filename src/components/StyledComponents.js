import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100vh;
  margin:10px;
`;
const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vh;
`;

const Title = styled.h1`
    font-weight: 700;
`;
const SubTitle = styled.p`
    font-weight: 400;
`;

const Button = styled.button`
    cursor:pointer;
    border:solid 1px #fea435;
    background:#fea435;
    color:white;
    padding: 1rem 3rem;
    border-radius: 0.2rem;
    margin:5px;

    :focus{
        outline:none
    }

    :hover, :active{
        background:#ffeba9;
        color:#fea435;
        border-color:#ffeba9;
    }
`;


const StyledComponents = ()=>(
    <Wrapper>
        <Title>The Theatre App</Title>
        <SubTitle>Click on the buttons below to see different theatrical texts.</SubTitle>

        <WrapperButton>       
            <Button>Previous</Button>
            <Button>After</Button>
           <img src="/img/Vector.png"></img>
        </WrapperButton>       
    </Wrapper>
)
export default StyledComponents