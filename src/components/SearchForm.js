import React from 'react';
import { 
    Button,
    Form,
    FormControl,
    FormGroup
 } from 'react-bootstrap';

const SearchForm = () => (
<Form inline>
    <FormGroup constrolid='formInLineEamil'>
        <FormControl type='searc' placeholder='enter something...' />
    </FormGroup>
    {' '}
    <Button type='submit'>
        search
    </Button>
</Form>
);

export default SearchForm;