import React, { FC } from "react"
import { Heading, Container, Stack, Text, Image } from "@chakra-ui/react"

import { RecipeProps } from "../types/index"

export const CategoryRecipe: FC<RecipeProps> = (props: RecipeProps) => {

  return (
    <Container>
      <Stack>
        <Heading>{props.category}</Heading>
        <Image src={props.thumb}/>
        <Text>{props.name}</Text>
        <Stack>
          {props.ingredients?.map((i) => (
            <Text key={i.ingredient}>{i.ingredient}</Text>
          ))}
          <Text>{props?.intructions}</Text>
        </Stack>
      </Stack>
    </Container>
  )
}