import { ref } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'

export const useApiShorten = () =>
{
    const data = ref({
        url: '',
        error: false,
        errorMessage: ''
    })

    const router = useRouter()

    const route = useRoute()

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

    const moveToLink = async (code: any) =>
    {
        await axios.post(`https://api.shrtco.de/v2/info?code=${code}`).then((response) =>
        {
            if (response.data.ok)
            {
                let res = response.data.result
                let a = document.createElement('a')
                a.href = res.url
                a.target = '_blank'
                a.click()

            }
        }).catch((error) =>
        {
            // hanldeServerErrors(error.response.data)
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
        shortenApiUrl,
        moveToLink
    }
}