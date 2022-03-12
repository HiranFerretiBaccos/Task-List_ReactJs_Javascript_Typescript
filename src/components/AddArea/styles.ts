import styled from 'styled-components';

export const Container = styled.div`
    border: 2px dotted #333;
    border-radius: 1rem;
    padding: 0.8rem;
    margin: 1.2rem 0;
    display: flex;
    align-items: center;

    .plus{
        margin-right: 0.6rem;
    }

    input{
        border: 0;
        outline: none;
        background:transparent;
        color: #fff;
        font-size: 1.2rem;
        flex: 1;
    }
`