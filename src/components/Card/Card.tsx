import type { Column } from "../Columns/types";
import { StyledCard } from "./styles";


const Card = ({column}: {column: Column}) => {

    return (
        <StyledCard>
            <h1>{column.title}</h1>

            <div>
                {
                    column.tasks.map((task) => {
                        return (
                            <div key={task.id}>
                                <h3>{task.title}</h3>
                                <p>{task.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </StyledCard>
    )
}

export default Card;