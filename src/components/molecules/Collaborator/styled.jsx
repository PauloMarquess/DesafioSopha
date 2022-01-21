import styled from 'styled-components'
import { COLORS } from '../../../constants/COLORS'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`
export const List = styled.td`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 10px;
  border: 1px solid ${COLORS.graycolor};
  width: 100%;
  height: 100px;
`
export const Table = styled.div`
  display: flex;
`
