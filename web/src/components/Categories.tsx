import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box, Heading, Flex } from "@chakra-ui/react"

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
    >
      <Box
        p={5}
        mb={5}
        my="auto"
      >
        {state?.data?.meals?.map((meal) => (
          <Heading key={meal.strCategory}>{meal.strCategory}</Heading>
        ))}
      </Box>
    </Flex>
  )
}