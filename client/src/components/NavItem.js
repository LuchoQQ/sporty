import { Text, useTheme } from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom'


const NavItem = ({path, name}) => {
    const location = useLocation().pathname
    const theme = useTheme()
    return (
        <>
            <NavLink to={path}>
                <Text color={location === path ? theme.colors.primary : "#404040"} fontSize={['1rem', '1rem', '1rem', '1rem', '1rem', '1.5rem']} textAlign='center'>{name}</Text>
            </NavLink>
        </>
    )
}

export default NavItem