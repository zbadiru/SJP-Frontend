const baseURL = "http://localhost:3000/"
const signInURL = `${baseURL}/sign-in`
const validateURL = `${baseURL}/validate`
const ImageURL = `${baseURL}/images`
const PhotoshootURL = `${baseURL}/photoshoots`
const ProductURL = `${baseURL}/merchandises`

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
        body: JSON.stringify( body)
    }   
    return fetch(url, configObject)
}
const createNewItem = (itemData) => {
    return fetch(URL + "items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ item: itemData }),
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
    return res;
    })
}

const getAllPhotoshoot = () => {
    return fetch(PhotoshootURL)
    .then(resp => resp.json())
    .catch(error => console.log(error))
}
const getAllProduct = () => {
    return fetch(ProductURL)
    .then((res) => res.json())
}

const signIn = (body) => post(signInURL, body).then(res => res.json())

const validate = (token) => get(validateURL, token).then(res => res.json())

const postImage = (body) => post(ImageURL, body).then(res => res.json())

const createNewPhotoshoot = (body) => post(PhotoshootURL, body).then(res => res.json())



export default { signIn, validate, getImages, createNewItem, getAllPhotoshoot, postImage, createNewPhotoshoot, getAllProduct } 