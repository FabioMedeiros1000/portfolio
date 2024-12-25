import styled from 'styled-components';
import { colors } from '../../variables';
import { Props } from '.';

function getBackgroundColor (backgroundColor: string) {
    if (backgroundColor === 'red'){
        return colors.red
    }

    if (backgroundColor === 'blue'){
        return colors.blue
    }

    return colors.white
}

function getTextColor (backgroundColor: string) {
    if (backgroundColor === 'red' || backgroundColor === 'blue'){
        return colors.white
    }

    return colors.red
}

export const Container = styled.div<Omit<Props, 'children'>>`
    background-color: ${(props) => getBackgroundColor(props.backgroundColor)};
    color: ${(props) => getTextColor(props.backgroundColor)};
    padding: ${(props) => `${props.padding}px 0`};

    h2 {
        margin-bottom: 8px;
    }
`;

