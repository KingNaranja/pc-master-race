import React, { lazy, Suspense, useEffect } from 'react'
import styled from 'styled-components'
import { useStateValue } from './../context/GlobalState'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFetch } from '../hooks/fetch'
import { useLocalStorage } from '../hooks/localStorage'

// wait for PostList to load before rendering
const PostList = lazy( () => import('./PostList'))

const PostContainer = props => {
   
  const Container = styled.div`
    margin: .5em;
    min-width: 40vw;
    height: 100%;
    .load {
      justify-self: center;
      align-self: center;
      margin: 1em;
      padding: 10vh;
    }
    @media screen and (min-width: 768px) {
      width: 70vw;
      .load { 
        height: 100%;
        padding: 20vw; 
      }
    }


  `
  const [ state, dispatch ] = useStateValue()

  const toggleFavorite = async post => {
    // check if post exists in favorites array
    // store result as boolean
    const postInFavorites = state.favorites.includes(post)

    // dispatch add new favorite action
    let actionObj = {
      type: 'addFav',
      payload: post
    }
    if ( postInFavorites ) {
      // remove unfavorited post from array
      const favoritesWithoutPost = state.favorites.filter( fav => fav.id !== post.id )
      // dispatch updated favorites
      actionObj = {
        type: 'removeFav',
        payload: favoritesWithoutPost
      }
    }
    dispatch( actionObj )
    
  }

  const loading = <FontAwesomeIcon style={{margin:"50% 50%"}} className='load' icon='spinner' spin size='4x' />

  const { page, fav } = props
  // fetch posts for this page 
  let posts
  const fetchedPosts = useFetch(page)
  const [ localFavs, setlocalFavs ] = useLocalStorage('favorites', state.favorites)
  
  posts = fav ? localFavs : fetchedPosts 

  // sync favorite state with local storage
  useEffect( () => {
    setlocalFavs(state.favorites)
  })
     
  return (
    <Suspense fallback={ loading } >
      <Container>
        <PostList
          toggleFavorite={ toggleFavorite }
          posts={ posts }
          favorites={ state.favorites }
        />
      </Container>
    </Suspense>

    
  )
}

export default PostContainer
