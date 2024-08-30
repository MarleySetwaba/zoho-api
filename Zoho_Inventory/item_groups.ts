import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const create_an_item_group = async (body: any) => {
try {
const data = await fetch(`https://www.zohoapis.com/inventory/v1/itemgroups?organization_id=${organization_id}`, post_options(body))
const res = await data.json()
return res
} catch(error){
console.error(error)
}
}

export const list_all_item_groups = async () => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/itemgroups?organization_id=${organization_id}`, options)
    const res = await data.json()
    return res
} catch (error) {
    console.error(error)
}
}

export const update_an_item_group = async (itemgroup_id: string, body: any) => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/itemgroups/${itemgroup_id}?organization_id=${organization_id}`, put_options(body))
    const res = await data.json()
    return res
} catch (error) {
    console.error(error)
}
}

export const retrieve_an_item_group = async (itemgroup_id: string) => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/itemgroups/${itemgroup_id}?organization_id=${organization_id}`, options)
    const res = await data.json()
    return res
} catch (error) {
    console.error(error)
}
}

export const delete_an_item_group = async (itemgroup_id: string) => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/itemgroups/${itemgroup_id}?organization_id=${organization_id}`, delete_options)
    const res = await data.json()
    return res
} catch (error) {
    console.error(error)
}
}

export const mark_item_group_as_active = async (itemgroup_id: string) => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/itemgroups/${itemgroup_id}/active?organization_id=${organization_id}`, {
        method: 'POST',
        headers: options.headers
    })
    const res = await data.json()
    return res
} catch (error) {
    console.error(error)
}
}

export const mark_item_group_as_inactive = async (itemgroup_id: string) => {
try {
    const data = await fetch(`https://www.zohoapis.com/inventory/v1/itemgroups/${itemgroup_id}/inactive?organization_id=${organization_id}`, {
        method: 'POST',
        headers: options.headers
    })
    const res = await data.json()
    return res
} catch (error) {
    console.error(error)
}
}