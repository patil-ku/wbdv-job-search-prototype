import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {Link} from "react-router-dom";
import JobService from '../services/JobService'
let jobService = JobService.getInstance();
const JobDetails =({job, addJob, userId, user, findAllJobs, set_job}) => {
    return (

        <div className="container">
            {/*{console.log("JOB DETAILS")}*/}
            {/*{console.log(job, findAllJobs, userId)}*/}
            {job &&
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-10">
                                <h3> {job.company} </h3>
                            </div>
                            <div className="col-md-2">
                                <div className="ml-auto mr-1">
                                    <span><img src={job.company_logo} style={{'width':'100%', 'height':'100%'}} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Job Title: </label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" value={job.title} readOnly/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Job Type: </label>
                                <div className="col-sm-10">
                                    <input className="form-control" value={job.type} readOnly/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Created On: </label>
                                <div className="col-sm-10">
                                    <input className="form-control" value={job.created_at} readOnly/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Location: </label>
                                <div className="col-sm-10">
                                    <input className="form-control" value={job.location || job.address} readOnly/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Job Description: </label>
                                <div className="col-sm-10">
                                    <span className="border-dark">{ReactHtmlParser(job.description)}</span>
                                        {/*< className="form-control" value={job.description} readOnly/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-transparent">
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2 col-form-label-sm"> How to Apply: </label>
                            <div className="col-sm-10">

                                <span>{ReactHtmlParser(job.how_to_apply)}</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2 col-form-label-sm"> Company Website: </label>
                            <div className="col-sm-10">

                                <span><a href={job.company_url} target="_blank">{job.company_url}</a></span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2 col-form-label-sm"> Github Job Link: </label>
                            <div className="col-sm-10">
                                <span><a href={job.url} target="_blank">{job.url}</a></span>
                            </div>
                        </div>
                    </div>
                    {addJob ?(
                    <div className="form-group">
                        {user.role === "STUDENT" && addJob &&
                        <button className="btn btn-block btn-success"
                                onClick={() => {addJob(job, userId); alert("Added to profile")}}>
                            Add Job to Profile
                        </button>
                        }
                    </div>
                    ) : (
                        <button  className="btn btn-block btn-danger"
                                 onClick={() => {jobService.unSaveJob(userId, job.id); findAllJobs(userId);
                                                set_job({},[])}}>
                            Remove Job
                        </button>
                    )
                    }
                </div>
            </div>
            }
        </div>

    );

};



export default JobDetails;