const elementBox = document.getElementById('contents-box');
const dsKeywordList = [
    { name: 'Stack', keywords: ['stack', '스택'], id: 'stack' },
    { name: 'Queue', keywords: ['queue', '큐'], id: 'queue' },
    { name: 'List', keywords: ['list', '리스트'], id: 'list' },
    { name: 'Tree', keywords: ['tree', '트리'], id: 'tree' },
    { name: 'Binary Tree', keywords: ['binary tree', '이진트리'], id: 'binary-tree' },
    { name: 'Binary Search Tree', keywords: ['binary search tree', '이진탐색트리'], id: 'binary-search-tree' },
    { name: 'AVL Tree', keywords: ['avltree', 'avl트리'], id: 'avl-tree' },
    { name: 'Red-Black Tree', keywords: ['redblacktree', '레드블랙트리'], id: 'red-black-tree' },
    { name: 'Graph', keywords: ['graph', '그래프'], id: 'graph' },
    { name: 'DFS', keywords: ['dfs', '깊이우선탐색'], id: 'dfs' },
    { name: 'BFS', keywords: ['bfs', '너비우선탐색'], id: 'bfs' },
    { name: 'Connected Components', keywords: ['connectedcomponents', '연결요소'], id: 'connected-components' },
    { name: 'Strongly Connected Components', keywords: ['stronglyconnectedcomponents', '강한연결요소', '강한결합요소', '강결합요소', '강결합컴포넌트'], id: 'strongly-connected-components' },
    { name: 'Topological Sorting', keywords: ['topological-sorting', '위상정렬'], id: 'topological-sorting' },
    { name: 'Heap', keywords: ['heap', '힙'], id: 'heap' },
    { name: 'Priority Queue', keywords: ['priorityqueue', '우선순위큐'], id: 'priority-queue' },
    { name: 'Selection Sort', keywords: ['selectionsort', '선택정렬'], id: 'selection-sort' },
    { name: 'Insertion Sort', keywords: ['insertionsort', '삽입정렬'], id: 'insertion-sort' },
    { name: 'Bubble Sort', keywords: ['bubblesort', '버븥정렬', '버블소트'], id: 'bubble-sort' },
    { name: 'Quick Sort', keywords: ['quicksort', '퀵정렬', '퀵소트'], id: 'quick-sort' },
    { name: 'Merge Sorts', keywords: ['mergesort', '병합정렬', '합병정렬', '머지정렬', '머지소트'], id: 'merge-sort' },
    { name: 'Heap Sort', keywords: ['heapsort', '힙정렬', '힙소트'], id: 'heap-sort' },
    { name: 'Radix Sort', keywords: ['radixsort', '기수정렬'], id: 'radix-sort' },
    { name: 'Hash Table', keywords: ['hashtable', '해시테이블'], id: 'hash-table' },
];

const compareKeyword = (inputKeyword) => {
    let newStateList = {};
    for (let dsKeyword of dsKeywordList) {
        newStateList[dsKeyword.id] = false;
        for (let keyword of dsKeyword.keywords) {
            if (keyword.includes(inputKeyword.replace(/[^a-zA-Z가-힣]/g, ''))) {
                newStateList[dsKeyword.id] = true;
                break;
            }
        }
    }
    return newStateList;
};

const manageList = (dsStateList) => {
    for (let dsState in dsStateList) {
        const element = document.getElementById(dsState);
        if (dsStateList[dsState]) {
            element.style.display = null;
        } else {
            element.style.display = 'none';
        }
    }
};

dsKeywordList.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else {
        return 0;
    }
});

for (let element of dsKeywordList) {
    const newChild = document.createElement('div');
    const image = document.createElement('img')
    const name = document.createElement('div');
    newChild.classList.add('contents-item');
    newChild.classList.add('hover');
    newChild.setAttribute('id', element.id);
    image.classList.add('icon');
    image.setAttribute('src', 'Images/icon.svg');
    name.classList.add('contents-name');
    name.innerText = element.name;
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