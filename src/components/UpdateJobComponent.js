import React from 'react';
import ReactHtmlParser from "react-html-parser";
import JobService from '../services/JobService';
let jobService = JobService.getInstance();
export default class UpdateJobComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            job: this.props.job
        }
    }

    updateJobFields(job){
        this.setState({
            job: job
        })
    }

    render() {
        return(
            <div className="container">
                {this.props.job &&

                <div>
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-md-10">
                                    <h3> {this.props.job.company} </h3>
                                </div>
                                <div className="col-md-2">
                                    <div className="ml-auto mr-1">
                                        <span><img style={{'width': '100%', 'height': '100%'}}/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div>
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2 col-form-label-sm"> Job Title: </label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control"
                                                  defaultValue={this.props.job.title}
                                                  onChange={(event) => this.updateJobFields({
                                                      ...this.state.job,
                                                      title: event.target.value
                                                  })}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2 col-form-label-sm"> Job Type: </label>
                                    <div className="col-sm-10">
                                        <input className="form-control" defaultValue={this.props.job.type}
                                               onChange={(event) => this.updateJobFields({
                                                   ...this.state.job,
                                                   type: event.target.value
                                               })}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2 col-form-label-sm"> Created On: </label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               defaultValue={this.props.job.created_at}
                                               onChange={(event) => this.updateJobFields({
                                                   ...this.state.job,
                                                   created_at: event.target.value
                                               })}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2 col-form-label-sm"> Location: </label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               defaultValue={this.props.job.location || this.props.job.address}
                                               onChange={(event) => this.updateJobFields({
                                                   ...this.state.job,
                                                   location: event.target.value
                                               })}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2 col-form-label-sm"> Job
                                        Description: </label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control"
                                                  defaultValue={this.props.job.description}
                                                  onChange={(event) => this.updateJobFields({
                                                      ...this.state.job,
                                                      description: event.target.value
                                                  })}>
                                        </textarea>
                                        {/*< className="form-control" defaultValue={job.description} />*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-transparent">
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> How to Apply: </label>
                                <div className="col-sm-10">

                                    <input className="form-control"
                                           defaultValue={this.props.job.how_to_apply}
                                           onChange={(event) => this.updateJobFields({
                                               ...this.state.job,
                                               how_to_apply: event.target.value
                                           })}>
                                    </input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Company Website: </label>
                                <div className="col-sm-10">
                                    <input className="form-control"
                                           defaultValue={this.props.job.company_url}
                                           onChange={(event) => this.updateJobFields({
                                               ...this.state.job,
                                               company_url: event.target.value
                                           })}>
                                    </input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-2 col-form-label-sm"> Github Job Link: </label>
                                <div className="col-sm-10">
                                    <input className="form-control"
                                           defaultValue={this.props.job.url}
                                           onChange={(event) => this.updateJobFields({
                                               ...this.state.job,
                                               url: event.target.value
                                           })}>
                                    </input>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-block btn-success"
                                    onClick={() => {
                                        this.props.saveUpdatedJob(this.props.job.id, this.state.job);
                                        alert("Saved Successully")
                                    }}>
                                Save Job
                            </button>

                        </div>
                        <button className="btn btn-block btn-danger"
                                onClick={() => {
                                    jobService.unSaveJob(this.props.user.id, this.props.job.id);
                                }}>
                            Remove Job
                        </button>
                    </div>
                </div>
                }
            </div>
        )
    }
}