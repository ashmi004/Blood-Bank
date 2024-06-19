import React from "react";
import Layout from "../../Components/Shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          Welcome to the Blood Bank app community! We are thrilled to have you join us in our mission to save lives through blood donations.

As a member of our community, you play a vital role in helping ensure that patients in need receive the life-saving blood they require. Your willingness to donate blood and support our cause is deeply appreciated.

The Blood Bank app is designed to make the donation process as convenient and accessible as possible. Whether you're searching for donation centers, scheduling appointments, or keeping track of your donation history, our app is here to assist you every step of the way.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
