import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const list_all_purchase_orders = async () => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/purchaseorders?organization_id=${organization_id}`, options)
        const response = await data.json()

        if(response.code === 0){
            return response
        }else {
            throw new Error('Something Went Wrong')
        }
    } catch (error) {
        console.error(error)
    }
}

export const retrieve_a_purchase_order = async (order_id: string) => {
    try {
        const url = `https://www.zohoapis.com/inventory/v1/purchaseorders/${order_id}?organization_id=${organization_id}`
        const data = await fetch(url, options)
        const response = await data.json()
return response
        
    } catch (error) {
        console.error(error)
    }

}

export const create_a_sales_order = async (body: any) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/purchaseorders?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }

}

export const update_a_sales_order = async (order_id: string, body: any) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/purchaseorders/${order_id}?organization_id=${organization_id}`, put_options(body))
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const delete_a_purchase_order = async (order_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/purchaseorders/${order_id}?organization_id=${organization_id}`, delete_options)
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }

}