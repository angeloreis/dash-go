import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData}: ProfileProps) {
    return (
        <Flex align='center'>
            { showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Angelo Reis</Text>
                    <Text
                        color='gray.300'
                        fontSize='small'>
                            angelo.desenvolvedor@gmail.com
                    </Text>
                </Box>
            )}            
            <Avatar size='md' name='Angelo Reis' src='https://github.com/angeloreis.png' />
        </Flex>
    );
}