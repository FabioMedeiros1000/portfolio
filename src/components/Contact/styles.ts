import styled from 'styled-components'
import { colors } from '../../variables'

type Props = {
    size: string
}

export const Input = styled.input`
    padding: 8px;
    background-color: transparent;
    border: 2px solid ${colors.red};
    width: 100%;
`

export const FormData = styled.div`
    display: flex;
    gap: 16px 24px;
    flex-wrap: wrap;
    margin-bottom: 24px;
`

export const FormGroup = styled.div<Props>`
    width: ${(props) => props.size};
`