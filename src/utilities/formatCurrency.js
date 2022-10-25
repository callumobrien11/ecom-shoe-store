const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "CAD",
    style: "currency"
})

export default function formatCurrency(Number) {
    return CURRENCY_FORMATTER.format(Number)
}