import URL_ROOT from "./UrlConfig";

export default class UserService {

    static myInstance = null;

    static getInstance() {
        if (UserService.myInstance == null) {
            UserService.myInstance =
                new UserService();
        }
        return this.myInstance;
    }

    urlUser = `http://localhost:8080/api`;
    proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    findUserBycredentials  = (user) =>{
        return fetch(`${this.urlUser}/login`,{
            method: 'POST',
            body: JSON.stringify(user),
            credentials:'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    registerUser = (user) => {


        return fetch(`${this.urlUser}/register`,{
            method: 'POST',
            body: JSON.stringify(user),
            credentials:'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    updateUser = (user, userId) => {
        return fetch(`${this.urlUser}/user/${userId}`,{
            method: 'PUT',
            body: JSON.stringify(user),
            credentials: 'include',
            headers:{
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    findUsers = (username) => {
        return fetch(`${this.urlUser}/users/searchUserProfiles/${username}`)
            .then(response => response.json())
    }

    checkIfUserLoggedIn = () => {
        return fetch(`${this.urlUser}/loggedIn`,{
            credentials: 'include'
        })
            .then(response => response.text())
            .catch(error => console.log("ERROR IN CHECK"))
    };

    logOutUser = () => {
        return fetch(`${this.urlUser}/logout`,{
            method: 'POST',
            credentials: 'include'
        })
            .then(response => response.text())
            .catch(error => console.log("ERROR IN LOG OUT"))
    }

    followUser = (currentUserId, userToFollowId) => {
        return fetch(`${URL_ROOT}/api/linkUsers/${currentUserId}/${userToFollowId}`,{
            method: 'POST',
        })
            .then(response => response.text())
            .catch(result => console.log("ERROR IN FOLLOW"))
    }

    getFollowingUsers = (currentUserId) => {
        return fetch(`${URL_ROOT}/api/linkUsers/${currentUserId}`)
            .then(response=> response.json())
            .catch(response=> console.log("ERROR IN GETTING FOLLOWING USERS" + response))
    }




}
