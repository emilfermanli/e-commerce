import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';

function EditPassword() {
    return (
        <div className="profile-box">
            <div className="profile-box-header">
                <h5 className="account-nav__title">Change Password</h5>
            </div>
            <div className="profile-box-body">
                <Form>
                    <FormGroup>
                        <Label for="examplePassword">Current Password</Label>
                        <Input className="w-50" type="password" name="password" id="examplePassword" placeholder="Current Password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword1">New Password</Label>
                        <Input className="w-50" type="password" name="password" id="examplePassword1" placeholder="New Password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword2">Reenter New Password</Label>
                        <Input className="w-50" type="password" name="password" id="examplePassword2" placeholder="Reenter New Password" />
                    </FormGroup>
                    <button className="custom-button">Change</button>
                </Form>
            </div>
        </div>
    )
}

export default EditPassword
