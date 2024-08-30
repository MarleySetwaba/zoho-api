

export const access_token = ''
export const organization_id = ''

export const options = {
    method: 'GET',
    headers: {
        Authorization: `Zoho-oauthtoken ${access_token}`,
        "content-type": "application/json",
    }
}
  

export const post_options = (body: any) => {
    const post = {
method: 'POST',
headers: {
    Authorization: `Zoho-oauthtoken ${access_token}`,
    "content-type": "application/json",
},
body: JSON.stringify(body)
}

return post
    }

export const put_options = (body: any) => {
    const put = {
        method: 'PUT',
        headers: {
            Authorization: `Zoho-oauthtoken ${access_token}`,
            "content-type": "application/json",
        },
        body: JSON.stringify(body)
        }

        return put
}

export const delete_options = {
    method: 'DELETE',
    headers: {
        Authorization: `Zoho-oauthtoken ${access_token}`,
        "content-type": "application/json",
    }
}
    
