import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const create_an_item_adjustment = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/inventoryadjustments?organization_id=${organization_id}`, post_options(body))
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const list_all_item_adjustments = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/inventoryadjustments?organization_id=${organization_id}`, options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const update_an_item_adjustment = async (item_adjustment_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/inventoryadjustments/${item_adjustment_id}?organization_id=${organization_id}`, put_options(body))
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)

    }
}

export const retrieve_an_item_adjusment = async (item_adjustment_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/inventoryadjustments/${item_adjustment_id}?organization_id=${organization_id}`, options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_an_item_adjustment = async(item_adjustment_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/inventoryadjustments/${item_adjustment_id}?organization_id=${organization_id}`, delete_options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}