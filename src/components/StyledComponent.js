import React from 'react';
import styled from 'styled-components';

const StyledComponent = () =>{


  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: papayared;
  `;

  const Wrapper = styled.section`
    padding: 2em;
    margin-top:1em;
    margin-bottom:1em;
    background: olivedrab;
    border: 3px solid gold;
    border-radius: 20%;
  `;

  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "crimson" : "white"};
    color: ${props => props.primary ? "white" : "crimson"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  const GoldButton = styled(Button)`
    color: gold;
    border-color: gold;
  `;

  const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />



    return(
      <div>
        <Wrapper>
          <Title>Styled Components</Title>
          <Button>Normal</Button>
          <Button primary>Primary</Button><br />
          <Button as="a" href="/">Link with Button styles</Button>
          <GoldButton as="a" href="/">Link with Gold Button styles</GoldButton><br />
          <Button as={ReversedButton}>Custom Button, Normal Button Styled</Button>
        </Wrapper>
      </div>
    )


}

export default StyledComponent
