import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Form() {
  return(
    <Form>
      <h1 className='title_form'> Report-A-Problem </h1>
      <Form.Group as = { Row } className = "mb-3" controlId="formRoom">
        <Form.Label> Room: </Form.Label>
          <Form.Control type = "room" placeholder = "Enter Room Number" />
      </Form.Group>

      <Form.Group as = { Row } className = "building-name" controlId = "formGridBuilding">
        <Form.Label> Building Name: </Form.Label>
        <Form.Select aria-label = "Default select building">
            <option> Building </option>
            <option value = "1"> Dunham Hall </option>
            <option value = "2"> Eckart Hall </option>
            <option value = "3"> Stephens Hall </option>
            <option value = "4"> Alumni Hall </option>
            <option value = "5"> Birck Collaboration Center for Innovation </option>
            <option value = "6"> Bookstore </option>
            <option value = "7"> Institute for Collaboration </option>
        </Form.Select>
      </Form.Group>

      <Form.Group as = { Row } className = "issue" controlId = "formGridIssue">
        <Form.Label> Issue Selction: </Form.Label>
        <Form.Select aria-label = "Default select issue">
          <option> Issue </option>
          <option value = "1"> Paper Towels Missing </option>
          <option value = "2"> No Soap </option> 
          <option value = "3"> No Tissues </option> 
          <option value = "4"> Spill </option> 
          <option value = "5"> Clogged </option> 
          <option value = "6"> Not Clean </option> 
          <option value = "7"> Network/Web Issue </option> 
          <option value = "8"> Equipment Issue </option> 
          <option value = "9"> Something is Broken </option> 
          <option value = "10"> Temperature Issue </option> 
          <option value = "11"> Trash </option> 
          <option value = "12"> Water Fountain/Refill </option>  
        </Form.Select>
      </Form.Group>

      <Form.Group as = {Row} className = "button-info">
        <Col sm = {{ span: 10, offset: 1 }}>
          <div class = "btn-block">
            <Button data-toggle = "button" aria-pressed="false" variant = "primary" type = "submit" size = "lg">
              Submit
            </Button>
          </div>
        </Col>
      </Form.Group>
       
    </Form>
  )
}

export default Form;
