import axios from 'axios'

const changeProfilePassword = async (password) => {

    const response = await axios.patch(`https://spooky-alien-35919.herokuapp.com/api/user/${localStorage.getItem('user')}`,{
        password,
        userId: `${localStorage.getItem('user')}`
    })

    return response
    
}

const changeUsername = async (username) => {

    const response = await axios.patch(`https://spooky-alien-35919.herokuapp.com/api/user/${localStorage.getItem('user')}`,{
        username,
        userId: `${localStorage.getItem('user')}`
    })

    return response
    
}

const changeEmail = async (email) => {

    const response = await axios.patch(`https://spooky-alien-35919.herokuapp.com/api/user/${localStorage.getItem('user')}`,{
        email,
        userId: `${localStorage.getItem('user')}`
    })

    return response
    
}

const getUser = async () => {
    const response = await axios.get(`https://spooky-alien-35919.herokuapp.com/api/user/${localStorage.getItem('user')}`)
    return response
}

const updateProfilePic = async (picture) => {
    // console.log(picture)
    // return picture
    const response = await axios.patch(`https://spooky-alien-35919.herokuapp.com/api/user/profilepic/${localStorage.getItem('user')}`,{
        picture,
    })

    return response
}
export {changeProfilePassword,changeUsername,changeEmail,getUser,updateProfilePic}
