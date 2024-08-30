import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const create_a_purchase_receive = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/purchasereceives?organization_id=${organization_id}`, post_options(body))
        const res = data.json()
        return res
    } catch (error) {
        console.error(error

        )
    }
}

export const update_a_purchase_receive = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/purchasereceives/?organization_id=${organization_id}`, put_options(body))
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const retrieve_a_purchase_receive = async (purchase_order_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/purchasereceives/?organization_id=${organization_id}`, options)
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_a_purchase_receive = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/purchasereceives/?organization_id=${organization_id}`, delete_options)
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}