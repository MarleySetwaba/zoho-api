const items = {
    "code": 0,
    "message": "success",
    "items": [
        {
            "group_id": 4815000000044220,
            "group_name": "Bags",
            "item_id": 4815000000044208,
            "name": "Bags-small",
            "status": "active",
            "source": "string",
            "is_linked_with_zohocrm": false,
            "item_type": "inventory",
            "description": "description",
            "rate": 6,
            "is_taxable": true,
            "tax_id": 4815000000044043,
            "tax_name": "Sales",
            "tax_percentage": 12,
            "purchase_description": "Purchase description",
            "purchase_rate": 6,
            "is_combo_product": false,
            "product_type": "goods",
            "attribute_id1": 4815000000044112,
            "attribute_name1": "Small",
            "reorder_level": 5,
            "stock_on_hand": 50,
            "available_stock": 2,
            "actual_available_stock": 2,
            "sku": "SK123",
            "upc": 111111111111,
            "ean": 111111111112,
            "isbn": 111111111113,
            "part_number": 111111111114,
            "attribute_option_id1": 4815000000044214,
            "attribute_option_name1": "Small",
            "image_name": "bag_s.jpg",
            "image_type": "jpg",
            "created_time": "2013-01-24",
            "last_modified_time": "2013-01-24",
            "hsn_or_sac": 85423100,
            "sat_item_key_code": "string",
            "unitkey_code": "string",
            "custom_fields": [
                {
                    "customfield_id": "46000000012845",
                    "value": "Normal"
                }
            ]
        },
 
    ],
    page_context: {}
}


type BaseResponse<T> = {
    code: number;
    message: string;
    data: T;
    page_context: unknown;
}
type RequestParams = {
    organization_id: string;
    resource: string;
    resource_id?: string;
    request_type: RequestType
    query_params: GenericQueryParams<{}>

}

type RequestType = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    headers: {
        Authorization: string
        "content-type": string;
    }
    body?: unknown
}

type ResourceQueryParams = {
    name_contains: string;
    description: string;

}
type GenericQueryParams<T> = {
    resource_params?: Partial<ResourceQueryParams>
    custom_params?: T
}


const access_token = 'my-access-token'




const example_body = {
    name: 'marley',
    surname: 'setwaba'
}

const headers = {
    Authorization: `Zoho oauth${access_token}`,
    "content-type": 'application/json'
    }

const req: RequestParams = {
    organization_id: '122345',
    resource: 'salesorders',
    request_type: {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(example_body)
    },
    query_params: {
resource_params: {
    name_contains: 'GUD',
    description: 'GUD'
},
custom_params: {
    cf_shop: '951223'
}
    }

}

const convertObjToUrl = (obj_1: any, obj_2: any) => {
const obj = {...obj_1, ...obj_2}

      let str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }

  return str.join("&");

}

const zoho = (request: RequestParams) => {

const resource_searchParams = convertObjToUrl(request.query_params.resource_params, request.query_params.custom_params)

const baseUrl = `https://www.zohoapis.com/inventory/v1/${request.resource}?organization_id=${request.organization_id}&${resource_searchParams}`

// console.log(baseUrl)
console.log('requesttype', request.request_type)


}
 
 zoho(req)













  
