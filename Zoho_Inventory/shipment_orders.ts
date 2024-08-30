import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const create_a_shipment_order = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/shipmentorders?organization_id=${organization_id}`, post_options(body))
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}



  
  fetch('https://www.zohoapis.com/inventory/v1/shipmentorders?organization_id=10234695', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

export const update_a_shipment_order = async (shipment_order_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/shipmentorders/${shipment_order_id}?organization_id=${organization_id}`, put_options(body))
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const retrieve_a_shipment_order = async (shipment_order_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/shipmentorders/${shipment_order_id}?organization_id=${organization_id}`, options)
        const res = await data.json()
return res

    } catch (error) {
        console.error(error)
    }
}

export const delete_a_shipment_order = async (shipment_order_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/shipmentorders/${shipment_order_id}?organization_id=${organization_id}`, delete_options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const mark_shipment_order_as_delivered = async (shipment_order_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/shipmentorders/${shipment_order_id}/status/delivered?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}