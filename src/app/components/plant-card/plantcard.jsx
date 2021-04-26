import {
    Box,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  // const IMAGE =
  //   '';
  
  const PlantCard = ({category, scientificName, commonName, image}) => {
    return (
      
        <Box mb="28"
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'150px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={180}
              width={280}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {category}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             {scientificName}
            </Heading>
              <Text  color={'gray.600'}>
                {commonName}
              </Text>
          </Stack>
        </Box>

);
  }

  export default PlantCard