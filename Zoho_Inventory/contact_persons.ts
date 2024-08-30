import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const create_a_contact_persons = async (body: any) => {

    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/contactpersons?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const update_a_contact_persons = async (contact_person_id: string, body: any) => {

    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/contactpersons/${contact_person_id}?organization_id=${organization_id}`, put_options(body))
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }


}

export const delete_a_contact_persons = async (id: string) => {

    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/contactpersons/${id}?organization_id=${organization_id}`, delete_options)
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }


}

export const list_contact_persons = async (contact_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/${contact_id}/contactpersons?organization_id=${organization_id}`, options)
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
    
   
}

export const get_a_contact_persons = async (contact_person_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/${contact_person_id}/contactpersons/460000000026051?organization_id=${organization_id}`, options)
        const response = await data.json()
 return response
    } catch (error) {
        console.error(error)
    }
}

export const mark_as_primary_contact = async (contact_person_id: string) => {

    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/contacts/contactpersons/${contact_person_id}/primary?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const response = await data.json()
  return response
    } catch (error) {
        console.error(error)
    }
}