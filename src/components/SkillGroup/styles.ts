import styled from 'styled-components'
import { SkillGroupProps } from '.'

export const Group = styled.div<Pick<SkillGroupProps, 'size'>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: ${(props) => props.size};
  }
`
