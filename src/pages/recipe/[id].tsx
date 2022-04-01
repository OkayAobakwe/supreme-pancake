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
    "measures": [] as any
  })
  const fixArr = (obj: {""}, keyWord: string) => {
    var r = []
    for( var key in obj){
      if(key.includes(keyWord) && obj[key] !== "" && obj[key] !== null)
        r.push(obj[key])
    }
    return r
  }
  useEffect(() => {
    axios.get(`${api_url}1/lookup.php?i=${router.query.id}`)
      .then((res) => {
        setState({
          ...state, 
          meal: res?.data?.meals[0].strMeal as string,
          thumbnail: res?.data?.meals[0]?.strMealThumb as string,
          category: res?.data?.meals[0]?.strCategory,
          instructions: res?.data?.meals[0]?.strInstructions,
          ingredients: fixArr(res?.data?.meals[0], "strIngredient"),
          measures: fixArr(res?.data?.meals[0], "strMeasure")
        })
      })
      .catch((err) => console.log("err", err))
  }, [])
  
  return(
    <>
      <Navbar />
      <CategoryRecipe 
        category={state?.category}
        measures={state?.measures}
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