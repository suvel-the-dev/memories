const getPlaceholders = (num) => {
    let placeholders = []
    for (let i = 0; i < num; i++) {
        placeholders.push({
            id: i,
            title: `The ${i} day`,
            image: `https://picsum.photos/${i * 100}`,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            location: "New York",
            geoMark: "40.7128, -74.0060",
        })
    }
    return placeholders
}

export default (
    getPlaceholders(20)
)