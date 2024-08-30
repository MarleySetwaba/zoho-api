import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const create_a_pricebook = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/pricebooks?organization_id=${organization_id}`, post_options(body))
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const list_all_pricebooks = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/pricebooks?organization_id=${organization_id}`, options)
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const update_pricebook = async (pricebook_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/pricebooks/${pricebook_id}?organization_id=${organization_id}`, put_options(body))
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_the_pricebook = async  (pricebook_id: string, ) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/pricebooks/${pricebook_id}?organization_id=${organization_id}`, delete_options)
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const mark_pricebook_as_active = async (pricebook_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/pricebooks/${pricebook_id}/active?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })

        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const mark_pricebook_as_inactive = async (pricebook_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/pricebooks/${pricebook_id}/inactive?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })

        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}
