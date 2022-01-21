import styled from 'styled-components'
import { COLORS } from '../../../constants/COLORS'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: flex-end;
  margin: 10px 10px 0 0;
  border: solid 1px ${COLORS.graycolor};
`
export const Card = styled.li`
  width: 100%;
  border-right: 1px solid ${COLORS.graycolor};
  height: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
`
export const List = styled.div`
  display: flex;
  width: 100%;
`
export const Main = styled.div`
  display: flex;
  align-items: center;

  h4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: end;
    border: solid 1px ${COLORS.graycolor};
    height: 60px;
    text-align: center;
    margin-left: 10px;
    width: 14%;
  }
`

export const Current = styled.div`
  background-color: #222222d9;
  width: 100%;
  border-right: 1px solid ${COLORS.graycolor};
  height: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  color: ${COLORS.White};
`
