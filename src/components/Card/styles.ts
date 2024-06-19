import styled from 'styled-components';

export const StyledCard = styled.div`
    background-color: #2f2f2f;
    border-radius: 1vmax;
    padding: 1vmax;
    color: white;
`;

export const CardTask = styled.div`
    background-color: #3f3f3f;
    border-radius: 1vmax;
    padding: 1vmax;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: #4f4f4f;
    }
`;

export const TaskContainer = styled.div`
    display: grid;
    width: auto;
    height: auto;
    gap: 0.5vmax;
`;

export const AddTaskButton = styled.button`
    text-align: left;
    width: 100%;
    height: auto;
    padding: 1vmax;
    border: none;
    border-radius: 1vmax;
    background-color: #2f2f2f;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #4f4f4f;
    }
`;