import React, { useEffect, Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFields, postFields } from '../../actions/fields';
import { getLawyerbyField } from '../../actions/profile';
import { setAlert } from '../../actions/alert';
import { createMessage } from '../../actions/messages';
import Navbar from '../layout/Navbar';
import './options.css';

const Dashboard = ({
  getFields,
  getLawyerbyField,
  auth,
  fields: { fields, post_fields },
  onSubmit
}) => {
  useEffect(() => {
    getFields();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div>Client Dashboard</div>
      {
        <Fragment>
          <div className='cuisine_bg' style={{ minHeight: '100vh' }}>
            <div class='row cuisinetoprow'>
              <div class='col-lg-4 cuisinelogo'>
                {/* <img
                  class='cuisinelogocont'
                  src='https://i.ibb.co/H7TfPXB/Logo-01.png'
                /> */}
              </div>

              <div class='col-lg-4 cusinerow1col2'>
                <span class='cuisineheadfutura'>
                  Please select the field of the case
                </span>
                <hr class='cuisinehr1' />
              </div>
              {/* <div class='col-lg-4 cuisinenext'>
              <Link className='nextattri' to='/lawyerdashboard'>
                Next&nbsp;&nbsp;
                <i class='fas fa-arrow-right' style={{ fontSize: '70%' }}></i>
              </Link>
            </div> */}
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className='container'>
              <form onSubmit={onSubmit}>
                <div class='row'>
                  {fields && fields.fields ? (
                    fields.fields.map(field => (
                      <div
                        className='col-lg-3'
                        style={{ paddingBottom: '70px' }}
                      >
                        <div class='cuisinerow2col1cont'>
                          <div
                            class='recipe'
                            style={{ overflow: 'hidden' }}
                            id='MyElement'
                          >
                            <img
                              style={{ width: '120%' }}
                              src='https://i.ibb.co/jg42fmy/28-KITCHEN1-article-Large.jpg'
                            />
                            <label style={{ width: '93%' }}>
                              <div
                                className='row'
                                style={{ paddingTop: '10px' }}
                              >
                                <div className='col-lg-12'>
                                  <div class='cuisinekarla'>
                                    <p
                                      onClick={getLawyerbyField.bind(
                                        this,
                                        field.name
                                      )}
                                    >
                                      {' '}
                                      {field.name}{' '}
                                    </p>
                                  </div>
                                </div>
                                {/* <div className='col-lg-2'>
                                  <input
                                    id={field.name}
                                    name={field.name}
                                    type='checkbox'
                                    class='cuisineinput'
                                    value={field.name}
                                    // onChange={onChange.bind(this, field.name)}
                                  ></input>
                                </div> */}
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <h4>No fields </h4>
                  )}

                  {/* <button className='cuisinesavebtn' type='submit'>
                    Save
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </Fragment>
      }
    </Fragment>
  );
};

Dashboard.propTypes = {
  getFields: PropTypes.func.isRequired,
  postFields: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  post_fields: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth,
  fields: state.fields,
  profile: state.profile
});

export default connect(mapStateToProps, {
  getFields,
  getLawyerbyField,
  createMessage
})(Dashboard);
