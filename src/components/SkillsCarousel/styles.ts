import styled from 'styled-components'
import { breakpoints, colors } from '../../variables'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Container = styled.div`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-top: 24px;
  }

  .slick-dots {
    li button::before {
      color: ${colors.white};
      font-size: 12px;
    }

    li.slick-active button:before {
      color: ${colors.white};
      opacity: 1;
    }

    margin: 8px 0;
  }
`
