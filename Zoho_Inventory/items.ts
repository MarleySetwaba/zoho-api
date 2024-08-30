import Schedule from "@/components/Schedule"
import { delete_options, options, organization_id, post_options, put_options } from "../zoho"

export const list_all_items = async (searchParams: {
    name_contains?: string;
    description_contains?: string;
}) => {
    const urlParams = new URLSearchParams();
    if (searchParams.name_contains) {
        urlParams.append("name_contains", searchParams.name_contains);
      }
      if (searchParams.description_contains) {
        urlParams.append("description_contains", searchParams.description_contains);
      }

    try {
        const response = await fetch(`https://www.zohoapis.com/inventory/v1/items?organization_id=${organization_id}&${urlParams.toString()}`, options)
          const data = await response.json()
          console.log(data)
          return data.items

    } catch (error) {
    console.error(error.message);
    return error.message
    }

}

export const retrieve_an_item = async (id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/items/${id}?organization_id=${organization_id}`, options)
        const response = await data.json()
        return response
    } catch (error) {
        console.error(error)
    }
}

export const create_an_item = async (body: any) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/items?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
        return response
    } catch (error) {
        console.error(error)
    }
}

export const bulk_fetch_item_details = async () => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/itemdetails?item_ids=4815000000044208%2C4815000000044274%2C4815000000044340&organization_id=${organization_id}`)
        const response = await data.json()
        return response
    } catch (error) {
        console.error(error)
    }
}

export const update_an_item = async (item_id: string, body: any) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/items/${item_id}?organization_id=${organization_id}`, post_options(body))
        const response = await data.json()
        return response
    } catch (error) {
       console.error(error) 
    }
}

export const delete_an_item = async(item_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/items/${item_id}?organization_id=${organization_id}`, delete_options)
        const response = await data.json()
        return response
        
    } catch (error) {
        console.error(error)
    }
}

export const update_custom_field_in_existing_item = async (item_id: string, body: any) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/item/${item_id}/customfields?organization_id=${organization_id}`, put_options(body))
        const response = await data.json()
        return response
    } catch (error) {
        console.error(error)
    }
}

export const mark_as_active = async (item_id: string) => {
    try {
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/items/${item_id}/active?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const response = await data.json()
        return response
        
    } catch (error) {
        console.error(error)
    }
}

export const mark_as_inactive = async (item_id: string) => {
    try {
        
        const data = await fetch(`https://www.zohoapis.com/inventory/v1/items/${item_id}/inactive?organization_id=${organization_id}`, {
            method: 'POST',
            headers: options.headers
        })
        const response = await data.json()
        return response
    } catch (error) {
        console.error(error)
    }
}


