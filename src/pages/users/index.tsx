import { Box, Flex,Text, Heading, Button, Icon, Table, Thead, Tbody, Tr, Td, Th, Checkbox, useBreakpointValue } from "@chakra-ui/react";
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        bg: false,
        lg: true
    })

    return (
        <Box>
            <Header />

            <Flex
                width='100%'
                my='6'
                maxWidth={1480}
                mx='auto'
                px='6'>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>

                        <Link href='/users/create' passHref>
                            <Button
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='pink'
                            leftIcon={<Icon as={RiAddLine} fontSize='20'/>}
                            >
                            Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px={['4','4','6']} color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuário</Th>
                                {isWideVersion && <Th>Data de criação</Th> }
                                <Th width='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={['4','4','6']}>
                                    <Checkbox colorScheme='pink' selected/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Angelo Reis</Text>
                                        <Text fontSize='small' color='gray.300'>angelo.desenvolvedor@gmail.com</Text>
                                    </Box>
                                    
                                </Td>
                                {isWideVersion && <Td>11 de Novembro, 2021</Td>}
                                {isWideVersion && <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}
                                        >
                                        Editar
                                    </Button>
                                </Td>}
                            </Tr>
                            <Tr>
                                <Td px={['4','4','6']}>
                                    <Checkbox colorScheme='pink' selected/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Angelo Reis</Text>
                                        <Text fontSize='small' color='gray.300'>angelo.desenvolvedor@gmail.com</Text>
                                    </Box>
                                    
                                </Td>
                                {isWideVersion && <Td>11 de Novembro, 2021</Td>}
                                {isWideVersion && <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}
                                        >
                                        Editar
                                    </Button>
                                </Td>}
                            </Tr>
                            <Tr>
                                <Td px={['4','4','6']}>
                                    <Checkbox colorScheme='pink' selected/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Angelo Reis</Text>
                                        <Text fontSize='small' color='gray.300'>angelo.desenvolvedor@gmail.com</Text>
                                    </Box>
                                    
                                </Td>
                                {isWideVersion && <Td>11 de Novembro, 2021</Td>}
                                {isWideVersion && <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}
                                        >
                                        Editar
                                    </Button>
                                </Td>}
                            </Tr>
                            <Tr>
                                <Td px={['4','4','6']}>
                                    <Checkbox colorScheme='pink' selected/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Angelo Reis</Text>
                                        <Text fontSize='small' color='gray.300'>angelo.desenvolvedor@gmail.com</Text>
                                    </Box>
                                    
                                </Td>
                                {isWideVersion && <Td>11 de Novembro, 2021</Td>}
                                {isWideVersion && <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}
                                        >
                                        Editar
                                    </Button>
                                </Td>}
                            </Tr>
                            <Tr>
                                <Td px={['4','4','6']}>
                                    <Checkbox colorScheme='pink' selected/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Angelo Reis</Text>
                                        <Text fontSize='small' color='gray.300'>angelo.desenvolvedor@gmail.com</Text>
                                    </Box>
                                    
                                </Td>
                                {isWideVersion && <Td>11 de Novembro, 2021</Td>}
                                {isWideVersion && <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}
                                        >
                                        Editar
                                    </Button>
                                </Td>}
                            </Tr>
                            <Tr>
                                <Td px={['4','4','6']}>
                                    <Checkbox colorScheme='pink' selected/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Angelo Reis</Text>
                                        <Text fontSize='small' color='gray.300'>angelo.desenvolvedor@gmail.com</Text>
                                    </Box>
                                    
                                </Td>
                                {isWideVersion && <Td>11 de Novembro, 2021</Td>}
                                {isWideVersion && <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}
                                        >
                                        Editar
                                    </Button>
                                </Td>}
                            </Tr>                            
                        </Tbody> 
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}