# May 2021 Thoughts

- Move as much into the starter as possible
- Seperate Stripe and SANITY themes
- SANITY responsible for product data, set a specific product data format, page queries and default page templates
- Stripe responsible for configuring Stripe and USC, maybe has functions wrapped up in it as well
- Seperate ecommerce header theme /w cart?? Or put that into the Stripe theme?? Could the cart just be a shadowed component with the actual implementation in the starter??

# Old stuff

## Needed config

- All the sanity configs

## Theme config

- Base SANITY info

## Possible to have a "stripe-config.json" file??

- Stripe Public Key
- Checkout mode (String)
- Success URL (String)
- Cancel URL (String)
- Currency (String - Need in NTL Function)
- Allowed countries (Array of Strings)
- Billing address collection (Boolean)
- Session mode (Needed in NTL function, payment is default)

## Env Variables

- Stripe Public Key
- Stripe Private Key
- SANITY Project ID
- SANITY Project Dataset
- SANITY Project Token
