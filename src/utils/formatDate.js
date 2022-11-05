export const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-GB", {timezone: "UTC"})
}