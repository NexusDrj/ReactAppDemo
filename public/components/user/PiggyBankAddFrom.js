import React, { Component } from "react";
class PiggyBankAddFrom extends Component {
  state = {};
  render() {
    return (
      <div class="row justify-content-center align-items-center h-100">
        <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name of your piggy bank"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Target amount </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Target amount"
              />
            </div>

            <div className="form-group">
              <label for="exampleInputPassword1">Amount per Month </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Amount per Month"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PiggyBankAddFrom;
