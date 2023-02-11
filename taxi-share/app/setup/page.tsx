"use client"
import { FunctionComponent, ReactElement } from "react";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";


import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    keyframes,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Box,
    Text,
    Icon,
    SimpleGrid,
    Container
} from '@chakra-ui/react';
import { ArrowUpIcon, SmallCloseIcon } from '@chakra-ui/icons';

import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
}

const size = '300px';
const color = 'teal';

const pulseRing = keyframes`
  0% {
  transform: scale(0.33);
}
40%,
50% {
  opacity: 0;
}
100% {
  opacity: 0;
}
  `;



// Initialize once (at the start of your app).
const uploader = Uploader({
    apiKey: "free" // Get production API keys from Upload.io
});

// Configuration options: https://upload.io/uploader#customize
const options = { multi: true };

export const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    );
};


const Setup: FunctionComponent = () => {
    return (
        <UploadButton uploader={uploader}
            options={options}
            onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
            {({ onClick }) =>

                <>
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        h="400px"
                        w="full"
                        overflow="hidden">

                        {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
                        <Box
                            as="div"
                            position="relative"
                            w={size}
                            h={size}
                            _before={{
                                content: "''",
                                position: 'relative',
                                display: 'block',
                                width: '300%',
                                height: '300%',
                                boxSizing: 'border-box',
                                marginLeft: '-100%',
                                marginTop: '-100%',
                                borderRadius: '50%',
                                bgColor: color,
                                animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                            }}>
                            <Avatar
                                src="https://i.pravatar.cc/300"
                                size="full"
                                position="absolute"
                                top={0}
                            />

                            <br>
                            </br>

                        </Box>

                    </Flex>
                    <Center bg='#ed64a6' h='200' color='white'>
                    <Stack spacing={3}>
                    <Container>

  <Text>(4xl) In love with React & Next</Text>
  
  </Container>
</Stack>
                        <Button
                            px={8}
                            mr={2}
                            bg={useColorModeValue('#322659', 'gray.900')}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}
                            onClick={onClick}>
                            File Upload
                            <ArrowUpIcon />
                        </Button>
                    </Center>
                    <Box p={4}>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                            <Feature
                                icon={<Icon as={FcAssistant} w={10} h={10} />}
                                title={'Lifetime Support'}
                                text={
                                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                                }
                            />
                            <Feature
                                icon={<Icon as={FcDonate} w={10} h={10} />}
                                title={'Unlimited Donations'}
                                text={
                                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                                }
                            />
                            <Feature
                                icon={<Icon as={FcInTransit} w={10} h={10} />}
                                title={'Instant Delivery'}
                                text={
                                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                                }
                            />
                        </SimpleGrid>
                    </Box>
                </>

            }
        </UploadButton>);
}

export default Setup;