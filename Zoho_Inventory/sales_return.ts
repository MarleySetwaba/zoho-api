import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const create_a_sales_return = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesreturns?organization_id=${organization_id}`, post_options(body))
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const list_all_sales_returns = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesreturns?organization_id=${organization_id}`, options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const update_a_sales_return = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesreturns/4815000000044972?organization_id=${organization_id}`, put_options(body))
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const retrieve_a_sales_return = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesreturns/4815000000044972?organization_id=${organization_id}`, options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_a_sales_return = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesreturns/4815000000044972?organization_id=${organization_id}`, delete_options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const create_a_sales_return_receive = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesreturnreceives?organization_id=${organization_id}`, post_options(body))
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_a_sales_return_recieve = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesreturnreceives?organization_id=${organization_id}`, delete_options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}