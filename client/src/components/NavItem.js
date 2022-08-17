import { Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
const NavItem = ({path, name}) => {
    return (
        <>
            <NavLink to={path}>
                <Text color="#404040">{name}</Text>
            </NavLink>
        </>
    )
}

export default NavItem