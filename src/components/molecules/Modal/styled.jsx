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
    border-radius: 6px;
    box-shadow: 0 0 3em ${COLORS.graycolor};
    padding: 10px;
    Button {
        background-color: ${COLORS.grayDark};
    }
`
export const Card = styled.div`
    margin: 20px;
    h5 {
        color: ${COLORS.secondGray};
    }
`
export const CardButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    transition: 0ms.5s;
    Button {
        :hover {
            background-color: ${COLORS.thirdBlue};
        }
    }
`
export const BtnClose = styled.div`
    position: relative;
    width: 100%;
    left: 97%;
    bottom: 25px;

    Button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        padding-right: 3px;
        transition: 0.5s;

        :hover {
            background-color: ${COLORS.thirdBlue};
            color: ${COLORS.black};
            width: 40px;
            height: 40px;
            font-size: 20px;
        }
    }
`
