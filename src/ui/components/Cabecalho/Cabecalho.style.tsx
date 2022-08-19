import { styled } from '@mui/material';


const paddingSize = '20px';
// nome de componente sempre comeca com letra maiscula: CabecalhoContainer
export const CabecalhoContainer = styled('header')` 
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f0f0f0;
    padding: ${({theme}) => theme.spacing(6)};
`; 

<CabecalhoContainer tamanho={50}/>

export const Logo = styled('img')`
    width: 230px;
`;