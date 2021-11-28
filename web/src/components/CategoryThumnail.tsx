import { FC } from "react"
import { 
  Box, 
  Center, 
  Image, 
  Stack, 
  Text,
  Link,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react"
import NextLink from "next/link"

import { ThumbProps } from "../types/index"

const CategoryThumb: FC<ThumbProps> = ({name, image, id}: ThumbProps) => {

  return (
    <Center py={12} ml={2} mb={6}>
      <Box
        w="full"
        h="full"
        mb={3}
      >
        <LinkBox>
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
              <Text m="auto">
                <NextLink href="/recipe/[id]" as={`/recipe/${id}`}>
                  <LinkOverlay>
                    {name}
                  </LinkOverlay>
                </NextLink>
              </Text>
          </Stack>
        </LinkBox>
      </Box>
    </Center>
  )
}

export default CategoryThumb