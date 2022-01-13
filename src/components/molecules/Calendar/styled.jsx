import styled from 'styled-components'
import { COLORS } from '../../../constants/COLORS'
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self:flex-end;
    margin: 10px 10px 0 0;
    border: solid 1px  ${COLORS.graycolor};

`
export const Card = styled.li`
    width: 100%;
    border-right:1px solid ${COLORS.graycolor} ;
    height: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    
`
export const List =styled.div`
    display: flex;
    width: 100%;
`
export const Main =styled.div`
display: flex;
h3{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-self: center;
    border:solid 1px ${COLORS.graycolor};
    height: 60px;
    margin-top: 10px;
    margin-left: 10px;
    text-align: center;
    width: 14.2%;
}

`

export const Pegou =styled.div`
    background-color:${COLORS.graycolor};
    width: 100%;
    border-right:1px solid ${COLORS.graycolor} ;
    height: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 15px;
    color: ${COLORS.secondBlue};
`

