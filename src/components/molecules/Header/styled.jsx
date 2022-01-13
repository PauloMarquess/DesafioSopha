import styled from 'styled-components'
import { COLORS } from '../../../constants/COLORS'


export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    select {
        width: 30%;
        height: 40px;
        margin: 10px 0;
        border: solid 1px ${COLORS.graycolor};
        border-radius: 6px;
        padding: 10px;
        appearance: none;
        color:${COLORS.secondGray} ;
        background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
        background-repeat: no-repeat;
        background-position-x: 100%;
        background-position-y: 5px;
        :focus{
            font-size: 17px;
            font-weight: 500;
        }
    }

    h2 {
        width: 30%;
        font-size: 16px;
        color: ${COLORS.thirdBlue};
    }
    span {
        color: ${COLORS.black};
        margin: 0 15px;
        font-size: 18px;
    }
`
