import Typography from "typography"
import lawtonTheme from "typography-theme-lawton"

lawtonTheme.baseFontSize = '20px'

const typography = new Typography(lawtonTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography