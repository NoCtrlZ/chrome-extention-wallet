const Route = () => {
    const extention = process.env.NODE_ENV === "development" ? "" : ".html"
    const dirname = "contents/"
    return {
        index: `${dirname}index${extention}`,
        about: `${dirname}about${extention}`
    }
}

export default Route
