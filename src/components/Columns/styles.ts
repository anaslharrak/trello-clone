import styled from 'styled-components';

export const ColumnsContainer = styled.div<{$numberOfColumns: number}>`
    display: grid;
    grid-template-columns: repeat(${props => props.$numberOfColumns}, minmax(20vmax, 1fr));
    gap: 1vmax;
    overflow-y: hidden;
    border-color: red;
`;
