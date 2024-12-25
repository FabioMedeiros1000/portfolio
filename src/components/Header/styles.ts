import styled from 'styled-components'
import { weights } from '../../variables'

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`

export const Title = styled.h1`
    width: 302px;
`

export const Navbar = styled.nav`
    font-size: 28px;
    font-weight: ${weights.medium};
    line-height: 33.6px;

    li {
        display: inline-block;
        margin-left: 49px;
        cursor: pointer;
    }
`