const baseURL = "http://localhost:3000/"
const signInURL = `${baseURL}/sign-in`
const validateURL = `${baseURL}/validate`
const ImageURL = `${baseURL}/images`

const getImages = (url, body) => {
    const configObject = {
        method: "GET",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json',
        }
    }
    return fetch(ImageURL)
    .then((res) => res.json())
}

const get = (url, token) => {
    const configObject = {
        headers: {
            "Authorization": token
        }
    }
    return fetch(url, configObject)
}

const post = (url, body) => {
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify(body)
    }   
    return fetch(url, configObject)
}

const signIn = (body) => post(signInURL, body).then(res => res.json())

const validate = (token) => get(validateURL, token).then(res => res.json())

export default { signIn, validate, getImages } 