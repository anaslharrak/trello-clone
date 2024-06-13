import { useState } from 'react';
import { PageContainer, Title, ColumnsContainer } from './styles';

type Column = {
    id: number;
    title: string;
    tasks?: Task[];
}

type Task = {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
}

const HomePage = () => {
    const [columns, setColumns] = useState<Column[]>([
        {
            id: 1,
            title: 'Column 1',
        }
    
    ])

    const addColumn = () => {  
        const newColumn = {
            id: columns.length + 1,
            title: `Column ${columns.length + 1}`
        }
        setColumns([...columns, newColumn])
    }
    return (
        <>
        <PageContainer>
            <Title>¡Welcome to ToDo!</Title>

        <ColumnsContainer $numberOfColumns={columns.length}>            
                {
                    columns.map((column) => {
                        return (
                            <div key={column.id}>
                                <h1>{column.title}</h1>
                            </div>
                        )
                    })
                }
            <button onClick={addColumn}>Add</button>
        </ColumnsContainer>
            


        </PageContainer>
            
        </>
    )
}

export default HomePage;    