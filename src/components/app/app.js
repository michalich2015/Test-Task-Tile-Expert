import React, {Component} from 'react'

import './app.css'
import Header from '../header';

export default class App extends Component{
    state={
        isSearchVisible:false,
        searchVal:'',
        isFormVisible:false,
        hide:false
    };
    ToggleSearch=()=>{
        this.setState({
            isSearchVisible:true,
            isFormVisible:false,
            searchVal:''
        })
    };
    handleParentClick=()=> {
        console.log('handleParentClick');
      };
    
    SearchButtonClick=(e)=> {
        e.stopPropagation();
            this.setState({
                isFormVisible:false
            })
    };
    
    ToggleFormSearch=(e)=>{
        e.stopPropagation();
        this.setState({
            isFormVisible:true
        })
    };
    onSearchChange=(e)=>{
        if(e.target.value.length<115){
        this.setState({
            searchVal:e.target.value,
            isFormVisible:true
        });
        }
    };
    onClear=(e)=>{
        e.stopPropagation();
        this.setState({
            searchVal:''
        })
    };
    ToggleSearchHide=()=>{
        if(this.state.isSearchVisible){
            this.setState({
                isSearchVisible:false,
                isFormVisible:false,
                searchVal:'',
                hide:true
            })
        }       
    };
    render(){
        const {isSearchVisible,isFormVisible,hide}=this.state;
        return(<div className='test-task'>
            <Header isSearchVisible={isSearchVisible} isFormVisible={isFormVisible} 
            ToggleSearch={this.ToggleSearch} onClear={this.onClear} searchVal={this.state.searchVal}
            onSearchChange={this.onSearchChange} ToggleFormSearch={this.ToggleFormSearch}
            ToggleSearchHide={this.ToggleSearchHide} hide={hide}
            SearchButtonClick={this.SearchButtonClick }
            ></Header>
        </div>
        )
    };
}