import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const list_invoices = async () => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices?organization_id=${organization_id}`, options)
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }

}

export const get_an_invoice = async (invoice_id: string) => {
try {
    
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}?organization_id=${organization_id}`, options)
    const response = await data.json()
  return response
} catch (error) {
    console.error(error)
}
}

export const create_an_invoice = async (body: any) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const update_an_invoice = async (invoice_id: string, body: any) => {

    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}?organization_id=${organization_id}`, put_options(body))
        const response = await data.json()
  return response
    } catch (error) {
        console.error(error)
    }
}


export const delete_an_invoice = async (invoice_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}?organization_id=${organization_id}`, delete_options)
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const update_custom_field_in_existing_invoices = async (invoice_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoice/${invoice_id}/customfields?organization_id=${organization_id}`, put_options(body))
        const response = await data.json()
return response
        
    } catch (error) {
        console.error(error)
    }
}

export const mark_invoice_as_sent = async (invoice_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/status/sent?organization_id=${organization_id}`, {
            method: 'POST', 
            headers: options.headers
        })
        const response = await data.json()
return response
    } catch (error) {
      console.error(error)  
    }
}

export const void_an_invoice = async (invoice_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/status/void?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const response = await data.json()
return response
        
    } catch (error) {
        console.error(error)
    }
}

export const mark_invoice_as_draft = async (invoice_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/status/draft?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const response = await data.json()
 return response
    } catch (error) {
        console.error(error)
    }
}


export const email_invoice = async (invoice_id: string, body: any) => {

    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/email?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const get_email_invoice_content = async (invoice_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/email?organization_id=${organization_id}`, options)
        const response = await data.json()
  return response
    } catch (error) {
        console.error(error)
    }

}

//?????
export const email_invoices = async () => {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/email?organization_id={{practice_org}}&invoice_ids=`)
}


export const get_payment_reminder_mail_content = async () => {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/982000000567114/paymentreminder?organization_id=${organization_id}`, options)
}

export const bulk_export_invoices = async () => {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/pdf?organization_id={{practice_org}}&invoice_ids=`)
}

export const bulk_print_invoices = async () => {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/print?organization_id={{practice_org}}&invoice_ids=`)
}


export const disable_payment_reminder = async (invoice_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/paymentreminder/disable?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
return response
        
    } catch (error) {
        console.error(error)
    }
}

export const enable_payment_reminder = async (invoice_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/paymentreminder/enable?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const write_off_invoices = async (invoice_id: string) => {
    try {
        
        const data = await fetch(`'https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/writeoff?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const response = await data.json()
  return response
    } catch (error) {
        console.error(error)
    }
}

export const cancel_write_off = async (invoice_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/writeoff/cancel?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const update_billing_address = async (invoice_id: string, body: any) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/address/billing?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const update_shipping_address = async (invoice_id: string, body: any) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/address/shipping?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
        return response
    } catch (error) {
        console.error(error)
    }
}

export const list_invoice_templates = async () => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/templates?organization_id=${organization_id}`, options)
        const response = await data.json()
return response
    } catch (error) {
       console.error(error) 
    }
}

export const update_invoice_template = async (invoice_id: string, body: any) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/templates/982000000000143?organization_id=${organization_id}`, put_options(body))
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const list_invoice_payments = async (invoice_id: string) => {

    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/payments?organization_id=${organization_id}`, options)
        const response = await data.json()
   return response
    } catch (error) {
        console.error(error)
    }
}

export const list_credits_applied = async (invoice_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/creditsapplied?organization_id=${organization_id}`, options)
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const apply_credits = async (invoice_id: string, body: any) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/credits?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const delete_payment = async (invoice_id: string, payment_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/payments/${payment_id}?organization_id=${organization_id}`, delete_options)
        const response = await data.json()
  return response
    } catch (error) {
        console.error(error)
    }
}

export const delete_applied_credit = async (invoice_id: string, credit_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/creditsapplied/${credit_id}?organization_id=${organization_id}`, delete_options)
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const add_attechment_to_invoice = async (invoice_id: string, body: any) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/attachment?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const update_attachment_preference = async (invoice_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/attachment?organization_id=${organization_id}&can_send_in_mail=true`)
        const response = await data.json()
 return response
        
    } catch (error) {
        console.error(error)
    }
}

export const delete_an_attachment = async (invoice_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/attachment?organization_id=${organization_id}`, delete_options)
        const response = await data.json()
return response
    } catch (error) {
      console.error(error)  
    }
}

export const add_comment = async (invoice_id: string, body: any) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/comments?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const list_invoice_comments = async (invoice_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/comments?organization_id=${organization_id}`, options)
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}

export const update_comment = async (invoice_id: string, comment_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/comments/${comment_id}?organization_id=${organization_id}`, put_options(body))
        const response = await data.json()
return response
        
    } catch (error) {
        console.error(error)
    }
}

export const delete_a_comment = async (invoice_id: string, comment_id: string,) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/invoices/${invoice_id}/comments/${comment_id}?organization_id=${organization_id}`, delete_options)
        const response = await data.json()
return response
    } catch (error) {
        console.error(error)
    }
}