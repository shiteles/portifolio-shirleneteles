async function fetchProfileData () {
    const url = 'https://raw.githubusercontent.com/shiteles/portifolio-shirleneteles/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.jason()
}