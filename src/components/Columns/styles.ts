import styled from 'styled-components';

export const ColumnsContainer = styled.div<{$numberOfColumns: number}>`
    display: grid;
    grid-template-columns: repeat(${props => props.$numberOfColumns}, minmax(20vmax, 1fr));
    gap: 1vmax;
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1vmax;
    padding: 1vmax;
    align-items: center;
    overflow-y: hidden;
`;

export const AddButton = styled.button`
    width: auto;
    height: auto;
    padding: 2vmax;
    background-color: #ffffff3d;
    cursor: pointer;
    border: none;
    border-radius: 0.5vmax;
    transition: background-color 0.3s;
    color: white;
    white-space: nowrap;

    &:hover {
        background-color: #ffffff5d;
    }
`;
