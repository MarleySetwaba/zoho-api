import {
  delete_options,
  options,
  organization_id,
  post_options,
  put_options,
} from "../zoho";

export const create_a_composite_item = async (body: any) => {
  try {
    const data = await fetch(
      `https://www.zohoapis.com/inventory/v1/compositeitems?organization_id=${organization_id}`,
      post_options(body)
    );
    const response = await data.json();
return response

  } catch (error) {
    console.error(error);
  }
};

export const list_all_composite_items = async () => {
  try {
    const data = await fetch(
      `https://www.zohoapis.com/inventory/v1/compositeitems?organization_id=${organization_id}`,
      options
    );
    const res = await data.json();
return res
  } catch (error) {
    console.error(error);
  }
};

export const update_a_composite_item = async (
  composite_item_id: string,
  body: any
) => {
  try {
    const data = await fetch(
      `https://www.zohoapis.com/inventory/v1/compositeitems/${composite_item_id}?organization_id=${organization_id}`,
      put_options(body)
    );
    const res = await data.json();
return res
  } catch (error) {
    console.error(error);
  }
};

export const retrieving_a_composite_item = async (
  composite_item_id: string
) => {
  try {
    const data = await fetch(
      `https://www.zohoapis.com/inventory/v1/compositeitems/${composite_item_id}?organization_id=${organization_id}`,
      options
    );
    const res = await data.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const delete_a_composite_item = async (composite_item_id: string) => {
  try {
    const data = await fetch(
      `https://www.zohoapis.com/inventory/v1/compositeitems/${composite_item_id}?organization_id=${organization_id}`,
      delete_options
    );
    const res = await data.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const mark_composite_item_as_active = async (
  composite_item_id: string
) => {
  try {
    const data = await fetch(
      `https://www.zohoapis.com/inventory/v1/compositeitems/${composite_item_id}?organization_id=${organization_id}`,
      {
        method: "POST",
        headers: options.headers,
      }
    );
    const res = await data.json();
return res
  } catch (error) {
    console.error(error);
  }
};

export const mark_composite_item_as_inactive = async (
  composite_item_id: string
) => {
  try {
    const data = await fetch(
      `https://www.zohoapis.com/inventory/v1/compositeitems/${composite_item_id}/inactive?organization_id=${organization_id}`,
      {
        method: "POST",
        headers: options.headers,
      }
    );
    const res = await data.json();
return res
  } catch (error) {
    console.error(error);
  }
};

export const create_bundle = async (body: any) => {
  try {
    const data = await fetch(
      `https://www.zohoapis.com/inventory/v1/bundles?organization_id=${organization_id}`,
      post_options(body)
    );
    const res = await data.json();
return res
  } catch (error) {
    console.error(error);
  }
};

export const get_bundling_history = async (composite_item_id: string) => {
  try {
    const data = await fetch(
      `https://www.zohoapis.com/inventory/v1/bundles?organization_id=${organization_id}&composite_item_id=${composite_item_id}`,
      options
    );
    const res = await data.json();
return res
  } catch (error) {
    console.error(error);
  }
};

export const retrieve_bundle = async (bundle_id: string) => {
  try {
    const data = await fetch(
      `https://www.zohoapis.com/inventory/v1/bundles/${bundle_id}?organization_id=${organization_id}`,
      options
    );
    const res = await data.json();
return res
  } catch (error) {
    console.error(error);
  }
};

export const delete_bundle = async (bundle_id: string) => {
  try {
    const data = await fetch(
      `https://www.zohoapis.com/inventory/v1/bundles/${bundle_id}?organization_id=${organization_id}`,
      delete_options
    );
    const res = await data.json();
return res
  } catch (error) {
    console.error(error);
  }
};
