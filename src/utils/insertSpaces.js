export default (value, spaces = []) => {
    spaces.forEach((space) => {
        value = value.slice(0, parseInt(space)) + " " + value.slice(parseInt(space));
    });

    return value.trim();
}