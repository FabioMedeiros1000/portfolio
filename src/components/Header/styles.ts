import styled from 'styled-components'
import { theme } from '../../variables'

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${theme.headerBg};
  backdrop-filter: blur(14px);
  border-bottom: 1px solid ${theme.hairlineSoft};
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 56px;

  h1 {
    font-size: 15px;
    font-weight: 600;
    color: ${theme.ink};
    letter-spacing: 0.2px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h1::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 3px;
    background: linear-gradient(135deg, ${theme.red}, ${theme.redDeep});
  }

  .flex-col {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`
