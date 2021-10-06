import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';

function EditAddress() {
    return (
        <div className="profile-box">
            <div className="profile-box-header">
                <h5 className="account-nav__title">Edit Address</h5>
            </div>
            <div className="profile-box-body">
                <Form>
                    <div className="d-flex">
                        <FormGroup>
                            <Label for="examplePassword">First Name</Label>
                            <Input className="edit-info" type="text" name="name" id="examplePassword" placeholder="First Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword1">Last Name</Label>
                            <Input className="edit-info" type="text" name="surname" id="examplePassword1" placeholder="Last Name" />
                        </FormGroup>
                    </div>
                    <FormGroup>
                        <Label for="examplePassword2">Company Address </Label>
                        <Input className="w-50" type="text" name="mail" id="examplePassword2" placeholder="Email Address" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect3">Country</Label>
                        <Input className="w-50" type="select" name="select" id="exampleSelect3">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword4">Street Address</Label>
                        <Input className="w-50" type="text" name="mail" id="examplePassword4" placeholder="Phone Number" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword5">Apartment, suite, unit etc.</Label>
                        <Input className="w-50" type="text" name="mail" id="examplePassword5" placeholder="Phone Number" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword6">Town / City</Label>
                        <Input className="w-50" type="text" name="mail" id="examplePassword6" placeholder="Phone Number" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword7">State / County</Label>
                        <Input className="w-50" type="text" name="mail" id="examplePassword7" placeholder="Phone Number" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword8">Postcode / ZIP</Label>
                        <Input className="w-50" type="text" name="mail" id="examplePassword8" placeholder="Phone Number" />
                    </FormGroup>
                    <div className="d-flex">
                        <FormGroup>
                            <Label for="examplePassword9">Email address</Label>
                            <Input className="edit-info" type="text" name="name" id="examplePassword9" placeholder="First Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword01">Phone</Label>
                            <Input className="edit-info" type="text" name="surname" id="examplePassword01" placeholder="Last Name" />
                        </FormGroup>
                    </div>
                    <button className="custom-button">Save</button>
                </Form>
            </div>
        </div>
    )
}

export default EditAddress
