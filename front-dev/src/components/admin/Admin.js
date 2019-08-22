import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Admin = props => {
  const {user} = props;

  if (!user.isLoggedIn || !user.roles.includes('admin')) {
    return <Redirect to="/signin" />;
  }

  return (
    <div className="Admin">
      <h1>Admin</h1>
    </div>
  );
};

const mapStateToProps = ({user}) => ({user});

export default connect(
  mapStateToProps,
  null,
)(Admin);
