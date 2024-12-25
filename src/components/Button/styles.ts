import styled from 'styled-components'
import { colors } from '../../variables'
import { Props } from '.'

export const ButtonContainer = styled.button<Omit<Props, 'children'>>`
    padding: 8px;
    font-weight: bold;
    font-size: 16px;
    line-height: 22.4px;
    background-color: ${(props) => props.bgColor === 'red' ? colors.red : colors.white};
    border: none;
    color: ${(props) => props.bgColor === 'red' ? colors.white : colors.red};
    border-radius: 8px;
    width: 190px;
    cursor: pointer;
`