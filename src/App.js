import React from 'react';
import './style.css';

const FORM_JSON = [
  {
    texts: {
      header: 'Name Section'
    },
    inputs: [
      {
        label: 'Full Name',
        type: 'text',
        name: 'name',
        validation: {
          required: true,
          minLength: 4
        },
        error: 'Name is required'
      }
    ]
  },
  {
    texts: {
      header: 'Password Section'
    },
    inputs: [
      {
        label: 'Password',
        type: 'password',
        name: 'password',
        validation: {
          required: true,
          minLength: 6,
          maxLength: 10
        },
        error: 'Password is required'
      },
      {
        label: 'Pincode',
        type: 'number',
        name: 'pincode',
        validation: {
          required: true,
          minLength: 6,
          maxLength: 6
        },
        error: 'Invalid Pincode'
      }
    ]
  },
  {
    texts: {
      header: 'Address Section'
    },
    inputs: [
      {
        label: 'Address Line 1',
        type: 'text',
        name: 'addressLine1',
        validation: {
          required: true
        },
        error: 'Invalid Address'
      },
      {
        label: 'Address Line 2',
        type: 'text',
        name: 'addressLine2',
        validation: {
          required: false
        }
      },
      {
        label: 'Zipcode',
        type: 'number',
        name: 'zipcode',
        validation: {
          required: true,
          minLength: 6,
          maxLength: 7
        },
        error: 'Invalid Zipcode'
      }
    ]
  },
  {
    texts: {
      header: 'Thankyou for filling out the form'
    }
  }
];

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
