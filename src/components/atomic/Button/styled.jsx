import styled from 'styled-components'
import { COLORS } from '../../../constants/COLORS'

export const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  button {
    background-color: ${COLORS.bluecolor};
    height: 40px;
    width: 100%;
    border: none;
    border-radius: 6px;
    color: ${COLORS.White};
    font-weight: 600;

    :hover {
      cursor: pointer;
    }
  }
`
