import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const create_a_credit_note = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes?organization_id=${organization_id}`, post_options(body))
    const res = await data.json()
    return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_a_credit_note = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369?organization_id=${organization_id}`, delete_options)
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const list_all_credit_notes = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes?organization_id=${organization_id}`, options)
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const update_a_credit_note = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369?organization_id=${organization_id}`,put_options(body))
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const get_a_credit_note = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369?organization_id=${organization_id}`, options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const email_a_credit_note = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/email?organization_id=${organization_id}`, post_options(body))
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const get_email_content = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/email?organization_id=${organization_id}`, options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const void_a_credit_note = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/void?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const convert_credit_note_to_draft = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/draft?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const convert_credit_note_open = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/draft?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const submit_credit_note_for_approval = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/submit?organization_id={{practice_org}}`, {
            method: 'POST',
            headers: options.headers
        })
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const approve_a_credit_note = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/approve?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const email_history = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/emailhistory?organization_id=${organization_id}`, options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}


export const update_billing_address = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/address/billing?organization_id=${organization_id}`, put_options(body))
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const update_shipping_address = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/address/shipping?organization_id=${organization_id}`, put_options(body))
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }

}

export const apply_credits_to_invoices = async (body: any) => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/invoices?organization_id=${organization_id}`, post_options(body))
    const res = await data.json()
    return res
} catch (error) {
    console.error(error)
}
}

export const list_invoices_creditted = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/invoices?organization_id=${organization_id}`, options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_credits_applied_to_invoice = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/invoices?organization_id=${organization_id}`, delete_options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const add_a_comment = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/comments?organization_id=${organization_id}`,post_options(body))
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const list_credit_note_comments_and_history = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/comments?organization_id=${organization_id}`, options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_a_comment = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/comments/982000000570001?organization_id=${organization_id}`, delete_options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const list_credit_note_refunds = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/comments/982000000570001?organization_id=${organization_id}`, options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const refund_a_credit_note = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/refunds?organization_id=${organization_id}`, post_options(body))
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const list_refunds_of_a_credit_note = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/refunds?organization_id=${organization_id}`, options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const update_credit_note_refund = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/refunds/982000000567158?organization_id=${organization_id}`, put_options(body))
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
} 

export const get_credit_note_refund = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/refunds/982000000567158?organization_id=${organization_id}`, options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_credit_refund = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/creditnotes/90300000072369/refunds/982000000567158?organization_id=${organization_id}`, delete_options)
        const res = await data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

