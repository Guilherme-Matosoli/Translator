import styled from 'styled-components';




export const Container = styled.div`
    width: 100%;
    height: 100%;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 7rem;

        padding: 1.5rem;
        border-bottom: 1px solid #e1e1e1;

        @media(max-width: 800px){
            height: 5rem;
        }

        h1{
            font-family: 'Roboto', sans-serif;
            font-size: 3rem;
            font-weight: 700;

            @media(max-width: 800px){
                font-size: 2.5rem;
            }
        }

        span{
            font-family: 'Roboto', sans-serif;
            font-size: 3rem;
            font-weight: 700; 

            @media(max-width: 800px){
                font-size: 2.5rem;
            }

            a{
                text-decoration: none;
                font-size: 2.5rem;
                color: #000;

                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
`;

export const Content = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: calc(100vh - 12rem);

    padding: 2.5rem;
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 5rem;

    border-top: 1px solid #e1e1e1;
`;