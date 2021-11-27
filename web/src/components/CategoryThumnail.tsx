import { FC } from "react"
import { Box, Center, Image, Stack, Text } from "@chakra-ui/react"

type ThumbProps = {
  name: string,
  image: string,
}
const CategoryThumb: FC<ThumbProps> = ({name, image}: ThumbProps) => {

  return (
    <Center py={12} ml={2} mb={6}>
      <Box
        w="full"
        h="full"
        mb={3}
      >
        <Box
          rounded={"lg"}
          height={"230px"}
        >
          <Center>
            <Image 
              align={"center"}
              src={image}
              height={230}
              width={282}
              objectFit={'cover'}
            />
          </Center>
        </Box>
        <Stack align={"center"}>
          <Text m="auto">{name}</Text>
        </Stack>
      </Box>
    </Center>
  )
}

export default CategoryThumb