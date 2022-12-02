import { ref } from 'vue'
import axios from 'axios'

export const useApiShorten = () =>
{
    const data = ref({
        url: '',
        error: false,
        errorMessage: ''
    })

    const shortLinks = ref<any[]>([])

    const shortenApiUrl = async () =>
    {
        await axios.post(`https://api.shrtco.de/v2/shorten?url=${data.value.url}`).then((response) =>
        {
            if (response.data.ok)
            {
                shortLinks.value.push({ ...response.data.result })
                data.value.url = ''
            }
        }).catch((error) =>
        {
            hanldeServerErrors(error.response.data)
        })
    }

    const hanldeServerErrors = (error: any) =>
    {
        let errorCode = error.error_code
        switch (errorCode)
        {
            case 1:
                data.value.errorMessage = 'Please add a link'
                data.value.error = true
                break;
            case 2:
                data.value.errorMessage = 'Invalid URL submitted'
                data.value.error = true
                break;
            case 3:
                data.value.errorMessage = 'Rate limit reached. Wait a second and try again'
                data.value.error = true
                break;
            case 5:
                data.value.errorMessage = 'shrtcode code (slug) already taken/in use'
                data.value.error = true
                break;
            case 6:
                data.value.errorMessage = 'Unknown error'
                data.value.error = true
                break;
            default:
            // code block
        }
    }
    return {
        data,
        shortLinks,
        shortenApiUrl
    }
}