import {Component} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  InputContainer,
  Description,
  Input,
  Button,
} from './styledComponents'

class TextInput extends Component {
  state = {userInput: '', isBtnClicked: false}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeSave = event => {
    event.preventDefault()
  }

  onClickBtn = () => {
    this.setState(prev => ({isBtnClicked: !prev.isBtnClicked}))
  }

  render() {
    const {userInput, isBtnClicked} = this.state
    const btnText = isBtnClicked ? 'Edit' : 'Save'

    return (
      <AppContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isBtnClicked ? (
              <Description>{userInput}</Description>
            ) : (
              <Input
                type="text"
                onChange={this.onChangeInput}
                value={userInput}
              />
            )}
            <Button type="button" onClick={this.onClickBtn}>
              {btnText}
            </Button>
          </InputContainer>
        </CardContainer>
      </AppContainer>
    )
  }
}

export default TextInput
