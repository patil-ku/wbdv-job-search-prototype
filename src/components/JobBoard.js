import React from 'react';
import JobContainer from "../container/JobSearchContainer";
import {Link, BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import '../../node_modules/font-awesome/css/font-awesome.css';
import LoginContainer from '../container/LoginContainer';
import PrivateProfileContainer from '../container/PrivateProfileContainer'
import UserSearchComponent from "./UserSearchComponent";
import RegisterUserContainer from "../container/RegisterUserContainer";
import UserService from "../services/UserService"
import JobSearchContainer from "../container/JobSearchContainer"
import SkillSearchContainer from "../container/SkillSearchContainer";
import CompanyListContainer from "../container/CompanyListContainer";
import jQuery from 'jquery';
window.jQuery = window.$ = require('../../node_modules/jquery/dist/jquery.js');
require('../../node_modules/bootstrap/dist/js/bootstrap.bundle.js');
let userService = UserService.getInstance();

export default class JobBoard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchField: "",
            searchResults: [],
            checkUser:{},
            toggleStuff: false
        }
    };
    searchFieldOnChange = (event) => {
        this.setState({
            searchField: event.target.value
        })
    };

    componentWillMount() {
        if(this.props.isUserLoggedIn === undefined){
            this.props.checkIfUserIsLoggedIn()
        }
    }

    setNavTabsActive = (tab_name) => {

    }

    render(){
        return(
            <Router>
                {console.log("JOB BOARD")}
                {console.log(this.props)}


                {/*<Route path={`/admin`}*/}
                {/*    render={(props) =>*/}
                {/*    <AdminContainer/>}/>*/}
                {/*}*/}
                <div className="navbar navbar-expand-md navbar-dark bg-dark">
                    <Link to={'/'}>
                        <img  src="https://picsum.photos/id/20/40/40" className=" navbar-brand rounded-top rounded-bottom"
                              style={{'margin': '0', 'padding':'0', 'border':'1px solid white'}}/>
                    </Link>

                    <button className="navbar-toggler" type="button"
                            data-toggle="collapse"
                            data-target="#navbarText"
                            aria-label="Toggle navigation"
                            onClick={() => this.setState({toggleStuff: true})}>
                        <span className="navbar-toggler-icon" />
                    </button>

                    <ul className="navbar-nav collapse navbar-collapse" id="navbarText">
                        <li className="nav-item nav-link">
                            <Link to={`/`}>
                            <button className="btn btn-outline-light"> Home </button>
                            </Link>
                        </li>
                        { this.props.isUserLoggedIn && this.props.user.role === 'STUDENT' &&
                            <Link to={`/companies`}>
                                <li className="nav-item nav-link">
                                    <button className="btn btn-outline-light"> Search Companies</button>
                                </li>
                            </Link>
                        }
                        { this.props.isUserLoggedIn && this.props.user.role === 'RECRUITER' &&
                        <Link to={`/recruiter`}>
                            <li className="nav-item nav-link">
                                <button className="btn btn-outline-light"> Looking for Applicants? Check this out..</button>
                            </li>
                        </Link>
                        }
                    </ul>

                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-1 ml-auto">

                            <li className="nav-item nav-link ">
                                <div className="form-inline">
                                    <input className="form-control" type="text"
                                           placeholder="Search for people"
                                           onChange={(event) => this.searchFieldOnChange(event)}/>
                                    <Link to={`/public/${this.state.searchField}`}>
                                        <button className="btn btn-outline-success"
                                                onClick={() => userService.findUsers(this.state.searchField)
                                                    .then(result =>
                                                    {this.props.user &&
                                                        this.setState({
                                                        searchResults: result.filter(currUser =>
                                                            currUser.username !== this.props.user.username)
                                                    })})}>
                                            <i className="fa fa-search" />
                                        </button>
                                    </Link>
                                </div>
                            </li>
                        {!this.props.isUserLoggedIn &&
                        <li className="nav-item nav-link">
                            <Link to={`/login`}>
                                <button className="btn btn-block bg-light">Login</button>
                            </Link>
                        </li>
                        }
                        {!this.props.isUserLoggedIn &&
                        <li className="nav-item nav-link ">
                            <Link to={`/register`}>
                                <button className="btn btn-block bg-light">Register</button>
                            </Link>
                        </li>
                        }
                            {
                            this.props.isUserLoggedIn &&
                                <li className="nav-item nav-link">
                                    <Link to={`/profile`}>
                                        <button className="btn bg-transparent btn-outline-success btn-block">
                                            {this.props.user.username}
                                            <i className="fa fa-user-circle"
                                               style={{'marginLeft':'0.2em', 'borderLeft':'2px solid green',
                                                        'paddingLeft':'0.2em'}}/>
                                        </button>
                                    </Link>
                                </li>
                                }
                        {
                            this.props.isUserLoggedIn &&
                                <li className="nav-item nav-link">
                                    <Link to={`/`} onClick={() => this.props.logOutUser()}>
                                        <button className="btn bg-transparent btn-block btn-outline-danger">
                                            <i className="fa fa-sign-out"/>
                                        </button>
                                    </Link>
                                </li>
                        }

                    </ul>
                </div>
                </div>
                {/*<div className="jumbotron bg-primary" style={{'marginBottom':'0', 'backgroundColor':'#A9B2C3'}}>*/}
                {/*    {  !this.props.isUserLoggedIn ?*/}
                {/*        (*/}
                {/*            <h1>Job Search Application</h1>*/}

                {/*        ) : (*/}

                {/*            <h1>Welcome {this.props.user.firstName} </h1>*/}

                {/*        )*/}
                {/*    }*/}
                {/*</div>*/}


                <Route exact path={`/login`}
                            render={(props) => (this.props.isUserLoggedIn !== undefined && this.props.isUserLoggedIn !== true)  ? (
                                <LoginContainer {...props}/>
                            ) : (
                                <Redirect to={{pathname: `/`}} />
                                )
                            }/>

                            <Route exact path={`/profile`}
                            render={() => this.props.isUserLoggedIn ?
                                        <PrivateProfileContainer />
                                        :  <Redirect to={{pathname: `/login`, message: true}} /> } />


                       <Route exact path={`/register`}
                       render={() => (this.props.isUserLoggedIn !== undefined && this.props.isUserLoggedIn !== true)  ? (
                           <RegisterUserContainer/>
                       ) : (
                           <Redirect to={{pathname: `/`}} />
                       ) }/>

                        <Route exact path={'/'}
                       render={(props) =><JobSearchContainer {...props} jobs = {[]}/>} />

                       <Route exact path={`/search/:skill/:loc`}
                       render={(props) => <JobContainer {...props}/>}/>


                    <Route exact path={`/search/:skill/`}
                       render={(props) => <JobContainer {...props}/>}/>

                       {/*<Route exact path={`/search/:skill/:loc/positions/:id`}*/}
                       {/*render={(props) =>*/}
                       {/*    <JobContainer {...props}/>*/}
                       {/*}/>*/}

                        <Route exact path={`/recruiter`}
                                    render={(props) =>
                               <SkillSearchContainer {...props} user={this.props.user}/>
                       }/>





                        <Route  path={`/companies`}
                       render={(props) =>
                           <CompanyListContainer {...props}/>
                       }/>

                <Route exact path={`/result/:skill/:loc/positions/:id`}
                              render={(props) => <JobContainer {...props}/> } />
                <Route exact path={`/result/:skill//positions/:id`}
                       render={(props) => <JobContainer {...props}/> } />

                       <Route path={`/public/:username`}
                      render={(props) => {
                          return <UserSearchComponent {...props} currentUser={this.props.user}
                                                      users={this.state.searchResults}
                                                      isUserLoggedIn={this.props.isUserLoggedIn}/>}}/>

                {/*<Route path={`/admin`}*/}
                {/*    render={(props) =>*/}
                {/*    <AdminContainer/>}/>*/}
                }

            </Router>
        );
    };
};
