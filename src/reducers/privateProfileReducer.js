const initialJob = {title:"",
                    type:"",
                    created_at:"",
                    description:"",
                    company_logo:"",
                    url:"",
                    company_url:"",
                    company:"",
                    how_to_apply:"",
                    location:"",};


const privateProfileReducer = (state = {user: {} , tab : 'PROFILE' ,
                                        savedGitJobs: [] ,
                                        allAddedJobs: [] ,
                                        followedStudents : [] ,
                                        job: initialJob  ,
                                        followingStudents : [],
                                        markedStudents : []}, action) => {
    switch(action.type){

        case 'UPDATE_USER':
            return{
                user:  action.user,
                tab: state.tab,
                savedGitJobs:[],
                markedStudents:[],
                followingStudents:[],
                followedStudents:[],
                allAddedJobs:[]
            };

        case 'SAVE_USER':
            return{
                user:  action.user,
                tab: state.tab,
                savedGitJobs:[],
                markedStudents:[],
                followingStudents:[],
                followedStudents:[],
                allAddedJobs:[]
            };
        case 'SAVED_GIT_JOBS':
            return{
                savedGitJobs : action.savedGitJobs,
                tab:  action.tab,
                user: action.user,
                markedStudents:[],
                followingStudents:[],
                followedStudents:[],
                allAddedJobs:[]

            };
        case 'ALL_ADDED_JOBS':
            return{
                allAddedJobs : action.allAddedJobs,
                tab:  action.tab,
                user: action.user,
                markedStudents:[],
                followingStudents:[],
                followedStudents:[],
                savedGitJobs:[]


            };

        case 'FOLLOWED_STUDENT':
            return{
                followedStudents : action.followedStudents,
                tab:  action.tab,
                user: action.user,
                followingStudents:[],
                markedStudents:[],
                allAddedJobs:[],
                savedGitJobs:[]

            };

        case 'FOLLOWING_STUDENT':
            return{
                followingStudents : action.followingStudents,
                tab:  action.tab,
                user: action.user,
                followedStudents:[],
                markedStudents:[],
                allAddedJobs:[],
                savedGitJobs:[]

            };
        case 'MARKED_STUDENTS':
            return{
                markedStudents : action.markedStudents,
                tab:  action.tab,
                user: action.user,
                followingStudents:[],
                allAddedJobs:[],
                followedStudents:[],
                savedGitJobs:[]

            };
        case 'CHANGED_TAB':
            return{
                // savedGitJobs : action.savedGitJobs,
                tab:  action.tab,
                job: initialJob,
                user: action.user,
                savedGitJobs:[],
                markedStudents:[],
                followingStudents:[],
                followedStudents:[],
                allAddedJobs:[]
            };

        case 'ADD_JOB':
            return{
                tab: state.tab,
                user: state.user,
                job: {},
                savedGitJobs:[],
                markedStudents:[],
                followingStudents:[],
                followedStudents:[],
                allAddedJobs:[]

            };

        case 'UPDATE_JOB':
            return{
                tab: state.tab,
                user: state.user,
                job: action.job,
                savedGitJobs:[],
                markedStudents:[],
                followingStudents:[],
                followedStudents:[],
                allAddedJobs:[]
            };

        case 'SAVE_UPDATED_JOB':
            return{
                tab: state.tab,
                user: state.user,
                job: action.job,
                savedGitJobs:[],
                markedStudents:[],
                followingStudents:[],
                followedStudents:[],
                allAddedJobs:[]
            }




        default:
            return state;
    }
}

export default privateProfileReducer;