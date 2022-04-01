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
  console.log("measures", props.measures)
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
            <Flex>
              <Container>
                <Text textDecoration="underline">Ingredients</Text>
                {props.ingredients?.map((i, index: number) => (
                  <Text key={index} mr={1}>{index + 1} {" "} {i}</Text>
                ))}
              </Container>
              <Container>
              <Text textDecoration="underline">Measurements</Text>
                {props.measures?.map((m, index: number) => (
                  <Text key={index}>{m}</Text>
                ))}
              </Container>
            </Flex>
          </Flex>
          <Text textDecoration="underline">Instructions</Text>
          <Text>{props?.intructions}</Text>
        </Stack>
      </Stack>
    </Container>
  )
}