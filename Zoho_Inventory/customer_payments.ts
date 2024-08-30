import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const create_a_payment = async (body: any) => {

    try{
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/customerpayments?organization_id=${organization_id}`, post_options(body))
        const res = await data.json()
        return res
    }catch(error){
        console.error(error)
    }
}

export const list_customer_payments = async () => {

    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/customerpayments?organization_id=${organization_id}`, options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const update_custom_field_in_customer_payments = async (body: any) => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/customerpayment/9030000079467/customfields?organization_id=${organization_id}`, put_options(body))
    const res = await data.json()
    return res
} catch (error) {
    console.error(error)
}
}

export const update_a_payment = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/customerpayments/9030000079467?organization_id=${organization_id}`, put_options(body))
        const res = await data.json();
        return res
    } catch (error) {
        console.error(error)
    }
}

export const retrieve_a_payment = async (payment_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/customerpayments/${payment_id}?organization_id=${organization_id}`, options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_a_payment = async (payment_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/customerpayments/${payment_id}?organization_id=${organization_id}`, delete_options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

