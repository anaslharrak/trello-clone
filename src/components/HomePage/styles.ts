import styled from 'styled-components';

export const PageContainer = styled.div`
    display: grid;
    background-color: #f0f0f0;
    width: 85vw;
    height: 85vh;
    border-radius: 1vmax;
    padding: 2vmax;
`;

export const ColumnsContainer = styled.div<{$numberOfColumns: number}>`
    display: grid;
    grid-template-columns: repeat(${props => props.$numberOfColumns}, minmax(20vmax, 1fr));
    gap: 0.25vmax;
    overflow: scroll;
`;

export const Title = styled.h1`
    font-size: 2.5vmax;
`;