import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const create_retainer_invoice = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices?organization_id=${organization_id}`, post_options(body))
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const list_all_retainer_invoices = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices?organization_id=${organization_id}`, options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const update_a_retainer_invoice = async (retainer_invoice_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}?organization_id=${organization_id}`, put_options(body))
        const res = await data.json()
  return res
    } catch (error) {
        console.error(error)
    }
}

export const get_a_retainer_invoice = async (retainer_invoice_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}?organization_id=${organization_id}`, options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_a_retainer_invoice = async (retainer_invoice_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}?organization_id=${organization_id}`, delete_options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const mark_retainer_invoice_as_sent = async (retainer_invoice_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/status/sent?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}


export const update_retainer_invoice_template = async (retainer_invoice_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/status/sent?organization_id=${organization_id}`, put_options(body))
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const void_a_retainer_invoice = async (retainer_invoice_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/status/void?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const mark_retainer_invoice_as_draft = async (retainer_invoice_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/status/draft?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const submit_retainer_invoice_for_approval = async (retainer_invoice_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/submit?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const approve_a_retainer_invoice = async (retainer_invoice_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com /inventory/v1/retainerinvoices/${retainer_invoice_id}/approve?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })

        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const email_a_retainer_invoice = async (retainer_invoice_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/email?organization_id=${organization_id}`, post_options(body))
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
} 

export const get_retainer_invoice_email_content = async (retainer_invoice_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/email?organization_id=${organization_id}`, options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const update_retainer_invoice_billing_address = async (retainer_invoice_id: string, body: any) => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/address/billing?organization_id=${organization_id}`, put_options(body))
    const res = await data.json()
return res
} catch (error) {
    console.error(error)
}
}

export const list_retainer_invoice_templates = async () => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/templates?organization_id=${organization_id}`, options)
    const res = await data.json()
return res
} catch (error) {
    console.error(error)
}
}

export const add_attachment_to_a_retainer_invoice = async (retainer_invoice_id: string, body: any) => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/attachment?organization_id=${organization_id}`, post_options(body))
const res = await data.json()
return res
} catch (error) {
    console.error(error)
}
}

export const get_retainer_invoice_attachment = async (retainer_invoice_id: string) => {
try {

        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/attachment?organization_id=${organization_id}`, options)
        const res = await data.json()
return res
} catch (error) {
    console.error(error)
}
}

export const delete_retainer_invoice_attachment = async (retainer_invoice_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/attachment?organization_id=${organization_id}`, delete_options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const add_comment_to_retainer_invoice = async (retainer_invoice_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/comments?organization_id=${organization_id}`, post_options(body))
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const list_retainer_invoice_comments_and_history = async (retainer_invoice_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/comments?organization_id=${organization_id}`, options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const update_retainer_invoice_comment = async (retainer_invoice_id: string, comment_id: string, body: any) => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/comments/${comment_id}?organization_id=${organization_id}`, put_options(body))
    const res = await data.json()
return res

} catch (error) {
    console.error(error)
}
}

export const delete_retainer_invoice_comment = async (retainer_invoice_id: string, comment_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/retainerinvoices/${retainer_invoice_id}/comments/${comment_id}?organization_id=${organization_id}`, delete_options)
        const res = await data.json()
return res
    } catch (error) {
        console.error(error)
    }
}