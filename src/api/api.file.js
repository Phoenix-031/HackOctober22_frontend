import axios from 'axios'

const fileUpload = async (Contributor,Institute,Year,Semester,Department,FilePath) => {

    // console.log(FilePath)
    // return (FilePath)
    const response = await axios.post('https://glamorous-ring-jay.cyclic.app/api/files/postFiles',{
        Contributor,
        Institute,
        Year,
        Semester,
        Department,
        FilePath
    }) 

    return response
}

export {fileUpload}