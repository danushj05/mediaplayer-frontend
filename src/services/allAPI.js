// upload videos

import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

 export const uploadAllVideo = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

// get all videos

export const getAllVideos =async()=>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

// api to delete a video
export const deleteAVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
    
}

// api to add data to watch history
export const addToHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

// api to get all history from json server
export const getAllHistory = async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

// api to add categories
export const addToCategory = async()=>{
    return await commonAPI('POST',`${serverURL}/categories`,'')
}

//get all category from json server
export const getAllCategory = async ()=>{
	return await commonAPI('GET',`${serverURL}/categories`,"")
}

//api to delete history from json server
export const deleteCategory = async (id)=>{
	return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
}
