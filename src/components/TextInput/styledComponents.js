import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  height: 200px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
`

export const Description = styled.p`
  font-size: 10px;
  font-family: 'Roboto';
`

export const Input = styled.input`
  height: 30px;
  width: 250px;
  outline: none;
  padding: 10px;
`

export const Button = styled.button`
  height: 30px;
  width: 55px;
  cursor: pointer;
  background-color: #d946ef;
  color: #ffffff;
  border: none;
  font-size: 13px;
  font-family: 'Roboto';
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
