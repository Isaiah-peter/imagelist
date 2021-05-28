import React from 'react'

export class SearchBar extends React.Component{

  state = {
    term: '',
    searchItem: ''
  }
    
   onChangeInput = (e) => {
      this.setState({term:e.target.value})
    }
   onsubmitInput =(e) =>{
     e.preventDefault();
     this.setState({searchItem:this.state.term})
     this.setState({term:''})

     this.props.onSubmit(this.state.term)
   }

    render(){
        return (
            <div className="ui segment">
              <form onSubmit={this.onsubmitInput} className='ui form'>
               <div className="field">
                <label >Search Image</label>
               <input type='text' value={this.state.term} onChange={this.onChangeInput}/>
               </div>
              </form>
              <h1>{this.state.searchItem}</h1>
            </div>
        )
    }
}