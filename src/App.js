
import React from 'react';
import './App.css';
import Unsplash from './api/Unsplash'
import { SearchBar} from './component/SearchBar'
import { ImageList } from './component/ImageList'


class App extends React.Component{

  state = {
    images : []
  }
  
  onSearchSubmit=async (term)=>{
     const response =  await Unsplash.get("/search/photos",{
      params: {query: term} ,
    })

    this.setState({images:response.data.results})
    console.log(response.data.results)
  }

  render(){
    return (
      <div className='ui container margin'>
       <SearchBar onSubmit={this.onSearchSubmit}/>
       <ImageList images = {this.state.images}/>
      </div>
    );
  }
}

export default App;
