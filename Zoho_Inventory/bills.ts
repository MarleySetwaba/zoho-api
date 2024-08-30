import { delete_options, options, organization_id, post_options, put_options } from "./zoho"

export const create_a_bill = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/bills?organization_id=${organization_id}`, post_options(body))
        const res  = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

interface BillSearchParameters {
    bill_number?: string; // Search by bill number
    bill_number_startswith?: string; // Search for bills where bill number starts with this value
    bill_number_contains?: string; // Search for bills where bill number contains this value
  
    reference_number?: string; // Search by reference number
    reference_number_startswith?: string; // Search for bills where reference number starts with this value
    reference_number_contains?: string; // Search for bills where reference number contains this value
  
    date?: string; // Search by bill date (format likely depends on API)
    date_start?: string; // Search for bills with date on or after this value (format likely depends on API)
    date_end?: string; // Search for bills with date on or before this value (format likely depends on API)
    date_before?: string; // Search for bills with date before this value (format likely depends on API)
    date_after?: string; // Search for bills with date after this value (format likely depends on API)
  
    status?: "paid" | "open" | "overdue" | "void" | "partially_paid"; // Search by bill status
  
    description?: string; // Search by description
    description_startswith?: string; // Search for bills where description starts with this value
    description_contains?: string; // Search for bills where description contains this value
  
    vendor_name?: string; // Search by vendor name
    vendor_name_startswith?: string; // Search for bills where vendor name starts with this value
    vendor_name_contains?: string; // Search for bills where vendor name contains this value
  
    total?: number; // Search by bill total
    total_less_than?: number; // Search for bills with total less than this value
    total_less_equals?: number; // Search for bills with total less than or equal to this value
    total_greater_than?: number; // Search for bills with total greater than this value
    total_greater_equals?: number; // Search for bills with total greater than or equal to this value
  
    vendor_id?: string; // Search by Vendor ID
    item_id?: string; // Search by Item ID
    recurring_bill_id?: string; // Search by Recurring Bill ID
    purchaseorder_id?: string; // Search by Purchase Order ID
  
    last_modified_time?: string; // Search by Last Modified Time (format likely depends on API)
  
    filter_by?: "Status.All" | "Status.PartiallyPaid" | "Status.Paid" | "Status.Overdue" | "Status.Void" | "Status.Open"; // Filter bills by any status
  
    search_text?: string; // Search bills by bill number, reference number, or vendor name
  
    page?: number; // Number of pages (pagination)
  
    sort_column?: "vendor_name" | "bill_number" | "date" | "due_date" | "total" | "balance" | "created_time"; // Sort bills
  
    sort_order?: "A" | "D"; // Sort order (Ascending or Descending)
  }

export const list_all_bills = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/bills?organization_id=${organization_id}`, options)
        const res = await data.json()
 return res

        
    } catch (error) {
        console.error(error)
    }
}

export const update_a_bill = async (bill_id: string, body: any) => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/bills/${bill_id}?organization_id=${organization_id}`, put_options(body))
    const res = await data.json()
return res
} catch (error) {
    console.error(error)
}
}

export const retrieve_a_bill = async (bill_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/bills/${bill_id}?organization_id=${organization_id}`, options)
        const res = await data.json()
  return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_a_bill = async (bill_id: string) =>{
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/bills/${bill_id}?organization_id=${organization_id}`, delete_options)
        const res = await data.json()
  return res
    } catch (error) {
        console.error(error)
    }
}

export const update_custom_field_in_existing_bill = async (bill_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/bill/${bill_id}/customfields?organization_id=${organization_id}`, put_options(body))
        const res = await data.json()
  return res
    } catch (error) {
        console.error(error)
    }
}

export const mark_bill_as_open = async (bill_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/bills/${bill_id}/status/open?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const res = await data.json()
 return res
    } catch (error) {
        console.error(error)
    }
}

export const mark_bill_as_void = async (bill_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/bills/${bill_id}/status/void?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })

        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

