import React from 'react'
import ReactDOM from 'react-dom'

import AddOption from './components/AddOption'
import Options from './components/Options'
import Header from './components/Header'
import Action from './components/Action'

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: []
    }
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
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove) 
    }))
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNumber]
    alert(option)
  }
  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    } 

    this.setState(prevState => ({ 
      options: prevState.options.concat(option) 
    }))
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <Header subtitle={subtitle} />
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
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
