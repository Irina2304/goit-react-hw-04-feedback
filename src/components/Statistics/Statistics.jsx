import { List } from "./Statistics.styled";


export const Statistics = ({ value, total, positivePercentage }) => {
    const { good, neutral, bad } = value;
    
    return (
        <List>
            <li>Good: { good } </li>
            <li> Neutral: { neutral } </li>
            <li> Bad: { bad } </li>
            <li> Total: {total} </li>
            <li> Positiv feedback: {positivePercentage}%</li>
        </List>
    );

};
