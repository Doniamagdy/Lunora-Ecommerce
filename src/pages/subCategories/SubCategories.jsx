import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'


function SubCategories() {

    const params = useParams()

const getSubCategories= async ()=>{
    try{
const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${params._id}/subcategories`,
    {headers:{
        "Content-Type":"application/json"
    }}
)

console.log(response.data.data);

return response?.data?.data

    }catch(error){
console.log(error);

    }
}

const {data}= useQuery({
    queryKey:["subCategories", params._id],
    queryFn:getSubCategories
})




  return (
    <div className='mt-[80px]'>
      {data?.map((sub)=>(
<h2 key={sub._id}>{sub.name}</h2>

      ))}
    </div>
  )
}

export default SubCategories
