import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { Heading, Flex, Center  } from "@chakra-ui/react"

import CategoryThumb from "../../components/CategoryThumnail"
import Navbar from "../../components/Navbar"

import {api_url} from "../../constants/api_url"

interface MealCategory {
  meals: [{
    idMeal: string;
    strMeal: string;
    strMealThumb: string
  }]
}
const Category = () => {
  const router = useRouter()
  const [state, setState] = useState({
    "data": {} as MealCategory
  }) 
  useEffect(() => {
    axios.get(`${api_url}1/filter.php?c=${router?.query?.category}`)
      .then((res) => setState({...state, data: res?.data}))
      .catch((err) => console.log("err", err))
  }, [])
  console.log(state?.data)
  return (
    <>
      <Navbar />
      <Center mt={14}>
        <Heading as="h2" mx="auto">{router?.query?.category}</Heading>
      </Center>
      <Flex flexWrap="wrap" justifyContent="center">
        {state?.data?.meals?.map((meal) => (
          <CategoryThumb  
            image={meal?.strMealThumb}
            name={meal?.strMeal}
            id={meal?.idMeal}
          />
        ))}
      </Flex>
    </>
  )
}

export default Category;