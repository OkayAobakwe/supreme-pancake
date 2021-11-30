import React, { FC } from "react"
import { 
  Heading, 
  Container, 
  Stack, 
  Text, 
  Image, 
  Center,
  Flex
} from "@chakra-ui/react"

import { RecipeProps } from "../types/index"

export const CategoryRecipe: FC<RecipeProps> = (props: RecipeProps) => {

  return (
    <Container mt={14}>
      <Stack>
        <Heading>{props.category}</Heading>
        <Image src={props.thumb}/>
        <Center>
          <Heading as="h3">{props.name}</Heading>
        </Center>
        <Stack>
          <Flex flexDirection="column" wrap="nowrap" >
            <Text textDecoration="underline">Ingredients</Text>
          {props.ingredients?.map((i, index: number) => (
            <Text key={index} mr={1}>{index + 1} {" "} {i}</Text>
          ))}
          </Flex>
          <Text textDecoration="underline">Instructions</Text>
          <Text>{props?.intructions}</Text>
        </Stack>
      </Stack>
    </Container>
  )
}