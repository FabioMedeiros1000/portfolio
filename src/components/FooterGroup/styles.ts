import styled from 'styled-components'
import { theme } from '../../variables'

export const Container = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${theme.mute};
    font-size: 14px;
    transition: color 0.15s;

    &:hover {
      color: ${theme.ink};

      img {
        opacity: 1;
      }
    }
  }

  img {
    width: 18px;
    height: 18px;
    filter: grayscale(1) brightness(1.4);
    opacity: 0.7;
    transition: opacity 0.15s;
  }
`
