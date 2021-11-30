import React, {useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"

import { api_url } from "../../constants/api_url"
import { RecipeProps } from "../../types"
import { CategoryRecipe } from "../../components/CategoryRecipe"
import Navbar from "../../components/Navbar"

const Recipe = ({}) => {
  const router = useRouter()
  const [state, setState] = useState({
    "data": {} as RecipeProps,
    "ingredients": [] as any,
    "meal": "",
    "thumbnail": "",
    "category": "",
    "instructions": "",
  })
  const ingredientsArr = (obj: {""}) => {
    var r = []
    for( var key in obj){
      if(key.includes("strIngredient") && obj[key] !== "")
        r.push(obj[key])
    }
    return r
  }
  useEffect(() => {
    axios.get(`${api_url}1/lookup.php?i=${router.query.id}`)
      .then((res) => {
        setState({...state, data: res?.data?.meals[0]})
        setState({
          ...state, 
          meal: res?.data?.meals[0].strMeal as string,
          thumbnail: res?.data?.meals[0]?.strMealThumb as string,
          category: res?.data?.meals[0]?.strCategory,
          instructions: res?.data?.meals[0]?.strInstructions,
          ingredients: ingredientsArr(res?.data?.meals[0])
        })
      })
      .catch((err) => console.log("err", err))
  }, [])
  console.log("data, state", state.data, state)
  return(
    <>
      <Navbar />
      <CategoryRecipe 
        category={state?.category}
        measures={state?.data?.measures}
        name={state?.meal}
        thumb={state?.thumbnail}
        yt={state?.data?.yt}
        origin={state?.data?.origin}
        intructions={state?.instructions}
        ingredients={state?.ingredients}
      />
  </>
  )
}

export default Recipe;