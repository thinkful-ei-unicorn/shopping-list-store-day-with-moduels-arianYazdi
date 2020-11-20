import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id) {
    const foundItem = this.items.find(item => item.id === id)
    console.log(foundItem)
    return foundItem
}

function addItem(name) {
    try {
        item.validateName(name)
        item.create(name)
        this.items.push(item.create(name))
    } catch{}
}

function findAndToggleCheck(id) {this.findById(id).checked = !this.findById(id).checked}

function findAndUpdateName(id, newName) {
    try {
        item.validateName(newName)
        this.findById(id).name = newName
    } catch{
    }
}

function findAndDelete(id){
    let index = this.items.findIndex(item => item.id === id)
     this.items.splice(index, 1)
}

function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems
}


export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleCheck,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};