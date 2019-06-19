import {connect} from 'react-redux'
import PrivateProfileComponent from "../components/PrivateProfileComponent";
import UserService from '../services/UserService'
import JobService from '../services/JobService'
let userService = UserService.getInstance();
let jobService = JobService.getInstance();

const stateTOPropertyMapper = state => ({
    loggedInUser: state.loginReducer.user,
    updatedUser: state.privateProfileReducer.user,
    tab: state.privateProfileReducer.tab,
    savedGitJobs : state.privateProfileReducer.savedGitJobs,
    allAddedJobs : state.privateProfileReducer.allAddedJobs,
    followedStudents : state.privateProfileReducer.followedStudents,
    markedStudents : state.privateProfileReducer.markedStudents,
    job: state.privateProfileReducer.job,
    followingStudents : state.privateProfileReducer.followingStudents,
});

const propertyToDispatchMapper = dispatch => ({

    updateUser: (user) => {
        dispatch({
            type: 'UPDATE_USER',
            user: user,
            tab:'PROFILE'
        })
    },

    saveDetails: (user, userId) =>
        userService.updateUser(user, userId)
            .then(result => dispatch({
                type: 'SAVE_USER',
                user: result,
                tab:'PROFILE'
            })),

    getSavedGitJobs: (user) => {
        jobService.getAllJobsForAUser(user.id).then(
            result =>
                dispatch({
                    type: 'SAVED_GIT_JOBS',
                    savedGitJobs: result,
                    user: user,
                    tab: 'SAVED_GIT_JOBS'
                })
        )
},


    getAllAddedJobs: (user) => {
        jobService.getAllJobsForAUser(user.id).then(
            result => dispatch({
                type: 'ALL_ADDED_JOBS',
                allAddedJobs: result,
                user: user,
                tab: 'ALL_ADDED_JOBS'
            }))
        },

    getMarkedStudents: (user) => {
        userService.getFollowingUsers(user.id)
            .then(result => dispatch({
                type: 'MARKED_STUDENTS',
                markedStudents: result,
                user: user,
                tab: 'MARKED_STUDENTS'
            }))
    },

    getFollowedStudents: (user) => {
        userService.getFollowingUsers(user.id)
            .then(result => dispatch({
                type: 'FOLLOWED_STUDENT',
                followedStudents: result,
                user: user,
                tab: 'FOLLOWED_STUDENT'
            }))
    },

    getFollowingStudents: (user) => {
        dispatch({
            type: 'FOLLOWING_STUDENT',
            followingStudents: [],
            user: user,
            tab: 'FOLLOWING_STUDENT'
        })
    },

    changeTab : (user , tab) => {
        dispatch({
            type: 'CHANGED_TAB',
            user: user,
            tab: tab
        })},

    addJob: (job, userId) => jobService.addJob(job, userId)
        .then(dispatch({
            type: 'ADD_JOB',
            job: job,
        })),

    updateJob: (job) => {
        dispatch({
            type: 'UPDATE_JOB',
            job:  job
        })
    }





});

const PrivateProfileContainer = connect(stateTOPropertyMapper, propertyToDispatchMapper)(PrivateProfileComponent);

export default  PrivateProfileContainer;