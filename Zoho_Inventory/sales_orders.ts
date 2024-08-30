import { headers } from "next/headers";
import { access_token, delete_options, organization_id, post_options, put_options } from "../zoho";
import { options } from "../zoho";



export const list_all_sales_orders = async () => {
try {
  const data = await fetch(
    `https://www.zohoapis.com/inventory/v1/salesorders?organization_id=${organization_id}`,
    options
  )
  const response = await data.json()
return  response
} catch (error) {
  console.error(error)
}
};


export const retrieve_a_sales_orders = async (order_id: string) => {
  try {
    
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesorders/${order_id}?organization_id=${organization_id}`, options)
    const response = await data.json()
return response 
} catch (error) {
    console.error(error)
  }

}

export const create_a_sales_order = async (body: any) => {
  try {
    
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesorders?organization_id=${organization_id}`, post_options(body))
    const response = await data.json()
return response
  } catch (error) {
    console.error(error)
  }
}

export const bulk_delete_sales_orders = async () => {
  try {
    
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesorders?organization_id=${organization_id}`, delete_options)
    const response = await data.json()
return response
  } catch (error) {
    console.error(error)
  }
}

export const update_a_sales_order = async (order_id: string, body: any) => {
  try {
    
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesorders/${order_id}?organization_id=${organization_id}`, put_options(body))
    const response = await data.json()
return response
  } catch (error) {
    console.error(error)
  }
}

export const delete_a_sales_order = async (order_id: string) => {
  try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesorders/${order_id}?organization_id=${organization_id}`, delete_options)
    const response = await data.json()
return response
    
  } catch (error) {
    console.error(error)
  }
}

export const mark_sales_order_as_confirmed = async (order_id: string) => {
  try {
    
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesorders/${order_id}/status/confirmed?organization_id=${organization_id}`, {
      method: 'POST',
      headers: options.headers
    })
    const response = await data.json()
return response
  } catch (error) {
    console.error(error)
  }
}

export const mark_sales_order_as_void = async (order_id: string) => {
  try {
    
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesorders/${order_id}/status/void?organization_id=${organization_id}`, {
      method: 'POST',
      headers: options.headers
    })
    const response = await data.json()
return response
} catch (error) {
    console.error(error)
  }
}


export const bulk_confirm_sales_orders = async () => {
  try {
    
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/salesorders/status/confirmed?salesorder_ids=4815000000045208%2C4815000000045274%2C4815000000045340&organization_id=${organization_id}`, {
      method: 'POST',
      headers: options.headers
    })
    const response = await data.json()
return response
} catch (error) {
    console.error(error)
  }
}