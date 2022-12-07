import "./admin.css";

const { Fragment } = require("react");

const AdminNav = () => {
  return (
    <Fragment>
      <div class="sidebar">
        <a class="active" href="/admin">Home</a>
        <a href="/admin/add-module">Add Module</a>
        <a href="/admin/add-question">Add Question</a>
      </div>   
      

    </Fragment>
  );
}

export default AdminNav