import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { verify } from '../../actions/auth';
import PropTypes from 'prop-types';
import './register.css';
import Navbar from '../layout/Navbar';

const Lawyer_Verify = ({ setAlert, verify, isVerified }) => {
  const [formData, setFormData] = useState({
    enrollmentno: '',
    name: '',
    state: '',
  });

  const { enrollmentno, name, state } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();

    verify({ enrollmentno, name, state });
  };

  if (isVerified) {
    return <Redirect to='/lawyer_register' />;
  }
  return (
    <Fragment>
      <Navbar />
      <div className='register_bg2'>
        <div className='reg_form_div2'>
          <div>
            <span className='futura'>
              Lawyer Verifi<span className='futuraa'>cation</span>
            </span>
            <hr className='reg_hr' />
          </div>

          <div>
            <form onSubmit={(e) => onSubmit(e)}>
              <input
                className='reg_text'
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
              />
              <input
                className='reg_text'
                type='text'
                placeholder='Enrollment Number'
                name='enrollmentno'
                value={enrollmentno}
                onChange={(e) => onChange(e)}
              />{' '}
              <br />
              <select
                className='form-control col-10'
                id='optionclass'
                name='state'
                onChange={(e) => onChange(e)}
                value={state}
              >
                <option value='' selected disbled hidden>
                  Choose
                </option>
                <option value='Chhattisgarh'>Chattisgarh</option>
                <option value='MadyaPradesh'>Madhya Pradesh</option>
                <option value='Maharashtra'>Maharashtra</option>
                <option value='PunjabHaryana'>Punjab or Haryana</option>
                <option value='TamilNadu'>TamilNadu</option>
                <option value='Uttarakhand'>Uttarakhand</option>
                <option value='UttarPradesh'>Uttar Pradesh</option>
              </select>
              <br /> <br />
              <input className='reg_btn' type='submit' value='Verify' />
              <br /> <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Lawyer_Verify.propTypes = {
  setAlert: PropTypes.func.isRequired,
  verify: PropTypes.func.isRequired,
  isVerified: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isVerified: state.verify.isVerified,
});

export default connect(mapStateToProps, { setAlert, verify })(Lawyer_Verify);
