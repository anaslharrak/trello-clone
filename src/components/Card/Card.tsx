import type { Column } from "../Columns/types";
import { StyledCard } from "./styles";


const Card = ({column}: {column: Column}) => {

    return (
        <StyledCard>
            <h1>{column.title}</h1>
        </StyledCard>
    )
}

export default Card;