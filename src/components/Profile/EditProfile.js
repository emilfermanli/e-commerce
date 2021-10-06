import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';

function EditProfile() {
    return (
        <div className="profile-box">
            <div className="profile-box-header">
                <h5 className="account-nav__title">Edit Profile</h5>
            </div>
            <div className="profile-box-body">
                <Form>
                    <FormGroup>
                        <Label for="examplePassword">First Name</Label>
                        <Input className="w-50" type="text" name="name" id="examplePassword" placeholder="First Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword1">Last Name</Label>
                        <Input className="w-50" type="text" name="surname" id="examplePassword1" placeholder="Last Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword2">Email Address</Label>
                        <Input className="w-50" type="text" name="mail" id="examplePassword2" placeholder="Email Address" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword3">Phone Number</Label>
                        <Input className="w-50" type="text" name="mail" id="examplePassword3" placeholder="Phone Number" />
                    </FormGroup>
                    <button className="custom-button">Save</button>
                </Form>
            </div>
        </div>
    )
}

export default EditProfile
