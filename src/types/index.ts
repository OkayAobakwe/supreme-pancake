
export type RecipeProps = {
  name: string,
  category: string,
  origin: string,
  intructions: string,
  thumb: string,
  yt: string,
  ingredients: [{
    ingredient: string
  }],
  measures: [{
    measure: string
  }]
}

export type ThumbProps = {
  name: string,
  image: string,
  id: string
}