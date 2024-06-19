import { ColumnsContainer, AddButton, BodyContainer } from './styles';
import { Column } from '../../globalTypes';
import { Card } from '../exports';
import { useSelector } from 'react-redux';
import { addNewList } from '../../redux/listSlice';
import { useDispatch } from 'react-redux';
import type { RootState } from '../../redux/listTypes';


const Columns = () => {
    const dispatch = useDispatch()
    const columns = useSelector((state: RootState) => state.lists)

    const addColumn = () => {  
        const newColumn: Column = {
            id: columns.length + 1,
            title: `Column ${columns.length + 1}`,
            tasks: [
                {
                    id: 1,
                    title: 'Task 1',
                    description: 'Description 1',
                    completed: false
                }
            ]
        }
        dispatch(addNewList(newColumn))
    }

    return (
        <BodyContainer>
            <ColumnsContainer $numberOfColumns={columns.length}>        
                {
                    columns.map((column: Column) => {
                        return (
                            <Card key={column.id} column={column} />
                        )
                    })
                }
            </ColumnsContainer>
            <AddButton onClick={addColumn}>Add new column</AddButton>
            
        </BodyContainer>

    )
};

export default Columns;