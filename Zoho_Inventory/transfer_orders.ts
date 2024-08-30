import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const create_a_transfer_order = async(body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/transferorders?organization_id=${organization_id}`, post_options(body))
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const list_all_transfer_orders = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/transferorders?organization_id=${organization_id}`, options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const update_a_transfer_order = async (transfer_order_id: string, body: any) => {

    try {

        const data = await fetch(`https://www.zohoapis.com/inventory/v1/transferorders/${transfer_order_id}?organization_id=${organization_id}`, put_options(body))
        const res = await data.json()
return res

    } catch (error) {
        console.error(error)
    }
}

export const retrieve_a_transfer_order = async (transfer_order_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/transferorders/${transfer_order_id}?organization_id=${organization_id}`, options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_a_transfer_order = async (transfer_order_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/transferorders/${transfer_order_id}?organization_id=${organization_id}`, delete_options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const mark_as_received = async (transfer_order_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/transferorders/${transfer_order_id}/markastransferred?organization_id=${organization_id}`, {
            method: 'POST', 
            headers: options.headers
        })
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

