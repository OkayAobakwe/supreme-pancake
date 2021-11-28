import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box, Heading, Flex, LinkOverlay, LinkBox } from "@chakra-ui/react"
import NextLink from "next/link"

import { api_url } from "../constants/api_url"

interface Meal {
  meals: [{
    strCategory: string;
  }]
}
export const Categories = () => {

  const [state, setState] = useState({
    "data": {} as Meal
  })
  useEffect(() => {
    axios.get(`${api_url}1/list.php?c=list`)
      .then((res) => setState({...state, data: res?.data}))
      .catch((err) => console.log("err", err))
  }, [])
  console.log("data", state?.data)
  return(
    <Flex 
      flexDirection="column"
      alignItems="center"
      h="100%"
    >
      {state?.data?.meals?.map((meal) => (
        <NextLink 
          href="/category/[category]" 
          as={`/category/${meal.strCategory}`}
          key={meal.strCategory}
        >
          <LinkBox as="article">
            <LinkOverlay>
              <Box
                m="auto"
              >
                <Heading>{meal.strCategory}</Heading>
              </Box>
            </LinkOverlay>
          </LinkBox>
        </NextLink>
      ))}
    </Flex>
  )
}