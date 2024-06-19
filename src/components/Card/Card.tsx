import type { Column } from "../../globalTypes";
import { StyledCard, CardTask, TaskContainer, AddTaskButton } from "./styles";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../redux/listSlice";

const Card = ({column}: {column: Column}) => {

    const dispatch = useDispatch()

    const handleAddNewTask = () => {
        const newTask = {
            id: column.tasks.length + 1,
            title: `Task ${column.tasks.length + 1}`,
            description: `Description ${column.tasks.length + 1}`,
            completed: false
        }
        
        dispatch(addNewTask({id: column.id, task: newTask}))
    }

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
                <AddTaskButton onClick={handleAddNewTask}>Add task</AddTaskButton>

            </TaskContainer>

        </StyledCard>
    )
}

export default Card;