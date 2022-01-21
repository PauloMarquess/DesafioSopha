import styled from 'styled-components'
import { COLORS } from '../../../constants/COLORS'

export const Container = styled.div`
  width: 480px;
  position: fixed;
  top: 5%;
  left: 35%;
  background-color: ${COLORS.White};
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  box-shadow: 0 0 3em ${COLORS.graycolor};
  padding: 10px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  img {
    width: 22px;
    position: relative;
    right: 30%;
  }

  select {
    width: 60%;
    height: 40px;
    margin: 10px;
    border: solid 1px ${COLORS.graycolor};
    border-radius: 6px;
    padding: 10px;
    appearance: none;
    color: ${COLORS.secondGray};
    background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
  }
  input,
  textarea {
    width: 90%;
    height: 15px;
    margin: 10px;
    border: solid 1px ${COLORS.graycolor};
    border-radius: 6px;
    padding: 10px;
    :first-child {
      border: none;
      border-bottom: 1px solid ${COLORS.graycolor};
      border-radius: 0;
      ::placeholder {
        font-size: 20px;
        color: #ababab;
      }
    }
  }
  textarea {
    height: 30px;
    overflow-y: hidden;
    resize: none;
  }
`

export const Checkout = styled.div`
  display: flex;
  align-items: center;
  input {
    width: auto;
  }
`
export const CardButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0;

  Button {
    background-color: ${COLORS.grayDark};
    padding-right: 20%;
  }
`
export const MiniContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${COLORS.secondGray};
  font-weight: 600;
  p {
    margin-right: 20px;
  }
`
