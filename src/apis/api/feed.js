import instance from "../utils/instance"

// Content-Type을 JSON에서 multipart/form-data로 변경
export const uploadFeed = async (feedFormData) => {
    const option = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
    return await instance.post(`/api/v1/feed`, feedFormData, option);
}