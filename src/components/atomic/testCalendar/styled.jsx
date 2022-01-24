import styled from 'styled-components'
import { COLORS } from '../../../constants/COLORS'

export const Container = styled.button`
  background-color: ${COLORS.bluecolor};
  border-radius: 6px;
  text-align: center;
  padding: 5px 0;
  border: 1px solid ${COLORS.graycolor};
  display: ${(props) => (props.isActive ? `block` : `none`)};
  background: #a6c0dd;
  :hover {
    cursor: pointer;
  }
  span {
    font-size: 11.5px;
    color: ${COLORS.White};
    margin-right: 5px;
  }
  p {
    text-align: start;
  }
`
export const Activity = styled.div`
  text-align: center;
  align-self: top;
  padding-left: 5px;
`
