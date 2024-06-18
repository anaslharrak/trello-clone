import { useState } from 'react';
import { ColumnsContainer, AddButton, BodyContainer } from './styles';
import { Column } from './types';
import { Card } from '../exports';

const Columns = () => {

    const [columns, setColumns] = useState<Column[]>([
        {
            id: 1,
            title: 'Column 1',
            tasks: [
                {
                    id: 1,
                    title: 'Task 1',
                    description: 'Description 1',
                    completed: false
                }
            ]
        }
    ])

    const addColumn = () => {  
        const newColumn = {
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
        setColumns([...columns, newColumn])
    }

    return (
        <BodyContainer>
            <ColumnsContainer $numberOfColumns={columns.length}>        
                {
                    columns.map((column) => {
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