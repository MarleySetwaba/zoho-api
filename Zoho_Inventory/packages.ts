import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

//FIX
export const create_a_package = async (salesorder_id: string, body: any) => {
    try{
const data = await fetch(`https://www.zohoapis.com/inventory/v1/packages?organization_id=${organization_id}&salesorder_id=${salesorder_id}`, post_options(body))
const res = await data.json()
return res
    }catch(error){
        console.error(error)
    }
}

export const list_all_packages = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/packages?organization_id=${organization_id}`, options)
        const res = await data.json()
  return res
    } catch (error) {
        console.error(error)
    }
}

export const update_a_package = async (package_id: string, body: any) => {
    try {
const data = await fetch(`https://www.zohoapis.com/inventory/v1/packages/${package_id}?organization_id=${organization_id}`, put_options(body))
const res = await data.json()
return res
    } catch(error){
console.error(error)
    } 
}

export const retrieve_a_package = async (package_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/packages/${package_id}?organization_id=${organization_id}`, options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_a_package = async (package_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/packages/${package_id}?organization_id=${organization_id}`, delete_options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

