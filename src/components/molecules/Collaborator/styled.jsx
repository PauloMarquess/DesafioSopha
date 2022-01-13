import styled from 'styled-components'
import { COLORS } from '../../../constants/COLORS'

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
`
export const List = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    border: 1px solid ${COLORS.graycolor};
    width: 100%;
    height: 100px;
`
