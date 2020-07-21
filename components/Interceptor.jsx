import ErrorMessage from "./ErrorMessage"

export default (ncdcData, Component) => {
    return ncdcData instanceof Error ? <ErrorMessage /> : <Component ncdcData={ncdcData} />
}