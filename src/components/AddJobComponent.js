import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {Link} from "react-router-dom";
const AddJobComponent =({props}) => {
    return (

        <div className="container">
            {/*{console.log("Add JOB")}*/}
            {/*{console.log(props)}*/}
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-10">
                                <h3> Job Details </h3>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Company Name: </label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" placeholder="Company name"
                                              onChange={(event) => props.updateJob(({
                                                  ...props.job,
                                                  company: event.target.value
                                              }))}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Job Title: </label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" placeholder="Enter a title for the job"
                                              onChange={(event) => props.updateJob(({
                                                  ...props.job,
                                                  title: event.target.value
                                              }))}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Job Type: </label>
                                <div className="col-sm-10">
                                    <select className="form-control"  placeholder="Type of Job"
                                            onChange={(event) => props.updateJob(({
                                                ...props.job,
                                                type: event.target.value.toString()
                                            }))}>
                                        <option value="Full Time"> Full Time </option>
                                        <option value="Part Time"> Part Time </option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Posting Date: </label>
                                <div className="col-sm-10">
                                    <input className="form-control"  placeholder="Date for posting the job"
                                           type="date"
                                           onChange={(event) => props.updateJob(({
                                               ...props.job,
                                               created_at: event.target.value.toString()
                                           }))}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Location: </label>
                                <div className="col-sm-10">
                                    <input className="form-control"
                                           onChange={(event) => props.updateJob(({
                                               ...props.job,
                                               address: event.target.value
                                           }))}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Job Description: </label>
                                <div className="col-sm-10">
                                    <div className="col-sm-10">
                                        <textarea className="form-control"
                                                  onChange={(event) => props.updateJob(({
                                                      ...props.job,
                                                      description: event.target.value
                                                  }))}/>
                                    </div>
                                    {/*< className="form-control" value={job.description} readOnly/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-transparent">
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2 col-form-label-sm"> How to Apply: </label>
                            <div className="col-sm-10">
                                <textarea className="form-control"
                                          onChange={(event) => props.updateJob(({
                                              ...props.job,
                                              application_details: event.target.value
                                          }))}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2 col-form-label-sm"> Company Website: </label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       onChange={(event) => props.updateJob(({
                                           ...props.job,
                                           company_url: event.target.value
                                       }))}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2 col-form-label-sm"> Company Logo Link: </label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       onChange={(event) => props.updateJob(({
                                           ...props.job,
                                           logo_details: event.target.value
                                       }))}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2 col-form-label-sm"> Github Job Link: </label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       onChange={(event) => props.updateJob(({
                                           ...props.job,
                                           url: event.target.value
                                       }))}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button  className="btn btn-block btn-success"
                                 onClick={() => {props.addJob( ({...props.job, id: (new Date()).getTime().toString()}),
                                     props.loggedInUser.id ); alert("Job added successfully")}}>
                            Post Job
                        </button>
                    </div>
                </div>
            </div>

        </div>

    );

};



export default AddJobComponent;