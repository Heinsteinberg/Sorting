const elementBox = document.getElementById('contents-box');
const sortingList = [
    { name: 'Selection Sort', keywords: ['selectionsort', '선택정렬'], id: 'selection-sort' },
    { name: 'Bubble Sort', keywords: ['bubblesort', '버블정렬', '버블 소트'], id: 'bubble-sort' },
    { name: 'Insertion Sort', keywords: [], id: 'insertion-sort' },
    { name: 'Quick Sort', keywords: ['quicksort', '퀵정렬', '퀵소트'], id: 'quick-sort' },
    { name: 'Merge Sort', keywords: ['mergesort', '합병정렬', '병합정렬', '머지소트'], id: 'merge-sort' },
    { name: 'Heap Sort', keywords: ['heapsort', '힙정렬', '힙소트'], id: 'heap-sort' },
    { name: 'Radix Sort', keywords: ['radixsort', '기수정렬'], id: 'radix-sort' },
    { name: 'Bogo Sort', keywords: ['bogosort', '보고정렬'], id: 'bogo-sort' },
];

const compareKeyword = (inputKeyword) => {
    let newStateList = {};
    for (let sorting of sortingList) {
        newStateList[sorting.id] = false;
        for (let keyword of sorting.keywords) {
            if (keyword.includes(inputKeyword.replace(/[^a-zA-Z가-힣]/g, ''))) {
                newStateList[sorting.id] = true;
                break;
            }
        }
    }
    return newStateList;
};

const manageList = (stateList) => {
    for (let state in stateList) {
        const element = document.getElementById(state);
        if (stateList[state]) {
            element.style.display = null;
        } else {
            element.style.display = 'none';
        }
    }
};

sortingList.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else {
        return 0;
    }
});

for (let sorting of sortingList) {
    const newChild = document.createElement('div');
    const image = document.createElement('img')
    const name = document.createElement('div');
    newChild.classList.add('contents-item');
    newChild.classList.add('hover');
    newChild.setAttribute('id', sorting.id);
    image.classList.add('icon');
    image.setAttribute('src', 'Images/icon.svg');
    name.classList.add('contents-name');
    name.innerText = sorting.name;
    newChild.appendChild(image);
    newChild.appendChild(name);
    elementBox.appendChild(newChild);
}

document.getElementById('search').addEventListener('keyup', () => {
    const searchKeyword = document.querySelector('#search > input').value.trim().toLowerCase();
    const stateList = compareKeyword(searchKeyword);
    manageList(stateList);
});

for (let element of document.getElementsByClassName('contents-item')) {
    element.addEventListener('click', () => {
        const id = element.id;
        document.querySelector('#search > input').value = "";
        location.href = `${id}/${id}.html`;
    });
}