import React from 'react'
import styled from 'styled-components'


const Text = styled.div`
 background-color: ${(props) => props.theme.colors.BgColor};
 width: 100%;

`

const TextWrap = styled.div`
    margin: 0 auto;
    
    text-align: center;
    color: ${(props) => props.theme.colors.Color};
    h1{
        padding-top: 40px;
        font-size: 30px;
    }

`
function Header() {
  return (
    <TextWrap>
        <Text>
            <h1>Busan Festival</h1>
        </Text>
    </TextWrap>
  )
}

export default Header