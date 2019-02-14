import React, {Component, Fragment} from 'react';
import {Input, Label, FormGroup, Container, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            currentForm: '1'
        }
    }

    changeHandler = (form) => (e) => {
        const {fields} = this.state;
        fields[form] = {...fields[form],[e.target.name]: e.target.value}
        this.setState({fields})
    }

    changeForm = (e) => {
        this.setState({currentForm: e.target.name});
    }

    render() {
        const {currentForm} = this.state;
        const DogOwner = () => (
            <Fragment>
                <FormGroup>
                    <Label>Full Name:</Label>
                    <Input name={'full name'} onChange={this.changeHandler('form1')}/>
                </FormGroup>
                <FormGroup>
                    <Label>Email Id:</Label>
                    <Input name={'email'} type={'email'} onChange={this.changeHandler('form1')}/>
                </FormGroup>
                <FormGroup>
                    <Label>Phone Number:</Label>
                    <Input name={'phone'} type="number" onChange={this.changeHandler('form1')}/>
                </FormGroup>
                <FormGroup>
                    <Label>Address:</Label>
                    <Input name={'address'} onChange={this.changeHandler('form1')}/>
                </FormGroup>
                <FormGroup>
                    <Label>Password:</Label>
                    <Input name={'password'} type={'password'} onChange={this.changeHandler('form1')}/>
                </FormGroup>
                <FormGroup>
                    <Label>Confirm Password:</Label>
                    <Input name={'confirmPassword'} type={'password'} onChange={this.changeHandler('form1')}/>
                </FormGroup>
            </Fragment>);

        const DogitRep = () => (
            <Fragment>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input name={'name'} onChange={this.changeHandler('form2')}/>
                </FormGroup>
                <FormGroup>
                    <Label>Email Id:</Label>
                    <Input name={'email'} type={'email'} onChange={this.changeHandler('form2')}/>
                </FormGroup>
                <FormGroup>
                    <Label>Representative Id:</Label>
                    <Input name={'repId'} onChange={this.changeHandler('form2')}/>
                </FormGroup>
                <FormGroup>
                    <Label>Phone Number:</Label>
                    <Input name={'phone'} type="number" onChange={this.changeHandler('form2')}/>
                </FormGroup>
                <FormGroup>
                    <Label>Address:</Label>
                    <Input name={'address'} onChange={this.changeHandler('form2')}/>
                </FormGroup>
                <FormGroup>
                    <Label>Password:</Label>
                    <Input name={'password'} type={'password'} onChange={this.changeHandler('form2')}/>
                </FormGroup>
                <FormGroup>
                    <Label>Confirm Password:</Label>
                    <Input name={'confirmPassword'} type={'password'} onChange={this.changeHandler('form2')}/>
                </FormGroup>
            </Fragment>
        )

        const DogitOff = () => (
            <Fragment>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input name={'name'} onChange={this.changeHandler('form3')}/>
                </FormGroup>
                <FormGroup>
                    <Label>Member Id:</Label>
                    <Input name={'memberId'} onChange={this.changeHandler('form3')}/>
                </FormGroup>
                <FormGroup>
                    <Label>Password:</Label>
                    <Input name={'password'} type={'password'} onChange={this.changeHandler('form3')}/>
                </FormGroup>
                <FormGroup>
                    <Label>Confirm Password:</Label>
                    <Input name={'confirmPassword'} type={'password'} onChange={this.changeHandler('form3')}/>
                </FormGroup>
            </Fragment>
        )
        return (
            <Container>
                <div className="paper">
                    <Link to={'/home'}>Back</Link>
                    <h2 className='primaryColor'>Registration: </h2>
                    <button name={'1'} onClick={this.changeForm} className={'btn btnAll'}>Dog Owner Registration
                    </button>
                    <button name={'2'} onClick={this.changeForm} className={'btn btnAll'}>dogIT Representative</button>
                    <button name={'3'} onClick={this.changeForm} className={'btn btnAll'}>DOG IT office member</button>
                    {currentForm === '1' && DogOwner()}
                    {currentForm === '2' && DogitRep()}
                    {currentForm === '3' && DogitOff()}
                    <Button className={'btn btn-success'}>Sign Up</Button>
                </div>
            </Container>
        )
    }
}

export default Register