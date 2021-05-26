import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { getText } from '../services/text';

const Header = ({ word, changeWord, setData }) => {

  const submit = async e => {
    e.preventDefault()
    const result = await getText(word)
    setData(result)
  }

  return (
    <Navbar expand="lg" className="Header">
      <div className="container">
        <Form inline className="w-100">
          <FormControl type="text" placeholder="Insert Text" className="mr-sm-2 w-75" value={word} onChange={e => changeWord(e.target.value)} />
          <Button variant="primary" onClick={submit}>Send</Button>
        </Form>
      </div>
    </Navbar>
  )
}

export default Header
