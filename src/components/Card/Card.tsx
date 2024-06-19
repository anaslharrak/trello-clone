import type { Column } from "../Columns/types";
import { StyledCard, CardTask, TaskContainer, AddTaskButton } from "./styles";


const Card = ({column}: {column: Column}) => {

    return (
        <StyledCard>
            <h1>{column.title}</h1>

            <TaskContainer>
                {
                    column.tasks.map((task) => {
                        return (
                            <CardTask key={task.id}>
                                <h3>{task.title}</h3>
                                <p>{task.description}</p>
                            </CardTask>
                        )
                    })
                }
                <AddTaskButton>Add task</AddTaskButton>
                
            </TaskContainer>

        </StyledCard>
    )
}

export default Card;