import englishMessages from "ra-language-english";
import { TranslationMessages } from "react-admin";

const customEnglishMessages: TranslationMessages = {
  ...englishMessages,
  rin: {
    search: "Search",
    configuration: "Configuration",
    language: "Language",
    settings: "Settings",
    theme: {
      name: "Theme",
      light: "Light",
      dark: "Dark",
    },
    tree: {
      new_node: "New Node",
      actions: {
        add_child: "Add Child",
        add_root: "Add Root",
      },
    },
    dashboard: {
      monthly_revenue: "Monthly Revenue",
      month_history: "30 Day Revenue History",
      new_orders: "New Orders",
      pending_reviews: "Pending Reviews",
      all_reviews: "See all reviews",
      new_customers: "New Customers",
      all_customers: "See all customers",
      pending_orders: "Pending Orders",
      order: {
        items:
          "by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items",
      },
      welcome: {
        title: "Welcome to the react-admin e-commerce demo",
        subtitle:
          "This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
        ra_button: "react-admin site",
        demo_button: "Source for this demo",
      },
    },
    menu: {
      admin: "Administrator",
    },
    auth: {
      current_password: "Current Password",
      new_password: "New Password",
      confirm_password: "Confirm Password",
      validation: {
        confirm_equal: "Must equal new password",
      },
      change_password_error: "Change password failed",
      change_password: "Change password",
      change_password_success: "Change password succeed",
      profile: "Profile",
      email: "Email",
      full_name: "Full Name",
      update_profile: "Update Profile",
    },
    model: {
      created_at: "Creation Time",
      creator_user_id: "Creator",
      modified_at: "Modifion Time",
      modifier_user_id: "Modifier",
    },
  },
  resources: {
    admin: {
      name: "Administration",
    },
    menus: {
      name: "Menu |||| Menus",
      tabs: {
        resources: "Resources",
        general: "General",
      },
    },
    roles: {
      name: "Role |||| Roles",
      tabs: {
        general: "General",
        permissions: "Permissions",
        menus: "Menus",
      },
      fields: {
        name: "Name",
        slug: "Slug",
        is_default: "Default",
        is_static: "Static",
      },
    },
    resources: {
      name: "Resource |||| Resources",
    },
    users: {
      name: "User |||| Users",
    },
    products: {
      name: "Poster |||| Posters",
      fields: {
        category_id: "Category",
        height_gte: "Min height",
        height_lte: "Max height",
        height: "Height",
        image: "Image",
        price: "Price",
        reference: "Reference",
        sales: "Sales",
        stock_lte: "Low Stock",
        stock: "Stock",
        thumbnail: "Thumbnail",
        width_gte: "Min width",
        width_lte: "Max width",
        width: "Width",
      },
      tabs: {
        image: "Image",
        details: "Details",
        description: "Description",
        reviews: "Reviews",
      },
      filters: {
        categories: "Categories",
        stock: "Stock",
        no_stock: "Out of stock",
        low_stock: "1 - 9 items",
        average_stock: "10 - 49 items",
        enough_stock: "50 items & more",
        sales: "Sales",
        best_sellers: "Best sellers",
        average_sellers: "Average",
        low_sellers: "Low",
        never_sold: "Never sold",
      },
    },
    reviews: {
      name: "Review |||| Reviews",
      amount: "1 review |||| %{smart_count} reviews",
      relative_to_poster: "Review on poster",
      detail: "Review detail",
      fields: {
        customer_id: "Customer",
        command_id: "Order",
        product_id: "Product",
        date_gte: "Posted since",
        date_lte: "Posted before",
        date: "Date",
        comment: "Comment",
        rating: "Rating",
      },
      action: {
        accept: "Accept",
        reject: "Reject",
      },
      notification: {
        approved_success: "Review approved",
        approved_error: "Error: Review not approved",
        rejected_success: "Review rejected",
        rejected_error: "Error: Review not rejected",
      },
    },
  },
};

export default customEnglishMessages;
