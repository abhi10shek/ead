import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editLawyerProfile, getLawyerProfile } from '../../actions/profile';
import { Link, withRouter } from 'react-router-dom';
import { deleteAccount } from '../../actions/profile';
import Navbar from '../layout/Navbar';
import './editprofile.css';

const EditLawyerProfile = ({
  profile: { lawyerprofile, loading },
  editLawyerProfile,
  getLawyerProfile,
  auth
}) => {
  const [formData, setFormData] = useState({
    locality: '',
    city: '',
    pincode: '',
    // skills: "",
    // dob: "",
    // mobile: "",
    name: '',
    email: '',
    avatar: '',
    enrollmentno: '',
    state: ''
    // following: "",
    // followers: ""
  });

  useEffect(() => {
    getLawyerProfile();

    setFormData({
      locality:
        loading || !(lawyerprofile.address && lawyerprofile.address.locality)
          ? ''
          : lawyerprofile.address.locality,
      city:
        loading || !(lawyerprofile.address && lawyerprofile.address.city)
          ? ''
          : lawyerprofile.address.city,
      pincode:
        loading || !(lawyerprofile.address && lawyerprofile.address.pincode)
          ? ''
          : lawyerprofile.address.pincode,
      // dob: loading || !lawyerprofile.dob ? "" : lawyerprofile.dob,
      // mobile: loading || !lawyerprofile.mobile ? "" : lawyerprofile.mobile,
      name: loading || !lawyerprofile.user.name ? '' : lawyerprofile.user.name,
      email:
        loading || !lawyerprofile.user.email ? '' : lawyerprofile.user.email,
      avatar:
        loading || !lawyerprofile.user.avatar ? '' : lawyerprofile.user.avatar,
      enrollmentno:
        loading || !lawyerprofile.user.enrollmentno
          ? ''
          : lawyerprofile.user.enrollmentno,
      state:
        loading || !lawyerprofile.user.state ? '' : lawyerprofile.user.state,
      licensed_year:
        loading || !lawyerprofile.licensed_year
          ? ''
          : lawyerprofile.licensed_year,
      experience:
        loading || !lawyerprofile.experience ? '' : lawyerprofile.experience
    });
  }, [loading]);

  const {
    locality,
    city,
    pincode,
    // skills,
    // dob,
    // mobile,
    name,
    email,
    avatar,
    enrollmentno,
    state,
    licensed_year,
    experience
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    editLawyerProfile(formData);
  };

  return (
    <Fragment>
      <Navbar />
      <br />
      <br />
      <div className='editprotop'>
        <div className='myrectop_cont'>Edit your profile</div>
        <hr className='myrechr1' />
      </div>
      <div className='editpro_bg'>
        <br />
        <br />
        <br />
        <div className='container'>
          <div className='row editprobot'>
            <div className='col-lg-8'>
              <form onSubmit={e => onSubmit(e)}>
                <div className='row editprorows'>
                  <div className='col-lg-3 editprotext'>Username:</div>
                  <div className='col-lg-9'>
                    <input
                      className='editproinput'
                      type='text'
                      placeholder='UserName'
                      name='name'
                      value={name}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <div className='row editprorows'>
                  <div className='col-lg-3 editprotext'>Email:</div>
                  <div className='col-lg-9'>
                    <input
                      className='editproinput'
                      type='text'
                      placeholder='email'
                      name='email'
                      value={email}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <div className='row editprorows'>
                  <div className='col-lg-3 editprotext'>Enrollment Number:</div>
                  <div className='col-lg-9'>
                    <input
                      className='editproinput'
                      type='text'
                      placeholder='enrollmentno'
                      name='enrollmentno'
                      value={enrollmentno}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <div className='row editprorows'>
                  <div className='col-lg-3 editprotext'>State:</div>
                  <div className='col-lg-9'>
                    <input
                      className='editproinput'
                      type='text'
                      placeholder='state'
                      name='state'
                      value={state}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                {/* <div className="row editprorows">
                <div className="col-lg-3 editprotext">Date of birth:</div>
                <div className="col-lg-9">
                  <input
                    className="editproinput"
                    type="date"
                    placeholder="Date Of Birth"
                    name="dob"
                    value={dob}
                    onChange={e => onChange(e)}
                  />
                </div>
              </div>
              <div className="row editprorows">
                <div className="col-lg-3 editprotext">Mobile:</div>
                <div className="col-lg-9">
                  {" "}
                  <input
                    className="editproinput"
                    type="text"
                    placeholder="Mobile Number"
                    name="mobile"
                    value={mobile}
                    onChange={e => onChange(e)}
                  />
                </div>
              </div> */}
                <div className='row editprorows'>
                  <div className='col-lg-3 editprotext'>Image:</div>
                  <div className='col-lg-9'>
                    <input
                      className='editproinput'
                      type='image'
                      placeholder='image'
                      name='image'
                      value={avatar}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <div className='row editprorows'>
                  <div className='col-lg-3 editprotext'>Address:</div>
                  <div className='col-lg-9'>
                    <div>
                      <input
                        className='editproinput'
                        type='text'
                        placeholder='Locality'
                        name='locality'
                        value={locality}
                        onChange={e => onChange(e)}
                      />
                    </div>

                    <div>
                      <input
                        className='editproinput'
                        type='text'
                        placeholder='City'
                        name='city'
                        value={city}
                        onChange={e => onChange(e)}
                      />
                    </div>

                    <div>
                      <input
                        className='editproinput'
                        type='text'
                        placeholder='Pincode'
                        name='pincode'
                        value={pincode}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className='row editprorows'>
                  <div className='col-lg-3 editprotext'>Licensed Year:</div>
                  <div className='col-lg-9'>
                    <input
                      className='editproinput'
                      type='text'
                      placeholder='Licensed Year'
                      name='licensed_year'
                      value={licensed_year}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <div className='row editprorows'>
                  <div className='col-lg-3 editprotext'>Experience:</div>
                  <div className='col-lg-9'>
                    <textarea
                      rows={20}
                      name='experience'
                      className='editproinput'
                      onChange={e => onChange(e)}
                      value={experience}
                    />
                  </div>
                </div>
                <br />
                <div>
                  <button className='editprobtn' type='submit'>
                    Save
                  </button>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </form>
            </div>
            <div className='col-lg-4' style={{ paddingTop: '3%' }}>
              <button className='editprobtn2' onClick={() => deleteAccount()}>
                <i className='fas fa-trash'></i> &nbsp; Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

EditLawyerProfile.propTypes = {
  editLawyerProfile: PropTypes.func.isRequired,
  getLawyerProfile: PropTypes.func.isRequired,
  lawyerprofile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, {
  editLawyerProfile,
  getLawyerProfile
})(EditLawyerProfile);