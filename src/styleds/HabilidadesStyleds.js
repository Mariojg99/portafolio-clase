import styled from "styled-components";

export const HabilidadesStyle = styled.div`
    background: #C9004C;
    color: #fff;
    padding: 10px;
    font-family: 'Poppins', sans-serif;
`

export const HabilidadesH2 = styled.h2`
    font-weight: bold;
`
export const ProgressContainer = styled.div`
    margin-bottom: 10px;
    align-items: center;
    display: grid;
    grid-template-columns: 10% 90%;
    grid-template-rows: 40px;
`

export const ProgressLabel = styled.label`
    font-weight: bold;
    margin-right: 10px;
    grid-column-start: 1;
`

export const ProgressBar = styled.progress`
    width: 60%;
    height: 30px;
    grid-column-start: 2;
`
