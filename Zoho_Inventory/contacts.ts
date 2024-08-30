import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const list_all_contacts = async (contact_name_contains?: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts?organization_id=${organization_id}&contact_name_contains=${contact_name_contains}`, options)
    const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const get_contact = async (contact_id: string) => {
try {
    
    const response = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/${contact_id}?organization_id=${organization_id}`, options)
    const data = await response.json()
 return data
} catch (error) {
    console.error(error)
}




}



export const create_a_contact = async (body: any) => {

    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
return response
    } catch (error) {
        console.log(error)
    }


}

export const update_a_contact = async (contact_id: string, body: any) => {

    try {  
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/${contact_id}?organization_id=${organization_id}`, put_options(body))
        const response = await data.json()
   return response
    } catch (error) {
        console.error(error)
    }
}

export const delete_a_contact = async (contact_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/${contact_id}?organization_id=${organization_id}`, delete_options)
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }

}

export const get_contact_address = async (contact_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/${contact_id}/address?organization_id=${organization_id}`, options)
        const response = await data.json()
 return response
    } catch (error) {
        console.error(error)
    }
}

export const mark_as_inactive = async (contact_id: string) => {

    try {  
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/${contact_id}/inactive?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const mark_as_active = async (contact_id: string) => {

    try {  
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/${contact_id}/active?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
    
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const email_statement = async (contact_id: string, body: any) => {
    try {  
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/${contact_id}/statements/email?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
 return response
    } catch (error) {
        console.error(error)
    }
}

export const get_statement_mail_content = async (contact_id: string) => {
    try {  
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/${contact_id}/statements/email?organization_id=${organization_id}`, options)
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }

}

export const email_contact = async (contact_id: string, body: any) => {

    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/${contact_id}/email?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
 return response
    } catch (error) {
        console.error(error)
    }
}


export const list_comments = async (contact_id: string) => {

    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/${contact_id}/comments?organization_id=${organization_id}`, options)
        const response = await data.json()
 return response
    } catch (error) {
        console.error(error)
    }
}
