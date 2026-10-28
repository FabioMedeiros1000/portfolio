import styled from 'styled-components'
import { breakpoints, theme } from '../../variables'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Container = styled.ul`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }

  .slick-slide > div {
    padding: 6px;
  }

  .slick-slide li {
    display: grid !important;
    place-items: center;
  }

  .slick-dots {
    li button::before {
      color: ${theme.ash};
      font-size: 12px;
    }

    li.slick-active button:before {
      color: ${theme.red};
      opacity: 1;
    }

    margin: 8px 0;
  }
`
