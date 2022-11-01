import axios from 'axios'

const filterItems = async (Institute,Year,Semester,Department) => {

    // console.log(FilePath)
    // return (FilePath)
    const response = await axios.post('https://spooky-alien-35919.herokuapp.com/api/filter/',{
        Institute,
        Year,
        Semester,
        Department
    }) 

    return response
}

export {filterItems}