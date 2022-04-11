import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/';


const SearchIcon = styled(Search)`
    color:blue;
    height: 13px;
    width: 25px;
`

const SearchBackground = styled.div`
    background-color: #E1D5FB;
    width: 100%;
    min-height: 100px;
    max-height: 400px;
`

export { SearchIcon, SearchBackground };