//ITEM EXMAPLE
export const dummy_items = {
    "code": 0,
    "message": "success",
    "items": [
        {
            "item_id": "3850050000000128011",
            "name": "CASTROL ENGINE OIL GTX 5L",
            "item_name": "CASTROL ENGINE OIL GTX 5L",
            "unit": "ml",
            "status": "active",
            "source": "user",
            "is_combo_product": false,
            "is_linked_with_zohocrm": false,
            "zcrm_product_id": "",
            "description": "",
            "brand": "",
            "manufacturer": "",
            "rate": 360.00,
            "tax_id": "3850050000000076117",
            "tax_name": "VAT",
            "tax_percentage": 15,
            "purchase_account_id": "3850050000000034003",
            "purchase_account_name": "Cost of Goods Sold",
            "account_id": "3850050000000000388",
            "account_name": "Sales",
            "purchase_description": "",
            "purchase_rate": 200.00,
            "item_type": "inventory",
            "product_type": "goods",
            "stock_on_hand": 5.000000,
            "has_attachment": false,
            "is_returnable": false,
            "available_stock": 5.000000,
            "actual_available_stock": 5.000000,
            "sku": "GTX5L",
            "upc": "",
            "ean": "",
            "isbn": "",
            "part_number": "",
            "reorder_level": "",
            "image_name": "",
            "image_type": "",
            "image_document_id": "",
            "created_time": "2024-02-01T10:54:54+0200",
            "last_modified_time": "2024-02-01T10:55:14+0200",
            "length": "",
            "width": "",
            "height": "",
            "weight": "",
            "weight_unit": "kg",
            "dimension_unit": "cm"
        },
        {
            "item_id": "3850050000000131003",
            "name": "DISC PADS D345",
            "item_name": "DISC PADS D345",
            "unit": "D345",
            "status": "active",
            "source": "user",
            "is_combo_product": false,
            "is_linked_with_zohocrm": false,
            "zcrm_product_id": "",
            "description": "",
            "brand": "",
            "manufacturer": "",
            "rate": 350.00,
            "tax_id": "",
            "tax_name": "",
            "tax_percentage": 0,
            "purchase_account_id": "3850050000000034003",
            "purchase_account_name": "Cost of Goods Sold",
            "account_id": "3850050000000000388",
            "account_name": "Sales",
            "purchase_description": "",
            "purchase_rate": 200.00,
            "item_type": "inventory",
            "product_type": "goods",
            "stock_on_hand": 0.000000,
            "has_attachment": false,
            "is_returnable": true,
            "available_stock": 0.000000,
            "actual_available_stock": 0.000000,
            "sku": "D345",
            "upc": "",
            "ean": "",
            "isbn": "",
            "part_number": "",
            "reorder_level": "",
            "image_name": "",
            "image_type": "",
            "image_document_id": "",
            "created_time": "2024-02-03T19:00:04+0200",
            "last_modified_time": "2024-02-24T17:23:44+0200",
            "length": "",
            "width": "",
            "height": "",
            "weight": "",
            "weight_unit": "kg",
            "dimension_unit": "cm"
        },
        {
            "item_id": "3850050000000083099",
            "name": "Dummy Item",
            "item_name": "Dummy Item",
            "unit": "sku2",
            "status": "active",
            "source": "user",
            "is_combo_product": false,
            "is_linked_with_zohocrm": false,
            "zcrm_product_id": "",
            "description": "",
            "brand": "",
            "manufacturer": "",
            "rate": 100.00,
            "tax_id": "",
            "tax_name": "",
            "tax_percentage": 0,
            "purchase_account_id": "3850050000000034003",
            "purchase_account_name": "Cost of Goods Sold",
            "account_id": "3850050000000000388",
            "account_name": "Sales",
            "purchase_description": "",
            "purchase_rate": 50.00,
            "item_type": "inventory",
            "product_type": "goods",
            "stock_on_hand": 14.000000,
            "has_attachment": false,
            "is_returnable": true,
            "available_stock": 14.000000,
            "actual_available_stock": 14.000000,
            "sku": "sku1",
            "upc": "",
            "ean": "",
            "isbn": "",
            "part_number": "",
            "reorder_level": 1.000000,
            "image_name": "",
            "image_type": "",
            "image_document_id": "",
            "created_time": "2023-05-10T22:10:27+0200",
            "last_modified_time": "2023-05-10T23:13:25+0200",
            "length": "",
            "width": "",
            "height": "",
            "weight": "",
            "weight_unit": "kg",
            "dimension_unit": "cm"
        },
        {
            "item_id": "3850050000000077005",
            "name": "OIL FILTER GUD OD76 H79 [3/4 - 16UNF]",
            "item_name": "OIL FILTER GUD OD76 H79 [3/4 - 16UNF]",
            "unit": "Z587",
            "status": "active",
            "source": "user",
            "is_combo_product": false,
            "is_linked_with_zohocrm": false,
            "zcrm_product_id": "",
            "description": "",
            "brand": "",
            "manufacturer": "",
            "rate": 85.00,
            "tax_id": "",
            "tax_name": "",
            "tax_percentage": 0,
            "purchase_account_id": "3850050000000034003",
            "purchase_account_name": "Cost of Goods Sold",
            "account_id": "3850050000000000388",
            "account_name": "Sales",
            "purchase_description": "",
            "purchase_rate": 60.00,
            "item_type": "inventory",
            "product_type": "goods",
            "stock_on_hand": 1.000000,
            "has_attachment": true,
            "is_returnable": true,
            "available_stock": 1.000000,
            "actual_available_stock": 1.000000,
            "sku": "Z587",
            "upc": "",
            "ean": "",
            "isbn": "",
            "part_number": "",
            "reorder_level": 1.000000,
            "image_name": "Z587-profile.jpg",
            "image_type": "jpg",
            "image_document_id": "3850050000000077012",
            "created_time": "2023-02-07T11:44:42+0200",
            "last_modified_time": "2024-02-26T15:44:57+0200",
            "length": "",
            "width": "",
            "height": "",
            "weight": "",
            "weight_unit": "kg",
            "dimension_unit": "cm"
        },
        {
            "item_id": "3850050000000101013",
            "name": "Online Request Service Fee",
            "item_name": "Online Request Service Fee",
            "unit": "OSF",
            "status": "active",
            "source": "user",
            "is_combo_product": false,
            "is_linked_with_zohocrm": false,
            "zcrm_product_id": "",
            "description": "",
            "brand": "",
            "manufacturer": "",
            "rate": 1.00,
            "tax_id": "",
            "tax_name": "",
            "tax_percentage": 0,
            "purchase_account_id": "3850050000000034003",
            "purchase_account_name": "Cost of Goods Sold",
            "account_id": "3850050000000000388",
            "account_name": "Sales",
            "purchase_description": "",
            "purchase_rate": 0.00,
            "item_type": "sales_and_purchases",
            "product_type": "service",
            "has_attachment": false,
            "is_returnable": false,
            "sku": "OSF",
            "upc": "",
            "ean": "",
            "isbn": "",
            "part_number": "",
            "image_name": "",
            "image_type": "",
            "image_document_id": "",
            "created_time": "2024-01-23T20:00:17+0200",
            "last_modified_time": "2024-01-23T20:00:17+0200",
            "length": "",
            "width": "",
            "height": "",
            "weight": "",
            "weight_unit": "kg",
            "dimension_unit": "cm"
        }
    ],
    "page_context": {
        "page": 1,
        "per_page": 200,
        "has_more_page": false,
        "report_name": "Items",
        "applied_filter": "Status.All",
        "custom_fields": [],
        "sort_column": "name",
        "sort_order": "A"
    }
  }



  //item type
  export type Item = {
    item_id: string;
    name: string;
    item_name: string;
    unit?: string;
    status?: string;
    source?: string;
    is_combo_product?: boolean;
    is_linked_with_zohocrm?: boolean;
    zcrm_product_id?: string;
    description?: string;
    brand?: string;
    manufacturer?: string;
    rate?: number;
    tax_id?: string;
    tax_name?: string;
    tax_percentage?: number;
    purchase_account_id?: string;
    purchase_account_name?: string;
    account_id?: string;
    account_name?: string;
    purchase_description?: string;
    purchase_rate?: number;
    item_type?: string;
    product_type?: string;
    stock_on_hand?: number;
    has_attachment?: boolean;
    is_returnable?: boolean;
    available_stock?: number;
    actual_available_stock?: number;
    sku?: string;
    upc?: string;
    ean?: string;
    isbn?: string;
    part_number?: string;
    reorder_level?: number;
    image_name?: string;
    image_type?: string;
    image_document_id?: string;
    created_time?: string; // Consider using Date type if needed
    last_modified_time?: string; // Consider using Date type if needed
    length?: string;
    width?: string;
    height?: string;
    weight?: string;
    weight_unit?: string;
    dimension_unit?: string;
  }