
export const dateUtil = (date: string) => {
    const newDate = date.split('-')
    const year = newDate[0]
    const month = newDate[1]
    const day = newDate[2]
    return `${day}${month}${year}`
}