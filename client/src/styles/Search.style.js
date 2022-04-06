import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/';


const SearchIcon = styled(Search)`
    color:blue;
    height: 50px;
    width: 50px;
`

const SearchBackground = styled.div`
    background-color: #9657E5;
    width: 100%;
    min-height: 100px;
    max-height: 400px;
`

export { SearchIcon, SearchBackground };