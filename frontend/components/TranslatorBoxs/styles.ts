import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    width: 75rem;
    height: 30rem;

    border: 1px solid #e1e1e1;
    border-radius: 1rem;
    padding: 1.5rem;

    @media(max-width: 800px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 50rem;
        width: 40rem;
    }

    form{
        display: flex;
        align-items: center;
        gap: 2rem;

        width: 41rem;
        height: 100%;

        @media(max-width: 800px){
            display: flex;
            flex-direction: column;
        }
    }

    .initialPhrase{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        background-color: #e1e1e1;
        border-radius: .5rem;
        padding: 1rem;

        width: 30rem;
        height: 100%;

        @media(max-width: 800px){
            display: flex;
            flex-direction: column;
            gap: 1rem;

        }

        input{
            width: 100%;
            height: 3rem;

            border: none;
            outline: none;
            border-radius: .5rem;

            padding: 1rem;

            font-family: 'Roboto', sans-serif;
        }

        textarea{
            width: 100%;
            height: 100%;

            resize: none;
            padding: 1rem;

            font-family: 'Roboto', sans-serif;
            font-size: 2rem;

            outline: none;
            border: none;

            border-radius: .5rem;
        }
    }

    button {
        border: none;
        background-color: #000;

        color: white;
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;

        width: 10rem;
        height: 4rem;
        border-radius: .5rem;


        cursor: pointer;

        transition: background-color 0.5s;
        &:hover{
            background-color: #3e3e3e;
        }
    }

    .finalPhrase{
        background-color: #e1e1e1;
        border-radius: .5rem;
        padding: 1rem;

        width: 30rem;
        height: 100%;

        textarea{
            width: 100%;
            height: 100%;
            background-color: #bbbbbb;

            resize: none;
            padding: 1rem;

            font-family: 'Roboto', sans-serif;
            font-size: 2rem;
            color: black;

            outline: none;
            border: none;

            border-radius: .5rem;
        }
    }
`;