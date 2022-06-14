const getData = async(url) => {
    try {

        const resp = await fetch(url);
        const data = await resp.json();
        return data;

    } catch (error) {
        throw error
    }
}

export default getData;