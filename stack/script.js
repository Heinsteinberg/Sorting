class Node {
    constructor(value, prev) {
        this.value = value;
        this.prev = prev;
        this.appendedChild = document.getElementById('stack').appendChild(document.createElement('div'));
        this.appendedChild.classList.add('node');
        this.appendedChild.innerText = value;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(element) {
        this.top = new Node(element, this.top);
        this.validatePush();
    }
    validatePush() {
        const nodeHeight = document.getElementsByClassName('node')[0].offsetHeight;
        const stackHeight = document.getElementById('stack').offsetHeight;

        if (stackHeight > nodeHeight) {
            alert('Width exceeded!');
            this.pop();
        }
    }
    pop() {
        if (this.top === null) {
            return false;
        } else {
            let deletedElement = this.top.value;

            this.top.appendedChild.remove();
            this.top = this.top.prev;
            return deletedElement;
        }
    }
}

let myStack = new Stack();

document.getElementById('push').addEventListener('input', () => {
    const value = document.getElementById('push').value;
});

document.getElementById('push-button').addEventListener('click', () => {
    const value = document.getElementById('push').value;

    if (value === '') {
        alert('Input Error!');
    } else {
        myStack.push(value);
    }
});

document.getElementById('pop-button').addEventListener('click', () => {
    const poppedItem = myStack.pop();

    if (poppedItem === false) {
        alert('Pop Error!');
    } else {}
});