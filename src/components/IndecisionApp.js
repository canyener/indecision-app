import React from 'react'

import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove) 
    }))
  }
  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNumber]
    this.setState(() => ({ selectedOption: option }))
  }
  handleAddOption = (option) => {
    if(!option) {
      return 'Enter valid value to add option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    } 

    this.setState(prevState => ({ 
      options: prevState.options.concat(option) 
    }))
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
  
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      //Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    //Fires if component updates. (if state or props values change)

    //Save data only when array changes
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  componentWillUnmount() {
    //Fires right before component goes away
    console.log('componentWillUnmount')
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0} 
            handlePick={this.handlePick}
          />
          <Options 
            options={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }
}