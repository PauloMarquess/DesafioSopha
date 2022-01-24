import styled from 'styled-components'
import { COLORS } from '../../../constants/COLORS'

export const Container = styled.div`
  width: 500px;
  position: fixed;
  top: 25%;
  left: 35%;
  background-color: ${COLORS.White};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 0 0 3em ${COLORS.graycolor};
  padding: 10px;
  height: 450px;
  border: 2px solid #d0cecf;
`
export const Card = styled.div`
  margin: 10px 20px;
  h5 {
    color: ${COLORS.secondGray};
    margin-bottom: 5px;
  }
`
export const CardButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  transition: 0ms.5s;
  margin: 10px 0;
`
export const BtnClose = styled.div`
  position: relative;
  width: 100%;
  left: 92%;
  top: 5px;
  Button {
    width: 30px;
    height: 30px;
    padding-right: 3px;
    transition: 0.5s;
    background: transparent;
    color: #000;
    font-size: 20px;
  }
`
