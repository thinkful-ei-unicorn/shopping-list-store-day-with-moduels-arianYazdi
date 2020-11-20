function validateName(name) {
    if (!name) {
        throw new Error('please enter a name');
    }
}

function create(name) {
    return {id: cuid(), name: name, checked: false}
}

export default {
    validateName,
    create
};