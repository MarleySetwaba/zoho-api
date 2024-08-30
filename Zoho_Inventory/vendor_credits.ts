import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const create_vendor_credits = async (body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits?organization_id=${organization_id}`, post_options(body))
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const list_all_vendor_credits = async () => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits?organization_id=${organization_id}`, options)
    const res = data.json()
    return res
} catch (error) {
    console.error(error)
}

}

export const update_vendor_credit = async (vendor_credit_id: string, body: any ) => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}?organization_id=${organization_id}`, put_options(body))
    const res = data.json()
    return res
} catch (error) {
    console.error(error)
}
}

export const get_vendor_credit = async (vendor_credit_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}?organization_id=${organization_id}`, options)
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_vendor_credit = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/3000000002075?organization_id=${organization_id}`, delete_options)
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const convert_vendor_credit_to_open = async (vendor_credit_id: string) => {
    try {
        const data  = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/status/open?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })

        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const void_vendor_credit = async (vendor_credit_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/status/void?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })

        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const submit_a_vendor_credit_for_approval = async (vendor_credit_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/submit?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })

        const res = data.json()
        return res

    } catch (error) {
        console.error(error)
    }
}

export const approve_vendor_credit = async (vendor_credit_id: string) => {
    try {
         const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/approve?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
         })

         const res = data.json()
         return res
    } catch (error) {
        console.error(error)
    }
}

export const apply_credits_to_bill = async (vendor_credit_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/bills?organization_id=${organization_id}`, post_options(body))
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const list_bills_creditted = async (vendor_credit_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/bills?organization_id=${organization_id}`, options)
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_bills_creditted = async (vendor_credit_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/bills/?organization_id=${organization_id}`, delete_options)
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const refund_a_vendor_credit = async (vendor_credit_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/refunds?organization_id=${organization_id}`, post_options(body))
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const list_refunds_of_a_vendor_credit = async (vendor_credit_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/refunds?organization_id=${organization_id}`, options)
        const res = data.json()
return res
    } catch (error) {
        console.error(error)
    }
}

export const update_vendor_credit_refund = async (vendor_credit_id: string, refund_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/refunds/${refund_id}?organization_id=${organization_id}`, put_options(body))
const res = data.json()
return res

    } catch (error) {
        console.error(error)
    }
}

export const get_vendor_credit_refund = async (vendor_credit_id: string, refund_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/refunds/${refund_id}?organization_id=${organization_id}`)
    } catch (error) {
        console.error(error)
    }
}

export const delete_vendor_credit_refund = async (vendor_credit_id: string, refund_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/refunds/${refund_id}?organization_id=${organization_id}`, delete_options)
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const list_vendor_credits_refunds = async () => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/refunds?organization_id=${organization_id}`, options)
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const add_a_comment = async (vendor_credit_id: string, body: any) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/comments?organization_id=${organization_id}`, post_options(body))
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const list_vendor_credits_comments_and_history = async (vendor_credit_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/comments?organization_id=${organization_id}`, options)
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

export const delete_a_comment = async (vendor_credit_id: string, comment_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/vendorcredits/${vendor_credit_id}/comments/${comment_id}?organization_id=${organization_id}`, delete_options)
        const res = data.json()
        return res
    } catch (error) {
        console.error(error)
    }
}

