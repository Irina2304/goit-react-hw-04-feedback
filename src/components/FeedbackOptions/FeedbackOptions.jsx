import { Container, Btm } from "./FeedbackOption.styled";

export const FeedbackOption = ({ value, onBtnClick }) => {
    
    return (
        <Container>
            {value.map((btn) => (
                <Btm
                    key={btn}
                    type='button'
                    onClick={() => onBtnClick(btn)}
                >  {btn}
                </Btm>))
            }
        </Container >)
    
}

